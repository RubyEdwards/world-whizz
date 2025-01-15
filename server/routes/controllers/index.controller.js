import {
  fetchCountries,
  fetchCountry,
  fetchCountryQuizFacts,
  fetchJournal,
  fetchQuiz,
} from "../models/index.model.js";

export function getCountries(req, res) {
  fetchCountries().then((countries) => {
    res.status(200).send(countries);
  });
}

export function getCountry(req, res) {
  fetchCountry(req).then((country) => {
    if (!country) res.status(404).send("Not found");
    else res.status(200).send(country);
  });
}

export function getQuiz(req, res) {
  const { question } = req.query;
  fetchQuiz(req).then((countryquiz) => {
    if (!countryquiz) res.status(404).send("Not found");
    if (question) res.status(200).send(countryquiz.quiz[question - 1]);
    else res.status(200).send(countryquiz);
  });
}

export function getJournal(req, res) {
  fetchJournal().then((countryNames) => {
    let countryList = countryNames.map(({ countryName }) => countryName).sort();
    res.status(200).send(countryList);
  });
}

export function getCountryQuizFacts(req, res) {
  fetchCountryQuizFacts(req).then((quizfacts) => {
    res.status(200).send(quizfacts);
  });
}
