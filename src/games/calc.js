import getNum from '../getRundomNumber';

const ops = ['+', '-', '*'];
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
    const operator = ops[getNum(ops.length)];
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

export default getGameData;
