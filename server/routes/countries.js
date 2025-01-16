import express from "express";
import {
  getCountries,
  getCountry,
  getCountryQuizFacts,
  getJournal,
  getQuiz,
} from "./controllers/index.controller.js";
import {
  isRequestValidated,
  validateSignInRequest,
  validateSignUpRequest,
} from "../validator/auth.validator.js";
import { signIn, signUp } from "../routes/controllers/auth.controller.js";

const router = express.Router();

router.get("/countries", getCountries);
router.get("/countries/:countrycode", getCountry);
router.get("/countries/:countrycode/quiz", getQuiz);

router.get("/journal", getJournal);
router.get("/journal/:countryname", getCountryQuizFacts);

router.post("/signup", validateSignUpRequest, isRequestValidated, signUp);
router.post("/signin", validateSignInRequest, isRequestValidated, signIn);

export default router;
