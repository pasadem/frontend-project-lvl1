import getNum from '../src/getRundomNumber.js';

const ops = ['+', '-', '*'];
const num1 = getNum();
const num2 = getNum();
const num3 = getNum();
const num4 = getNum();
const num5 = getNum();
const num6 = getNum();

const operator1 = ops[getNum(ops.length)];
const operator2 = ops[getNum(ops.length)];
const operator3 = ops[getNum(ops.length)];

const getCorrAnswer = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      break;
  } return operator;
};
const getGameData = () => ({
  description: 'What is the result of the expression?',
  rounds: [
    {
      question: `${num1} ${operator1} ${num2}`,
      answer: getCorrAnswer(num1, num2, operator1).toString(),
    },
    {
      question: `${num3} ${operator2} ${num4}`,
      answer: getCorrAnswer(num3, num4, operator2).toString(),
    },
    {
      question: `${num5} ${operator3} ${num6}`,
      answer: getCorrAnswer(num5, num6, operator3).toString(),
    },
  ],
});
export default getGameData;
