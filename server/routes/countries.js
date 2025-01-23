import express from 'express';
import {
  getCountries,
  getCountry,
  getCountryQuizFacts,
  getJournal,
  getQuiz,
  getUser,
  updateUserCountryStatus,
} from './controllers/index.controller.js';
import {
  isRequestValidated,
  validateSignInRequest,
  validateSignUpRequest,
} from '../validator/auth.validator.js';
import { signIn, signUp } from '../routes/controllers/auth.controller.js';

const router = express.Router();

router.get('/countries', getCountries);
// world-whizz/countries - GETs all countries.
router.get('/countries/:countrycode', getCountry);
// world-whizz/countries/IC - GETs country at specified code (Iceland).
router.get('/countries/:countrycode/quiz', getQuiz);
// world-whizz/countries/IC/quiz - GETs the quiz for the country at specified code (Iceland).
router.get('/journal', getJournal);
// world-whizz/journal - currently GETs all country names.
router.get('/journal/:countryname', getCountryQuizFacts);
// world-whizz/journal/Iceland - GETs all quiz facts for specified country (Iceland).
router.post('/signup', validateSignUpRequest, isRequestValidated, signUp);
// world-whizz/signup - POSTs new user to the Users database after being given a body.
router.post('/signin', validateSignInRequest, isRequestValidated, signIn);
// world-whizz/signin - POSTs a request to sign into a user if their info is in the database already.
router.post('/user/country', updateUserCountryStatus);
// world-whizz/user/country - POSTs to the Users database to update specified country isComplete to true.
router.get('/user/:username/:countryname', getUser);
// world-whizz/user - GETs the isComplete status for the specified user and country.
export default router;
