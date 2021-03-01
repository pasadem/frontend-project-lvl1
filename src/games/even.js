import getNum from '../getRundomNumber';

const isEven = (number) => number % 2 === 0;
const getAnswer = (question) => {
  if (isEven(question)) {
    return 'yes';
  }
  return 'no';
};

const getGameData = (roundsCount) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getNum();
    const answer = getAnswer(question);
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
