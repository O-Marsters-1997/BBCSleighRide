import { NextFunction, Request, Response } from "express";
import Joke from "../models/Joke";

// test commit
const readAll = async (req: Request, res: Response, next: NextFunction) => {
  return await Joke.find()
    .then((jokes) => res.status(200).json({ jokes }))
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
