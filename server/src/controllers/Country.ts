import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Country from "../models/Country";

const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Country.find()
    .then((countries) => res.status(200).json({ countries }))
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
