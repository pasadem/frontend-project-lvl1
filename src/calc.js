
import readlineSync from "readline-sync";

const rnum1 = (num1 = 20) => Math.floor(Math.random() * num1);
const rnum2 = (num2 = 20) => Math.floor(Math.random() * num2);
const ops = ['+', '-', '*'];
const opsIndex = Math.floor(Math.random() * 3);

//const operator = ops[opsIndex];
const getCorrAnswer = (num1, num2, ops) => {
  switch (opsIndex){
    case '+': 
      return num1 + num2;
    case '-': 
      return num1 - num2;
    case '*':
      return num1 * num2;
    } 
 };
let result = 0;
const welcomeText = 'Welcome to the Brain Games!';
const description = `What is the result of the expression?`;
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
  const operator = ops[opsIndex];
  const num1 = rnum1();
  const num2 = rnum2();
  console.log(`Question: ${num1}${operator}${num2}`);
  const answer = readlineSync.question("Your answer: ");
  const correctAnswer = getCorrAnswer(num1, num2);
   if (answer == correctAnswer) {
    result += 1;
    console.log('Correct!');
  } else {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  } 
};
