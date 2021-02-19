import readlineSync from "readline-sync";

const getNumber = (num = 20) => Math.floor(Math.random() * num);
const number1 = getNumber();
const number2 = getNumber();
const number3 = getNumber();

const isEven = (num) => num % 2 === 0;
const getGameData = () => {  
   return {
     description: `What is the result of the expression?`,
     rounds: [
       {
         question: number1, 
         answer: isEven(number1) ? 'yes' : 'no',
       }, 
       {
        question: number2, 
        answer: isEven(number2) ? 'yes' : 'no',
       },
       {
        question: number3, 
        answer: isEven(number3) ? 'yes' : 'no',
       }
     ]
   }
};
export default getGameData;
 