import readlineSync from 'readline-sync';

export const runGame = (gameData) => {
  const data = gameData(3);
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(data.description);
  for (let i = 0; i < data.rounds.length; i += 1) {
    const { question, answer: correctAnswer } = data.rounds[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('correct');
  }
  console.log(`Congratulations, ${name}!`);
};
export default runGame;
