import axios from 'axios';

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
    return data;
  });
};

const getQuiz = (countrycode, questionNumber) => {
  return api
    .get(`/countries/${countrycode}/quiz?question=${questionNumber}`)
    .then(({ data }) => {
      return data;
    });
};

const getJournal = () => {
  return api.get(`/journal`).then(({ data }) => {
    return data;
  });
};

const getCountryQuizFacts = (countryname) => {
  return api.get(`/journal/${countryname}`).then(({ data }) => {
    return data;
  });
};

const signUp = (userInfo) => {
  return api.post(`/signup`, userInfo).then(({ data }) => {
    return data;
  });
};

const signIn = (userInfo) => {
  return api.post(`/signin`, userInfo).then(({ data }) => {
    return data;
  });
};

const changeUserCountryStatus = (info) => {
  return api.post(`/user/country`, info).then((result) => {
    return result;
  });
};

const changeUserQuestionStatus = (info) => {
  return api
    .post(`/user/questions?question=${info.question}`, info)
    .then((result) => {
      return result;
    });
};

const getUserProfile = (username, countryname) => {
  return api
    .get(`/user/${username}/${countryname.replace(/ /g, '').toLowerCase()}`)
    .then(({ data }) => {
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
  changeUserCountryStatus,
  changeUserQuestionStatus,
  getUserProfile,
};
