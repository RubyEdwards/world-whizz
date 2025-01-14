exports.funFactRandomiser = (data) => {
  const funfactArray = data.countryinfo.funfact;
  let index = Math.floor(Math.random() * funfactArray.length);
  const result = funfactArray[index];
  return result;
};

exports.showQuizFacts = (data) => {
  const quizFactArray = data.quizfacts;
  return quizFactArray;
};

exports.answerRandomiser = (data) => {
  const answerArray = data.answers;
  let index = answerArray.length;
  while (index != 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;
    [answerArray[index], answerArray[randomIndex]] = [
      answerArray[randomIndex],
      answerArray[index],
    ];
  }
  return answerArray;
};

exports.checkAnswer = (data, userInput) => {
  let isCorrect = false;
  const correctAnswer = data.correctAnswer;
  if (userInput.toLowerCase() !== correctAnswer.toLowerCase()) {
    isCorrect = false;
    return 'Incorrect';
  } else {
    isCorrect = true;
    // const rightAnswers = []
    // rightAnswers.push(varName)
    return 'Correct';
  }
};
/*
- fetch and compile data from the Dbs
- randomise the order of the q&as
- randomise which funfact is shown on country click
*/

// show x fun fact on click
// Math.random() <-- for Q&As and fun fact
