"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
const logger_1 = __importDefault(require("../logger"));
const Quiz_1 = __importDefault(require("../models/Quiz"));
const utils_1 = require("../utils");
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
    logger_1.default.info("Seeding data to mongoDB database");
})
    .catch((error) => {
    logger_1.default.info(error);
});
const questions = [
    new Quiz_1.default({
        question: "How do you say ‘Happy Christmas’ in French?",
        correct: "Joyeux Noël",
        options: ["Feliz navidad", "Salut", "Joyeux Noël"],
    }),
    new Quiz_1.default({
        question: "What is one of the most popular Christmas foods in Kenya?",
        correct: "Nyama Choma",
        options: ["Fish", "Christmas Pudding", "Nyama Choma"],
    }),
    new Quiz_1.default({
        question: "How do you say Merry Christmas in Afrikaans?",
        correct: "Geseënde Kersfees",
        options: ["Geseënde Kersfees", "Joyeux Noël", "Frohe Weihnachten"],
    }),
    new Quiz_1.default({
        question: "What do people eat for Christmas in Argentina?",
        correct: "Roast pig, mince pie and veal in mayonaise",
        options: [
            "Turkey and mashed potatoes",
            "Roast pig, mince pie and veal in mayonaise",
            "Lots of meat… and Malva Pudding",
        ],
    }),
    new Quiz_1.default({
        question: "How do you say merry Christmas in Spanish?",
        correct: "Feliz navidad",
        options: [" Joyeux Noel", "Feliz navidad", "Heri ya Krismasi"],
    }),
    new Quiz_1.default({
        question: "Which of these songs was written by an Australian",
        correct: "Aussie Jingle Bells",
        options: [
            "All I want for Christmas is You",
            "Jingle Bell Rock",
            "Aussie Jingle Bells",
        ],
    }),
    new Quiz_1.default({
        question: "What do people eat for Christmas in Japan?",
        correct: "Kentucky Fried Chicken",
        options: [
            "Kentucky Fried Chicken",
            "Turkey and mashed potatoes",
            "stuffed chicken,  something called nacatamal, rice, and freshly baked bread",
        ],
    }),
    new Quiz_1.default({
        question: "In which country is Nacatamal a popular Christmas dish?",
        correct: "Nicaragua",
        options: ["Nicaragua", "Argentina", "Kenya"],
    }),
    new Quiz_1.default({
        question: "How do you say merry Christmas in Kenya(their main language is Swahili!)?",
        correct: "Heri ya Krsmasi",
        options: [" Joyeux Noel", "Happy Holidays", "Heri ya Krismasi"],
    }),
];
(0, utils_1.seedData)(Quiz_1.default, questions);
//# sourceMappingURL=quizSeeds.js.map