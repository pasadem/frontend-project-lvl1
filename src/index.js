import readlineSync from 'readline-sync';

const roundCounts = 3;
export const runGame = (getGameData) => {
  const data = getGameData(roundCounts);
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
