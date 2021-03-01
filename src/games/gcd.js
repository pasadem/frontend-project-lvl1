import getNum from '../getRundomNumber';

const getCorrAnswer = (n1, n2) => {
  if (n2 > n1) return getCorrAnswer(n2, n1);
  if (!n2) return n1;
  return getCorrAnswer(n2, n1 % n2);
};
const getGameData = (roundsCount) => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getNum();
    const num2 = getNum();
    const question = `${num1} ${num2}`;
    const answer = getCorrAnswer(num1, num2).toString();
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
