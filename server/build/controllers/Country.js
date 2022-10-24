"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Country_1 = __importDefault(require("../models/Country"));
const readAll = (req, res, next) => {
    return Country_1.default.find()
        .then((countries) => res.status(200).json({ countries }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { readAll };
