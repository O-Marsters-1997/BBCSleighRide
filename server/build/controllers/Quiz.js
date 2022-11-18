"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Quiz_1 = __importDefault(require("../models/Quiz"));
const readAll = (req, res, next) => {
    return Quiz_1.default.find()
        .then((quiz) => res.status(200).json({ quiz }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { readAll };
