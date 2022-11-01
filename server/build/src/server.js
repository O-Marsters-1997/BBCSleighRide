"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const logger_1 = __importDefault(require("./logger"));
const createRouter_1 = __importDefault(require("./routes/createRouter"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Connecting to mongoose
mongoose_1.default
    .connect(config_1.config.mongo.url, {
    retryWrites: true,
    w: "majority",
})
    .then(() => {
    logger_1.default.info("connected to mongoDB");
    (0, exports.startServer)();
})
    .catch((error) => {
    logger_1.default.info(error);
});
//   Only start the server if Mongo Connects
const startServer = () => {
    app.use((req, res, next) => {
        // log the request
        logger_1.default.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on("finish", () => {
            // Log the Response
            logger_1.default.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });
        next();
    });
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    /** Rules of our API */
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method == "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.status(200).json({});
        }
        next();
    });
    // Routes
    const jokesRouter = (0, createRouter_1.default)("jokes");
    app.use("/jokes", jokesRouter);
    const countriesRouter = (0, createRouter_1.default)("countries");
    app.use("/countries", countriesRouter);
    //
    const quizRouter = (0, createRouter_1.default)("quiz");
    app.use("/questions", quizRouter);
    // Healthcheck
    app.get("/ping", (req, res, next) => {
        res.status(200).json({ message: "pong" });
    });
    // Error handling
    app.use((req, res, next) => {
        const error = new Error("not found");
        logger_1.default.error(error);
        return res.status(404).json({ message: error.message });
    });
    http_1.default
        .createServer(app)
        .listen(config_1.config.server.port, () => logger_1.default.info(`Server is running on port ${config_1.config.server.port}`));
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map