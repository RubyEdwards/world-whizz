exports.funFactRandomiser = (data) => {
  const funfactArray = data.countryinfo.funfact
  let i = Math.floor(Math.random()*funfactArray.length)
  const result = funfactArray[i]
  console.log(result)
  return result
};

exports.answerRandomiser = (data) => {
  const answerArray = data.answers
  let i = answerArray.length
  while(i!=0){
    let randomIndex = Math.floor(Math.random()*i);
    i--
    [answerArray[i],answerArray[randomIndex]] = [answerArray[randomIndex], answerArray[i]]
  }
  console.log(answerArray)
  return answerArray
};

exports.checkAnswer = (data, userInput) => {
  const correctAnswer = data.correctAnswer
  if(userInput.toLowerCase() !== correctAnswer.toLowerCase()){
    return "WROOOONG"
  } else {
    return "rightio"
  }
}
/*
- fetch and compile data from the Dbs
- randomise the order of the q&as
- randomise which funfact is shown on country click
*/

// show x fun fact on click
// Math.random() <-- for Q&As and fun fact