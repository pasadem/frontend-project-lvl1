import getNum from '../getRundomNumber';

const ceil = (num = 20) => Math.ceil(Math.random() * num);
const arrow = (length) => {
  const startNumber = ceil(10);
  const step = ceil(10);
  const arr = [];
  const corrLength = (length < 5) ? 5 : length;
  for (let i = startNumber; i < startNumber + corrLength * step; i += step) {
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
  const array = arrow(getNum());
  const indexHideNum = getNum(array.length);

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
    rounds.push(round);
  }
  return {
    description,
    rounds,
  };
};

export default getGameData;
