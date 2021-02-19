import getNum from './getRundomNumber.js'

const n = getNum();
const n1 = getNum();
const n2 = getNum();

const startNumber = getNum();
const arr = [];
const indexHideNum = getNum();
for (let i = startNumber; i < (startNumber + 10 * n); i += n) {
   arr.push(i);
};
const startNumber1 = getNum();
const arr1 = [];
const indexHideNum1 = getNum();
for (let i = startNumber1; i < (startNumber1 + 10 * n1); i += n1) {
   arr1.push(i);
};
const startNumber2 = getNum();
const arr2 = [];
const indexHideNum2 = getNum();
for (let i = startNumber2; i < (startNumber2 + 10 * n2); i += n2) {
   arr2.push(i);
};
const hideElement = (arr, index) => {
    const copyarr = [...arr];
    copyarr[index] = '..';
    return copyarr; 
};
const correctAnswer = arr[indexHideNum];
const correctAnswer1 = arr1[indexHideNum1];
const correctAnswer2 = arr2[indexHideNum2];

const getGameData = () => {  
    return {
      description: 'What number is missing in the progression?',
      rounds: [
        {
          question: `${hideElement(arr, indexHideNum).join(' ')}`, 
          answer: correctAnswer.toString(),
        },
        { 
          question: `${hideElement(arr1, indexHideNum1).join(' ')}`, 
          answer: correctAnswer1.toString(),
        },
        {
          question: `${hideElement(arr2, indexHideNum2).join(' ')}`, 
          answer: correctAnswer2.toString(),
        }
      ]
     }
    };
    export default getGameData;