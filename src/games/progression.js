import getNum from '../getRundomNumber.js';

const lenghtOfProgression = getNum(10);
const n = lenghtOfProgression;
const ceil = (num = 20) => Math.ceil(Math.random() * num);
const arrow = (n) => {
  const startNumber = ceil(n);
  const step = ceil(n);
  const arr = [];
  for (let i = startNumber; i < startNumber + n * step; i += step) {
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
  const array = arrow(n);
  const indexHideNum = getNum(n);
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
    const { question, answer } = round;
    rounds.push(round);
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
