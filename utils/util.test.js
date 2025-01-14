const { funFactRandomiser, answerRandomiser, checkAnswer } = require ('./util.js');
const data = require ('../dbs-prep/iceland.json');
const question = require ('../dbs-prep/test.question.json')
const andorraq = require ('../dbs-prep/test.andorraq.json')
const andorra = require ('../dbs-prep/andorra.json')

describe('utils', () => {
  describe('funFactRandomizer()', () => {
    it.skip('should display all facts in that countries document', () => {
      expect(Array.isArray(funFactRandomiser(data))).toBe(true);
    });
    it('should display a random fact from the database', () => {
      expect(funFactRandomiser(andorra)).toBe("Munki")
    });
    it.todo('should have repeated functionality on other countries');
  });
  describe('answerRandomizer()', () => {
    it('should display all answers in that question array', () => {
      expect(Array.isArray(answerRandomiser(question))).toBe(true);
    });
    it.todo('should randomize the order of the answers presented');
    it.todo('should have repeated functionality on other countries');
  });
  describe('general test', () => {
    it.todo('should not mutate any of the data on runtime');
  });
  describe('checkAnswer()', () => {
    it('should check if user answer matches correct answer', () => {
      const input = 'Blue Lagoon'
      const input2 = "Parliamentary Co-Principality"
      expect(checkAnswer(question, input)).toBe("rightio")
      expect(checkAnswer(andorraq, input2)).toBe("rightio")
    })
    it('should check if user answer matches correct answer case insensitive', () => {
      const input = 'blue lagoon'
      const input2 = 'BlUe LaGoOn'
      expect(checkAnswer(question, input)).toBe("rightio")
      expect(checkAnswer(question, input2)).toBe("rightio")
    })

  })
});
