import readlineSync from "readline-sync";

export const runGame = (gameData) => {
  const data = gameData();
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(data.description);
    for (let i = 0; i < data.rounds.length; i += 1) {
     const question = data.rounds[i].question;
     console.log(`Question: ${question}`);
     const correctAnswer = data.rounds[i].answer;
     console.log(correctAnswer)
     const answer = readlineSync.question("Your answer: ");
       if (answer === correctAnswer) {
        console.log('correct'); 
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }

      console.log(`Congratulation! ${name}!`);
};