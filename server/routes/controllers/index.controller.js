import { answerRandomiser, funFactRandomiser } from "../../../utils/util.js";
import {
  amendUserCountryStatus,
  amendUserQuestionStatus,
  fetchCountries,
  fetchCountry,
  fetchCountryQuizFacts,
  fetchJournal,
  fetchQuiz,
  fetchUser,
} from "../models/index.model.js";

export function getCountries(req, res) {
  fetchCountries().then((countries) => {
    res.status(200).send(countries);
  });
}

export function getCountry(req, res) {
  fetchCountry(req).then((country) => {
    if (!country) res.status(404).send("Not found");
    else {
      let randomFact = funFactRandomiser(country);
      let updatedCountry = JSON.parse(JSON.stringify(country));
      updatedCountry.countryinfo.funfact = randomFact;
      res.status(200).send(updatedCountry);
    }
  });
}

export function getQuiz(req, res) {
  const { question } = req.query;
  fetchQuiz(req).then((countryquiz) => {
    if (!countryquiz) res.status(404).send("Not found");
    if (question) {
      const questionIndex = question - 1;
      const answersRandomOrder = answerRandomiser(
        countryquiz._doc.quiz[questionIndex]
      );
      let updatedQuestion = JSON.parse(JSON.stringify(countryquiz));
      updatedQuestion.quiz.answers = answersRandomOrder;
      // delete updatedQuestion.quiz[questionIndex].correctAnswer;
      res.status(200).send(updatedQuestion.quiz[questionIndex]);
    } else res.status(200).send(countryquiz);
  });
}

export function getJournal(req, res) {
  fetchJournal().then(({ countryNames }) => {
    let sortedArray = countryNames
      .map(({ _doc }) => {
        return _doc.countryname;
      })
      .sort();
    res.status(200).send(sortedArray);
  });
}

export function getCountryQuizFacts(req, res) {
  fetchCountryQuizFacts(req).then((quizfacts) => {
    res.status(200).send(quizfacts);
  });
}

export function updateUserCountryStatus(req, res) {
  const { countryname, username } = req.body;
  amendUserCountryStatus(countryname, username).then(() => {
    res.status(200).send({
      msg: `${username}'s ${countryname} isComplete has been updated!`,
    });
  });
}

export function updateUserQuestionStatus(req, res) {
  const { countryname, username } = req.body;
  const { question } = req.query;
  amendUserQuestionStatus(countryname, username, question).then(() => {
    res.status(200).send({
      msg: `${username}'s ${countryname} has been updated to reflect which questions are correct!`,
    });
  });
}

export function getUser(req, res) {
  const { username, countryname } = req.params;
  fetchUser(username).then(({ travelJournal }) => {
    let specificCountry;
    for (let i = 0; i < travelJournal.length; i++) {
      if (travelJournal[i].countryname === countryname) {
        specificCountry = travelJournal[i].isComplete;
        res.status(200).send(specificCountry);
        // return specificCountry;
      }
    }
  });
}
