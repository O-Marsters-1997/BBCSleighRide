"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Country_1 = __importDefault(require("../controllers/Country"));
const Quiz_1 = __importDefault(require("../controllers/Quiz"));
const Joke_1 = __importDefault(require("../controllers/Joke"));
const createRouter = function (collection) {
    const router = express_1.default.Router();
    if (collection == "countries") {
        router.get("/", Country_1.default.readAll);
    }
    else if (collection == "jokes") {
        router.get("/", Joke_1.default.readAll);
    }
    else {
        router.get("/", Quiz_1.default.readAll);
    }
    return router;
};
module.exports = createRouter;
//# sourceMappingURL=createRouter.js.map