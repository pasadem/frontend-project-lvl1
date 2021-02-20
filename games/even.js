import getNum from '../src/getRundomNumber.js'


const number1 = getNum();
const number2 = getNum();
const number3 = getNum();

const isEven = (num) => num % 2 === 0;
const getGameData = () => {  
   return {
     description: `Answer "yes" if the number is even, otherwise answer "no".`,
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
 