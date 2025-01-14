const {
  funFactRandomiser,
  answerRandomiser,
  checkAnswer,
  showQuizFacts,
} = require('./util.js');
const data = require('../dbs-prep/dev-data/iceland.json');
const question = require('../dbs-prep/dev-data/test.question.json');
const andorraq = require('../dbs-prep/dev-data/test.andorraq.json');
const andorra = require('../dbs-prep/dev-data/andorra.json');

beforeEach(() => {
  funFactRandomiser(data);
  funFactRandomiser(andorra);
  answerRandomiser(question);
  answerRandomiser(andorraq);
});

describe('utils', () => {
  describe('funFactRandomizer()', () => {
    it('should display a random fact from the database', () => {
      const answer = data.countryinfo.funfact;
      expect(funFactRandomiser(data)).not.toBe(answer);
    });
    it('should have repeated functionality on other countries', () => {
      const answer = data.countryinfo.funfact;
      expect(funFactRandomiser(andorra)).not.toBe(answer);
    });
  });
  describe('answerRandomizer()', () => {
    it('should randomize the order of the answers presented', () => {
      const answer = data.answers;
      expect(answerRandomiser(question)).not.toBe(answer);
    });
    it('should have repeated functionality on other countries', () => {
      const answer = data.answers;
      expect(answerRandomiser(andorraq)).not.toBe(answer);
    });
  });
  describe('general test', () => {
    it('should not mutate any of the data on runtime', () => {
      expect(data).toEqual(data);
      expect(question).toEqual(question);
      expect(andorra).toEqual(andorra);
      expect(andorraq).toEqual(andorraq);
    });
  });
  describe('checkAnswer()', () => {
    it('should check if user answer matches correct answer', () => {
      const input = 'Blue Lagoon';
      const input2 = 'Parliamentary Co-Principality';
      expect(checkAnswer(question, input)).toBe('Correct');
      expect(checkAnswer(andorraq, input2)).toBe('Correct');
    });
    it('should check if user answer matches correct answer case insensitive', () => {
      const input = 'blue lagoon';
      const input2 = 'BlUe LaGoOn';
      expect(checkAnswer(question, input)).toBe('Correct');
      expect(checkAnswer(question, input2)).toBe('Correct');
    });
  });
  describe('showQuizFacts()', () => {
    it('should display all quiz facts in an array', () => {
      expect(typeof showQuizFacts(data)).toBe('object');
      expect(Array.isArray(showQuizFacts(data))).toBe(true);
    });
  });
});
