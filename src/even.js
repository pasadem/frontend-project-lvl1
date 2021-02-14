//import { result } from "lodash";
import readlineSync from "readline-sync";

//console.log(`Answer 'yes' if the number is even, otherwise answer 'no'.`); 
const getRundomNumber = (num = 20) => Math.floor(Math.random() * num);
const getCorrAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } 
      return 'no';
};
let result = 0;

const welcomeText = 'Welcome to the Brain Games!';
const description = `Answer 'yes' if the number is even, otherwise answer 'no'.`;
export const playGame = () => {
  console.log(welcomeText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  isEven(name);
  if (result === 1) {
    isEven(name);
  } 
  if (result === 2) {
    isEven(name);
  };
  if (result === 3) {
    console.log(`Congratulation, ${name}!`)
  }
};

 const isEven = (name) => {
  const num = getRundomNumber(); 
  console.log(`Question: ${num}`);
  const answer = readlineSync.question("Your answer: ");
  const correctAnswer = getCorrAnswer(num);
   if (answer === correctAnswer) {
    result += 1;
    console.log('Correct!');
  } else {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  } 
};



