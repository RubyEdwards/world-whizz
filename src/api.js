import axios from 'axios';

const api = axios.create({
  baseURL: `https://world-whizz.onrender.com/world-whizz`,
});

const baseURL = 'https://world-whizz.onrender.com/world-whizz';

const getCountries = () => {
  return api.get(`${baseURL}/countries`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const getCountry = (countrycode) => {
  return api.get(`/countries/${countrycode}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const getQuiz = (countrycode) => {
  return api.get(`/countries/${countrycode}/quiz`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const getJournal = () => {
  return api.get(`/journal`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const getCountryQuizFacts = (countryname) => {
  return api.get(`/journal/${countryname}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const signUp = (userInfo) => {
  return api.post(`/signup`, userInfo).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const signIn = (userInfo) => {
  return api.post(`/signin`, userInfo).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export {
  getCountries,
  getCountry,
  getQuiz,
  getJournal,
  getCountryQuizFacts,
  signUp,
  signIn,
};
