import getNum from '../getRundomNumber.js';

const ceil = (num = 20) => Math.ceil(Math.random() * num);
const getProgression = (length) => {
  const startNumber = ceil(10);
  const step = ceil(10);
  const progression = [];
  const minLength = 5;
  const corrLength = (length < minLength) ? minLength : length;
  for (let i = startNumber; i < startNumber + corrLength * step; i += step) {
    progression.push(i);
  }
  return progression;
};
const hideElement = (arr, index) => {
  const copyarr = [...arr];
  copyarr[index] = '..';
  return copyarr;
};
const getRoundData = () => {
  const progression = getProgression(getNum());
  const indexHideNum = getNum(progression.length);

  const question = hideElement(progression, indexHideNum).join(' ');
  const answer = progression[indexHideNum].toString();
  return {
    question,
    answer,
  };
};
const getGameData = (roundsCount) => {
  const description = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const round = getRoundData();
    rounds.push(round);
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
