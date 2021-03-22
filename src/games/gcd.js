import getRundomNumber from '../getRundomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivisor = (n1, n2) => {
  if (!n2) return n1;
  return getGreatestCommonDivisor(n2, n1 % n2);
};
const getGameData = (roundsCount) => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRundomNumber();
    const num2 = getRundomNumber();
    const question = `${num1} ${num2}`;
    const answer = getGreatestCommonDivisor(num1, num2).toString();
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
