import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Quiz from "../models/Quiz";

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Quiz.find()
    .then((questions) => res.status(200).json({ questions }))
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
