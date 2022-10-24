"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joke_1 = __importDefault(require("../models/Joke"));
const readAll = (req, res, next) => {
    return Joke_1.default.find()
        .then((jokes) => res.status(200).json({ jokes }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { readAll };
