import getRundomNumber from '../getRundomNumber.js';

const description = 'What number is missing in the progression?';
const getProgression = (length) => {
  const startNumber = getRundomNumber(1, 10);
  const step = getRundomNumber(1, 10);
  const progression = [];
  const minLength = 5;
  const corrLength = Math.max(length, minLength);
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
  const progression = getProgression(getRundomNumber());
  const indexHideNum = getRundomNumber(1, 10);

  const question = hideElement(progression, indexHideNum).join(' ');
  const answer = progression[indexHideNum].toString();
  return {
    question,
    answer,
  };
};
const getGameData = (roundsCount) => {
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
