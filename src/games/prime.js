import getRundomNumber from '../getRundomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getAnswer = (question) => {
  if (isPrime(question)) {
    return 'yes';
  }
  return 'no';
};
const getGameData = (roundsCount) => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRundomNumber();
    const answer = getAnswer(question);
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
