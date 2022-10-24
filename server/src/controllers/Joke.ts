import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Joke from "../models/Joke";

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Joke.find()
    .then((jokes) => res.status(200).json({ jokes }))
    .catch((error) => res.status(500).json({ error }));
};
