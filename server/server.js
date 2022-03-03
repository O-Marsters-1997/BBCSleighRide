const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config

app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect(
  "mongodb+srv://OMarsters-1997:Themarster97@cluster0.xmyq2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)
  .then((client) => {
    const db = client.db("sleigh_ride");
    const countriesCollection = db.collection("countries");
    const countriesRouter = createRouter(countriesCollection);
    const jokesCollection = db.collection("jokes");
    const jokesRouter = createRouter(jokesCollection);
    const quizCollection = db.collection("quiz");
    const quizRouter = createRouter(quizCollection);
    app.use("/api/countries", countriesRouter);
    app.use("/api/jokes", jokesRouter);
    app.use("/api/quiz", quizRouter);
  })

  .catch(console.err);


app.listen(process.env.PORT || 5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });

