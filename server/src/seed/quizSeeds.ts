import mongoose from "mongoose";
import { config } from "../config/config";
import logger from "../logger";
import Quiz from "../models/Quiz";
import { seedData } from "../utils";

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    logger.info("Seeding data to mongoDB database");
  })
  .catch((error) => {
    logger.info(error);
  });

const questions = [
  new Quiz({
    question: "How do you say ‘Happy Christmas’ in French?",
    correct: "Joyeux Noël",
    options: ["Feliz navidad", "Salut", "Joyeux Noël"],
  }),
  new Quiz({
    question: "What is one of the most popular Christmas foods in Kenya?",
    correct: "Nyama Choma",
    options: ["Fish", "Christmas Pudding", "Nyama Choma"],
  }),
  new Quiz({
    question: "How do you say Merry Christmas in Afrikaans?",
    correct: "Geseënde Kersfees",
    options: ["Geseënde Kersfees", "Joyeux Noël", "Frohe Weihnachten"],
  }),
  new Quiz({
    question: "What do people eat for Christmas in Argentina?",
    correct: "Roast pig, mince pie and veal in mayonaise",
    options: [
      "Turkey and mashed potatoes",
      "Roast pig, mince pie and veal in mayonaise",
      "Lots of meat… and Malva Pudding",
    ],
  }),
  new Quiz({
    question: "How do you say merry Christmas in Spanish?",
    correct: "Feliz navidad",
    options: [" Joyeux Noel", "Feliz navidad", "Heri ya Krismasi"],
  }),
  new Quiz({
    question: "Which of these songs was written by an Australian",
    correct: "Aussie Jingle Bells",
    options: [
      "All I want for Christmas is You",
      "Jingle Bell Rock",
      "Aussie Jingle Bells",
    ],
  }),
  new Quiz({
    question: "What do people eat for Christmas in Japan?",
    correct: "Kentucky Fried Chicken",
    options: [
      "Kentucky Fried Chicken",
      "Turkey and mashed potatoes",
      "stuffed chicken,  something called nacatamal, rice, and freshly baked bread",
    ],
  }),
  new Quiz({
    question: "In which country is Nacatamal a popular Christmas dish?",
    correct: "Nicaragua",
    options: ["Nicaragua", "Argentina", "Kenya"],
  }),
  new Quiz({
    question:
      "How do you say merry Christmas in Kenya(their main language is Swahili!)?",
    correct: "Heri ya Krismasi",
    options: [" Joyeux Noel", "Happy Holidays", "Heri ya Krismasi"],
  }),
];

seedData(Quiz, questions);
