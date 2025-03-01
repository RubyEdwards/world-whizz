import mongoose from 'mongoose';
import connectDB from '../../db/connection.js';
import User from '../../validator/user-schema.js';

const countrySchema = new mongoose.Schema({}, { collection: 'countries' });
const Country = mongoose.model('Country', countrySchema);

export async function fetchCountries() {
  try {
    await connectDB(process.env.ATLAS_URI);
    let results = await Country.find({}, { _id: 0 });
    return results;
  } catch (err) {
    console.error('Error fetching countries: ', err);
    throw err;
  }
}

export async function fetchCountry(req) {
  try {
    await connectDB(process.env.ATLAS_URI);
    let query = { countrycode: req.params.countrycode };
    let country = await Country.findOne(query, { countryinfo: 1, _id: 0 });
    return country;
  } catch (err) {
    console.error('Error fetching country: ', err);
    throw err;
  }
}

export async function fetchQuiz(req) {
  try {
    await connectDB(process.env.ATLAS_URI);
    let param = { countrycode: req.params.countrycode };
    let countryquiz = await Country.findOne(param, { quiz: 1, _id: 0 });
    return countryquiz;
  } catch (err) {
    console.error('Error displaying country quiz: ', err);
    throw err;
  }
}

export async function fetchJournal() {
  try {
    await connectDB(process.env.ATLAS_URI);
    let countryNames = await Country.find({}, { countryname: 1, _id: 0 });
    return { countryNames };
  } catch (err) {
    console.error('Error fetching Journal: ', err);
    throw err;
  }
}

export async function fetchCountryQuizFacts(req) {
  try {
    await connectDB(process.env.ATLAS_URI);
    let { countryname } = req.params;
    let upperVersion = countryname
      .split('')
      .map((char, index) => (index === 0 ? char.toUpperCase() : char))
      .join('');
    let query = { countryname: upperVersion };
    let countryQuizFacts = await Country.findOne(query, {
      quizfacts: 1,
      _id: 0,
    });
    return countryQuizFacts;
  } catch (err) {
    console.error('Error loading quiz facts: ', err);
    throw err;
  }
}

export async function amendUserCountryStatus(countryname, username) {
  try {
    await connectDB(process.env.ATLAS_URI);
    let updatedUser = await User.updateOne(
      { username: username },
      { $set: { 'travelJournal.$[x].isComplete': true } },
      {
        arrayFilters: [
          { 'x.countryname': countryname.replace(/ /g, '').toLowerCase() },
        ],
      }
    );
    return updatedUser;
  } catch (err) {
    console.error('Error fetching User: ', err);
  }
}

export async function fetchUser(username) {
  try {
    await connectDB(process.env.ATLAS_URI);
    let query = { username: username };
    let user = await User.findOne(query);
    return user;
  } catch (err) {
    console.error('Error fetching User: ', err);
  }
}
