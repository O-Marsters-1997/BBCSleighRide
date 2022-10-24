import mongoose from "mongoose";
import { NextFunction, Request, Response } from "express";
import { config } from "../config/config";
import logger from "../logger";
import Country from "../models/Country";
import { seedData } from "../utils";
import CountryModel from "../models/Country";
// import QuizModel from "../models/Quiz"
// import JokeModel from "../models/Joke"

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    logger.info("Seeding data to mongoDB database");
  })
  .catch((error) => {
    logger.info(error);
  });

const countries = [
  new CountryModel({
    name: "France",
    continent: "Europe",
    song: "TBD",
    greeting: "'Joyeux Noël' (French)",
    celebrated: "24th December",
    meal: "Roast turkey with chestnuts or roast goose, oysters, foie gras, lobster, venison and cheeses. Followed by a chocolate cake log called a bûche de Noël",
    decorations:
      "Christmas trees, lights, and advent wreaths (called ‘Couronnes de l'Avent’)",
    didyouknow:
      "In some parts of France, they celebrate by eating 13 different desserts!... all made from different types of fruits, nuts and pastries.",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "South Africa",
    continent: "Africa",
    song: "TBD",
    greeting: "'Geseënde Kersfees' (Afrikaans)",
    celebrated: "25th December",
    meal: "Lots of meat… and a traditional South African dessert called Malva Pudding",
    decorations: "A Christmas tree (not a real one!)",
    didyouknow: "Santa Claus is also known as Sinterklaas (St Nicholas)",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Kenya",
    continent: "Africa",
    song: "TBD",
    greeting: "'Heri ya Krismasi' (Swahili)",
    celebrated:
      "25th December (although many people celebrate all through the night on Christmas Eve!)",
    meal: "One of the most popular Christmas foods in Kenya is the ‘nyama choma’, which is similar to a BBQ",
    decorations:
      "Colourful ribbons, flowers and balloons… and a beautifully decorate Cypress tree",
    didyouknow: "There are at least 68 languages spoken in Kenya. Wow.",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "United States of America",
    continent: "North America",
    song: "TBD",
    greeting: "'Happy Holidays' (English)",
    celebrated: "25th December",
    meal: "Turkey and mashed potatoes",
    decorations:
      "Christmas lights, and sometimes even model Santa Claus, snowmen and reindeer",
    didyouknow: "Santa was not always red, he wore green before Coca Cola",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Australia",
    continent: "Australasia",
    song: "TBD",
    greeting: "'Merry Christmas' (English)",
    celebrated: "25th December",
    meal: "BBQ, cold meats, and Christmas pudding",
    decorations:
      "Christmas Trees and Christmas lights. Neighbors sometimes have little competitions for the best light display.",
    didyouknow:
      "It’s summer in Australia at Christmas, so many Australians spend Christmas on the beach!",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Nicaragua",
    continent: "South America",
    song: "TBD",
    greeting: "'Feliz Navidad' (Spanish)",
    celebrated: "24th December",
    meal: "stuffed chicken,  something called nacatamal, rice, and freshly baked bread",
    decorations:
      "Nicaraguan christians hold parades, tributes, and jubilant celebrations in the streets to give thanks to Jesus and the Christmas story",
    didyouknow:
      "Christains sing at people’s homes asking to stay. People sing songs denying them entry. Finally, someone lets them stay, as happened in the nativity story.",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Argentina",
    continent: "South America",
    song: "TBD",
    greeting: "'Feliz Navidad' (Spanish)",
    celebrated: "24th December",
    meal: "Roast pig, and veal in mayonaise, followed by mince pies.",
    decorations:
      "Wreaths of green, gold, red and white flowers. Red and white garlands are hung on the doors of houses",
    didyouknow:
      "Some children in Argentina have to wait until the 6th of january for the three wise men to bring them presents.",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Japan",
    continent: "Asia",
    song: "TBD",
    greeting: "'Merikurisumasu' (Japanese)",
    celebrated: "25th December",
    meal: "Kentucky Fried Chicken",
    decorations:
      "The streets of Japan are often decorated with candy canes, lights and trees.",
    didyouknow:
      "Christmas in Japan is a fun and romantic holiday, and people often go to Tokyo Disneyland around this time.",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Kazhakhstan",
    continent: "Asia",
    song: "Chocolates, fruits, nuts, baursak (similar to western doughnuts), salads and a traditional dish called plov which consists of rice, beef and carrots that are seasoned in cumin",
    greeting: "Rojdestvo quttı bolsın",
    celebrated: "January 7th",
    meal: "",
    decorations:
      "A New Year tree, baubles and twinkly lights in the streets and shop windows",
    didyouknow:
      "For Orthodox christians Advent lasts for 40 days, and some people won't eat any meat during this time",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Brazil",
    continent: "South America",
    song: "'Noite Feliz' (Silent Night)",
    greeting: "Feliz Natal",
    celebrated: "24th & 25th December",
    meal: "Pork, turkey, ham, salads and fresh and dried fruits served with rice cooked with raisins and a good spoon of 'farofa' (seasoned manioc flour.)",
    decorations:
      "Nativity Scenes, known as Presépio are very popular. They are set-up in churches and homes all through December",
    didyouknow:
      "Christmas plays called 'Os Pastores' (The Shepherds) are popular.  In the Brazilian versions of the play, there's also traditionally a shepherdess and also a woman who tries to steal the baby Jesus!",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "Armenia",
    continent: "Europe",
    song: "TBD",
    greeting: "Shnorhavor Amanor yev Surb Tznund",
    celebrated: "6th January",
    meal: "Anooshaboor (Armenian Christmas Pudding), Khozee bood (glazed ham) and dried fruits",
    decorations:
      "A big Christmas Tree (Tonatsar) is put up in Republic Square in Yerevan",
    didyouknow: "",
    _id: new mongoose.Types.ObjectId(),
  }),
  new CountryModel({
    name: "India",
    continent: "Asia",
    song: "TBD",
    greeting: "Śubh krisamas (in Hindi)",
    celebrated: "25th December",
    meal: "Roast turkey or chicken. Sweets include neureos (small pastries which are stuffed with dry fruit and coconut and fried) and dodol (like toffee that has coconut and cashew in it) ",
    decorations:
      "A banana or mango tree is decorated (or whatever tree people can find to decorate!). Sometimes people use mango leaves to decorate their homes.",
    didyouknow:
      "Father Christmas is know as 'Christmas Baba' in Hindi, 'Baba Christmas' in Urdu, 'Christmas Thaathaa' in Tamil and 'Christmas Thatha' in Telugu, 'Natal Bua' in Marathi. In Kerala state, he's known as 'Christmas Papa'",
    _id: new mongoose.Types.ObjectId(),
  }),
];

seedData(Country, countries);
