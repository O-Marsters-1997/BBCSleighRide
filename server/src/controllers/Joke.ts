import { NextFunction, Request, Response } from "express";
import Joke from "../models/Joke";
import { shuffleArray } from "../utils";

// test commit
const readAll = async (req: Request, res: Response, next: NextFunction) => {
  return await Joke.find()
    .then((jokes: Joke[]) =>
      res
        .status(200)
        .json({ joke: shuffleArray(jokes).find((item: Joke) => item) }),
    )
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
