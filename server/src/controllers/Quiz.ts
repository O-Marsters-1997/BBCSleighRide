import { NextFunction, Request, Response } from "express";
import Quiz from "../models/Quiz";

const readAll = async (req: Request, res: Response, next: NextFunction) => {
  return await Quiz.find()
    .then((quiz) => res.status(200).json({ quiz }))
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
