import express from 'express';
import {
  getCountries,
  getCountry,
  getCountryQuizFacts,
  getJournal,
  getQuiz,
} from './controllers/index.controller.js';
import {
  isRequestValidated,
  validateSignInRequest,
  validateSignUpRequest,
} from '../mongoose-modal/auth.js';

const router = express.Router();

router.get('/countries', getCountries);
router.get('/countries/:countrycode', getCountry);
router.get('/countries/:countrycode/quiz', getQuiz);

router.get('/journal', getJournal);
router.get('/journal/:countryname', getCountryQuizFacts);

router.route('/signin').post(validateSignInRequest, isRequestValidated, signIn);
router.route('/signup').post(validateSignUpRequest, isRequestValidated, signUp);

export default router;
