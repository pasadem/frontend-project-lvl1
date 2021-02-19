
import readlineSync from "readline-sync";

const getNum = (num = 20) => Math.floor(Math.random() * num);
const ops = ['+', '-', '*'];
const num1 = getNum();
const num2 = getNum();
const num3 = getNum();
const num4 = getNum();
const num5 = getNum();
const num6 = getNum();

const operator1 = ops[getNum(ops.length)];
const operator2 = ops[getNum(ops.length)];
const operator3 = ops[getNum(ops.length)];

const getCorrAnswer = (num1, num2, operator) => {
  switch (operator)
  {
    case '+': 
      return num1 + num2;
    case '-': 
      return num1 - num2;
    case '*':
      return num1 * num2;
    } 
 };
  const getGameData = () => {  
  return {
    description: `What is the result of the expression?`,
    rounds: [
      {
        question: `${num1}${operator1}${num2}`, 
        answer: getCorrAnswer(num1, num2, operator1).toString(),
      },
      { 
        question: `${num3}${operator2}${num4}`, 
        answer: getCorrAnswer(num3, num4, operator2).toString(),
      },
      {
        question: `${num5}${operator3}${num6}`, 
        answer: getCorrAnswer(num5, num6, operator3).toString(),
      }
    ]
   }
  };
  export default getGameData;
