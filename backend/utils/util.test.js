const { funFactRandomiser, answerRandomiser } = require('./util');

describe('utils', () => {
  describe('funFactRandomizer()', () => {
    it('should display all facts in that countries document', () => {
      expect(funFactRandomiser()).toBe();
    });
    it.todo('should display a random fact from the database');
    it.todo('should have repeated functionality on other countries');
  });
  describe('answerRandomizer()', () => {
    it.todo('should display all answers in that question array');
    it.todo('should randomize the order of the answers presented');
    it.todo('should have repeated functionality on other countries');
  });
  describe('general test', () => {
    it.todo('should not mutate any of the data on runtime');
  });
});
