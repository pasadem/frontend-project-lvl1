import getNum from '../getRundomNumber.js';

const arrow = () => {
  const startNumber = getNum();
  const step = getNum();
  const arr = [];
  for (let i = startNumber; i < (startNumber + 10 * step); i += step) {
    arr.push(i);
  }
  return arr;
};
const hideElement = (arr, index) => {
  const copyarr = [...arr];
  copyarr[index] = '..';
  return copyarr;
};
const getData = () => {
  const array = arrow();
  const indexHideNum = getNum(10);
  const arrayWithoutElement = hideElement(array, indexHideNum).join(' ');
  const answer = array[indexHideNum].toString();
  return {
    question: arrayWithoutElement,
    answer,
  };
};
const getGameData = (roundsCount) => {
  const description = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const round = getData();
    const { question } = round;
    const { answer } = round;
    rounds.push({ question, answer });
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
