import getNum from '../getRundomNumber.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};
const getAnswer = (question) => {
  if (isPrime(question)) {
    return 'yes';
  } return 'no';
}
const getGameData = (roundsCount) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getNum();
    const answer = getAnswer(question);
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
