import express from "express";
import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("countries");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:countrycode", async (req, res) => {
  let collection = await db.collection("countries");
  let query = { countrycode: req.params.countrycode };
  let country = await collection.findOne(query, {
    projection: { _id: 0, countryinfo: 1 },
  });
  if (!country) res.status(404).send("Not found");
  else res.status(200).send(country);
});

router.get("/:countrycode/quiz", async (req, res) => {
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

export default router;
