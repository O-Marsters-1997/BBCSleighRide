import express from "express";
import controllerCountry from "../controllers/Country";
import controllerQuiz from "../controllers/Quiz";
import controllerJoke from "../controllers/Joke";

const createRouter = function (collection: string) {
  const router = express.Router();

  if (collection == "countries") {
    router.get("/", controllerCountry.readAll);
  } else if (collection == "jokes") {
    router.get("/", controllerJoke.readAll);
  } else {
    router.get("/", controllerQuiz.readAll);
  }
  return router;
};

export = createRouter;
