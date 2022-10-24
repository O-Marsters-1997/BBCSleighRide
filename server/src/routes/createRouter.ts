import express from "express";
import controllerCountry from "../controllers/Country";
import controllerQuiz from "../controllers/Quiz";
import controllerJoke from "../controllers/Joke";

const createRouter = function (collection: string) {
  const router = express.Router();
  if ((collection = "countries")) {
    router.get("/", controllerCountry.readAll);
  } else if (collection == "quiz") {
    router.get("/", controllerQuiz.readAll);
  } else {
    router.get("/", controllerJoke.readAll);
  }
};

export = createRouter;
