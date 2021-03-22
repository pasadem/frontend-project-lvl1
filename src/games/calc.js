import getRundomNumber from '../getRundomNumber.js';

const description = 'What is the result of the expression?';
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
      throw new Error("Operator doesn't exist");
  }
};
const getGameData = (roundsCount) => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const operator = operators[getRundomNumber(0, 2)];
    const num1 = getRundomNumber();
    const num2 = getRundomNumber();

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
