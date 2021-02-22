import getNum from '../src/getRundomNumber.js';

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
const getGameData = () => {
  const round1 = getData();
  const round2 = getData();
  const round3 = getData();
  return {
    description: 'What number is missing in the progression?',
    rounds: [
      {
        question: round1.question,
        answer: round1.answer,
      },
      {
        question: round2.question,
        answer: round2.answer,
      },
      {
        question: round3.question,
        answer: round3.answer,
      },
    ],
  };
};
export default getGameData;
