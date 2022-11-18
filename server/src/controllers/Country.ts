import { NextFunction, Request, Response } from "express";
import Country from "../models/Country";

const readAll = async (req: Request, res: Response, next: NextFunction) => {
  return await Country.find()
    .then((countries) => res.status(200).json({ countries }))
    .catch((error) => res.status(500).json({ error }));
};

export default { readAll };
