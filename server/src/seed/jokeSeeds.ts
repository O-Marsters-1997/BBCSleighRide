import mongoose from "mongoose";
import { config } from "../config/config";
import logger from "../logger";
import Joke from "../models/Joke";
import { seedData } from "../utils";

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    logger.info("Seeding data to mongoDB database");
  })
  .catch((error) => {
    logger.info(error);
  });

const jokes = [
  new Joke({
    joke: "What do you get when you cross a Christmas tree with an apple?",
    punchline: "A pineapple!",
  }),
  new Joke({
    joke: "Why was the snowman looking through the carrots?",
    punchline: "He was picking his nose!",
  }),
  new Joke({
    joke: "Why does everyone love Frosty the Snowman?",
    punchline: "He’s cool",
  }),
  new Joke({
    joke: "What do you call an elf wearing earmuffs?",
    punchline: "Anything you want—he can’t hear you!",
  }),
  new Joke({
    joke: "What do you call Santa when he stops moving?",
    punchline: "Santa Pause.",
  }),
  new Joke({
    joke: "What do Santa's elves learn in school?",
    punchline: "The elf-abet",
  }),
  new Joke({
    joke: "What goes 'Oh, Oh, Oh?'",
    punchline: "Santa walking backwards!",
  }),
  new Joke({
    joke: "How does a sheep say Merry Christmas?",
    punchline: "Seasons bleatings",
  }),
  new Joke({
    joke: "How does a snowman lose weight?",
    punchline: "He waits for the weather to get warmer!",
  }),
  new Joke({
    joke: "What do you call a reindeer with bad manners?",
    punchline: "RUDE-olph!",
  }),
  new Joke({
    joke: "What do monkey’s sing at Christmas?",
    punchline: "Jungle bells!",
  }),
];

seedData(Joke, jokes);
