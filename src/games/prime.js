import getNum from '../getRundomNumber.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const getGameData = (roundsCount) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getNum();
    const answer = isPrime(question);
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
