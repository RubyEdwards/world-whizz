import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/countries", async (req, res) => {
  let collection = await db.collection("countries");
  let results = await collection.find({}).toArray();
  res.status(200).send(results);
});

router.get("/countries/:countrycode", async (req, res) => {
  let collection = await db.collection("countries");
  let query = { countrycode: req.params.countrycode };
  let country = await collection.findOne(query, {
    projection: { _id: 0, countryinfo: 1 },
  });
  if (!country) res.status(404).send("Not found");
  else res.status(200).send(country);
});

router.get("/countries/:countrycode/quiz", async (req, res) => {
  const { question } = req.query;
  let collection = await db.collection("countries");
  let param = { countrycode: req.params.countrycode };
  let country = await collection.findOne(param, {
    projection: { _id: 0, quiz: 1 },
  });
  if (!country) res.status(404).send("Not found");
  if (question) res.status(200).send(country.quiz[question - 1]);
  else res.status(200).send(country);
});

router.get("/journal", async (req, res) => {
  const { countrycode } = req.query;
  let collection = await db.collection("countries");
  let results = await collection
    .find(
      {},
      {
        projection: { _id: 0, countrycode: 1, countryname: 1, quizfacts: 1 },
      }
    )
    .toArray();
  let countryList = results.map(({ countryname }) => countryname).sort();
  if (countrycode) {
    let facts = results
      .filter((country) => country.countrycode === countrycode)
      .map(({ quizfacts }) => quizfacts);
    res.status(200).send(facts);
  } else res.status(200).send(countryList);
});

export default router;
