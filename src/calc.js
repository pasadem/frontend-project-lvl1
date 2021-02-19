
import readlineSync from "readline-sync";

const getNum1 = (rnum1 = 20) => Math.floor(Math.random() * rnum1);
const getNum2 = (rnum2 = 20) => Math.floor(Math.random() * rnum2);
const ops = ['+', '-', '*'];
const opsIndex = Math.floor(Math.random() * 3);
const num1 = getNum1();
const num2 = getNum2();
const num3 = getNum1();
const num4 = getNum2();
const num5 = getNum1();
const num6 = getNum2();

const operator1 = ops[opsIndex];
const operator2 = ops[opsIndex];
const operator3 = ops[opsIndex];

const getCorrAnswer = () => {
  switch (operator1)
  {
    case '+': 
      return num1 + num2;
    case '-': 
      return num1 - num2;
    case '*':
      return num1 * num2;
    } 
 };
 
  const corrAnswer = getCorrAnswer();
  const stringCorrAnswer = corrAnswer.toString();
 export const getGameData = () => {  
  return {
    description: `What is the result of the expression?`,
    rounds: [
      {
        question: `${num1}${operator1}${num2}`, 
        answer: stringCorrAnswer,
      },
      { 
        question: `${num3}${operator2}${num4}`, 
        answer: stringCorrAnswer,
      },
      {
        question: `${num5}${operator3}${num6}`, 
        answer: stringCorrAnswer,
      }
    ]
   }
  };
