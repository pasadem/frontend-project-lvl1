import getNum from '../src/getRundomNumber.js'

const num1 = getNum()
const num2 = getNum()
const num3 = getNum()
const num4 = getNum()
const num5 = getNum()
const num6 = getNum()
const getCorrAnswer = (num1, num2) => {
  if (num2 > num1) return getCorrAnswer(num2, num1)
  if (!num2) return num1
  return getCorrAnswer(num2, num1 % num2)
}
const getGameData = () => {
  return {
    description: 'Find the greatest common divisor of given numbers.',
    rounds: [
      {
        question: `${num1} ${num2}`,
        answer: getCorrAnswer(num1, num2).toString(),
      },
      {
        question: `${num3} ${num4}`,
        answer: getCorrAnswer(num3, num4).toString(),
      },
      {
        question: `${num5} ${num6}`,
        answer: getCorrAnswer(num5, num6).toString(),
      }
    ]
  }
}
export default getGameData