import { NextFunction, Request, Response } from "express";
import Quiz from "../models/Quiz";
import { shuffleArray } from "../utils";

const readAll = async (req: Request, res: Response, next: NextFunction) => {
  console.log("fetching");
  return await Quiz.find()
    .then((quiz) => res.status(200).json({ quiz: shuffleArray(quiz, 5) }))
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
