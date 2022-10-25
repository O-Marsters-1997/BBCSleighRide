"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
const logger_1 = __importDefault(require("../logger"));
const Joke_1 = __importDefault(require("../models/Joke"));
const utils_1 = require("../utils");
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
    logger_1.default.info("Seeding data to mongoDB database");
})
    .catch((error) => {
    logger_1.default.info(error);
});
const jokes = [
    new Joke_1.default({
        joke: "What do you get when you cross a Christmas tree with an apple?",
        punchline: "A pineapple!",
    }),
    new Joke_1.default({
        joke: "Why was the snowman looking through the carrots?",
        punchline: "He was picking his nose!",
    }),
    new Joke_1.default({
        joke: "Why does everyone love Frosty the Snowman?",
        punchline: "He’s cool",
    }),
    new Joke_1.default({
        joke: "What do you call an elf wearing earmuffs?",
        punchline: "Anything you want—he can’t hear you!",
    }),
    new Joke_1.default({
        joke: "What do you call Santa when he stops moving?",
        punchline: "Santa Pause.",
    }),
    new Joke_1.default({
        joke: "What do Santa's elves learn in school?",
        punchline: "The elf-abet",
    }),
    new Joke_1.default({
        joke: "What goes 'Oh, Oh, Oh?'",
        punchline: "Santa walking backwards!",
    }),
    new Joke_1.default({
        joke: "How does a sheep say Merry Christmas?",
        punchline: "Seasons bleatings",
    }),
    new Joke_1.default({
        joke: "How does a snowman lose weight?",
        punchline: "He waits for the weather to get warmer!",
    }),
    new Joke_1.default({
        joke: "What do you call a reindeer with bad manners?",
        punchline: "RUDE-olph!",
    }),
    new Joke_1.default({
        joke: "What do monkey’s sing at Christmas?",
        punchline: "Jungle bells!",
    }),
];
(0, utils_1.seedData)(Joke_1.default, jokes);
