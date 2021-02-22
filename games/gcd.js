import getNum from '../src/getRundomNumber.js';

const num1 = getNum();
const num2 = getNum();
const num3 = getNum();
const num4 = getNum();
const num5 = getNum();
const num6 = getNum();
const getCorrAnswer = (n1, n2) => {
  if (n2 > n1) return getCorrAnswer(n2, n1);
  if (!n2) return n1;
  return getCorrAnswer(n2, n1 % n2);
};
const getGameData = () => ({
  description: 'Find the greatest common divisor of given numbers.',
  rounds: [
    {
      question: `${num1} ${num2}`,
      answer: getCorrAnswer(num1, num2).toString(),
    },
    {
      question: `${num3} ${num4}`,
      answer: getCorrAnswer(num3, num4).toString(),
    },
    {
      question: `${num5} ${num6}`,
      answer: getCorrAnswer(num5, num6).toString(),
    },
  ],
});
export default getGameData;
