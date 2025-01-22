import axios from "axios";

const api = axios.create({
  baseURL: `https://world-whizz.onrender.com/world-whizz`,
});

const getCountries = () => {
  return api.get(`/countries`).then(({ data }) => {
    const sortedData = data.sort((a, b) =>
      a.countryinfo.countryname.localeCompare(b.countryinfo.countryname)
    );
    return sortedData;
  });
};

const getCountry = (countrycode) => {
  return api.get(`/countries/${countrycode}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

const getQuiz = (countrycode, questionNumber) => {
  return api
    .get(`/countries/${countrycode}/quiz?question=${questionNumber}`)
    .then(({ data }) => {
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

const changeUserCountryStatus = (info) => {
  return api.post(`/user/country`, info).then((result) => {
    console.log(result);
  });
};

const changeUserQuestionStatus = (info) => {
  return api
    .post(`/user/questions?question=${info.question}`, info)
    .then((result) => {
      console.log(result);
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
  changeUserCountryStatus,
  changeUserQuestionStatus,
};
