import express from "express";
import {
  getCountries,
  getCountry,
  getCountryQuizFacts,
  getJournal,
  getQuiz,
} from "./controllers/index.controller.js";

const router = express.Router();

router.get("/countries", getCountries);
router.get("/countries/:countrycode", getCountry);
router.get("/countries/:countrycode/quiz", getQuiz);

router.get("/journal", getJournal);
router.get("/journal/:countryname", getCountryQuizFacts);

export default router;
