use('fun-facts');

db.getCollection('countries').insert([
  {
    countryname: 'string',
    countrycode: 'string',
    flag_img_url: 'string',
    countryinfo: {
      greeting: 'string',
      capital: 'string',
      currency: 'string',
      population: 'integer',
      funfact: ['string', 'string', 'string', 'string', 'string'],
    },
    quiz: [
      {
        question: 'string',
        answers: ['string'],
        correctAnswer: 'string',
      },
      {
        question: 'string',
        answers: ['string'],
        correctAnswer: 'string',
      },
      {
        question: 'string',
        answers: ['string'],
        correctAnswer: 'string',
      },
      {
        question: 'string',
        answers: ['string'],
        correctAnswer: 'string',
      },
      {
        question: 'string',
        answers: ['string'],
        correctAnswer: 'string',
      },
    ],
  },
]);
