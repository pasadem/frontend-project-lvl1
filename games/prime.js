import getNum from '../src/getRundomNumber.js'


const isEven = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i == 0) {
        return false;
    }
  } return true;
};

const num1 = getNum();  
const num2 = getNum();  
const num3 = getNum();  
       
const getGameData = () => {  
  return {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    rounds: [
       {
        question: num1, 
        answer: isEven(num1) ? 'yes' : 'no',
       }, 
       {
        question: num2, 
        answer: isEven(num2) ? 'yes' : 'no',
       },
       {
        question: num3, 
        answer: isEven(num3) ? 'yes' : 'no',
       }
     ]
   }
};
export default getGameData;
 