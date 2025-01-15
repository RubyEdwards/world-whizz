export function funFactRandomiser(data) {
  const funfactArray = data.countryinfo.funfact;
  let index = Math.floor(Math.random() * funfactArray.length);
  const result = funfactArray[index];
  return result;
}

export function answerRandomiser(data) {
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
}

export function checkAnswer(data, userInput) {
  const correctAnswer = data.correctAnswer;
  let isCorrect = false;
  if (userInput.toLowerCase() !== correctAnswer.toLowerCase()) {
    return "Incorrect";
  } else {
    isCorrect = true;
    return "Correct";
  }
}
