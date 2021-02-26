import getNum from '../getRundomNumber.js';

const ops = ['+', '-', '*'];
const operator = ops[getNum(ops.length)];
const getCorrAnswer = (n1, n2, oper) => {
  switch (oper) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      break;
  } return oper;
};
const getGameData = (roundsCount) => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getNum();
    const num2 = getNum();
    const question = `${num1} ${operator} ${num2}`;
    const answer = getCorrAnswer(num1, num2, operator).toString();
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

/* description: 'What is the result of the expression?',
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
  ], */

export default getGameData;
