import getNum from '../getRundomNumber.js';

const operators = ['+', '-', '*'];
const getCorrectAnswer = (n1, n2, operator) => {
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
const getGameData = (roundsCount) => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const operator = operators[getNum(operators.length)];
    const num1 = getNum();
    const num2 = getNum();
    const question = `${num1} ${operator} ${num2}`;
    const answer = getCorrectAnswer(num1, num2, operator).toString();
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
