import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/world-whizz`,
});

const getCountries = () => {
  return api.get(`/countries`).then(({ data }) => {
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
  return api.post(`/signup`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const signIn = (userInfo) => {
  return api.post(`/signin`).then(({ data }) => {
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
