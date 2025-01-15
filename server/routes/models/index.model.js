import db from "../../db/connection.js";

export async function fetchCountries() {
  let collection = await db.collection("countries");
  let results = await collection.find({}).toArray();
  return results;
}

export async function fetchCountry(req) {
  let collection = await db.collection("countries");
  let query = { countrycode: req.params.countrycode };
  let country = await collection.findOne(query, {
    projection: { _id: 0, countryinfo: 1 },
  });
  return country;
}

export async function fetchQuiz(req) {
  let collection = await db.collection("countries");
  let param = { countrycode: req.params.countrycode };
  let countryquiz = await collection.findOne(param, {
    projection: { _id: 0, quiz: 1 },
  });
  return countryquiz;
}

export async function fetchJournal() {
  let collection = await db.collection("countries");
  let countryNames = await collection
    .find(
      {},
      {
        projection: { _id: 0, countryname: 1 },
      }
    )
    .toArray();
  return countryNames;
}

export async function fetchCountryQuizFacts(req) {
  let collection = await db.collection("countries");
  let { countryname } = req.params;
  let query = { countryname: countryname };
  let countryQuizFacts = await collection.findOne(query, {
    projection: { _id: 0, quizfacts: 1 },
  });
  return countryQuizFacts;
}
