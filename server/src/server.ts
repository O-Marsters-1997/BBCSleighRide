import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";
import logger from "./logger";
import createRouter from "./routes/createRouter";
import cors from "cors";

const app = express();
app.use(cors());

// Connecting to mongoose
mongoose
  .connect(config.mongo.url, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    logger.info("connected to mongoDB");
    startServer();
  })
  .catch((error: any) => {
    logger.info(error);
  });

//   Only start the server if Mongo Connects
export const startServer = () => {
  app.use((req, res, next) => {
    // log the request
    logger.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`,
    );
    res.on("finish", () => {
      // Log the Response
      logger.info(
        `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`,
      );
    });
    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** Rules of our API */
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET",
      );
      return res.status(200).json({});
    }

    next();
  });

  // Routes

  const jokesRouter = createRouter("jokes");
  app.use("/joke", jokesRouter);

  const countriesRouter = createRouter("countries");
  app.use("/map", countriesRouter);

  //
  const quizRouter = createRouter("quiz");
  app.use("/questions", quizRouter);

  // Healthcheck
  app.get("/ping", (req, res, next) => {
    res.status(200).json({ message: "pong" });
  });

  // Error handling
  app.use((req, res, next) => {
    const error = new Error("not found");
    logger.error(error);
    return res.status(404).json({ message: error.message });
  });
  http
    .createServer(app)
    .listen(config.server.port, () =>
      logger.info(`Server is running on port ${config.server.port}`),
    );
};
