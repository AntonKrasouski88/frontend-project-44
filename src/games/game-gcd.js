import {
  getRandomNumber,
  isCorrectAnswer,
  checkAnswerNumber,
} from './utils.js'

const getListDivisors = (num) => {
  const arrDivisors = [num]
  for (let i = 1; i <= Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      arrDivisors.push(i)
    }
  }
  return arrDivisors
}

const getMaxDivisors = (arrDivisors1, arrDivisors2) => {
  const divisors = arrDivisors1.reduce((acc, divisor) => {
    if (arrDivisors2.includes(divisor) && acc <= divisor) {
      acc = divisor
    }
    return acc
  }, 1)

  return divisors
}

const getAnswerUser = (num1, num2) => {
  console.log('Find the greatest common divisor of given numbers.')
  console.log(`Question: ${num1} ${num2}`)
  const answer = checkAnswerNumber()
  return Number(answer)
}

const startGameNod = () => {
  const startRange = 1
  const endRange = 100
  let flag = true

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(startRange, endRange)
    const secondNumber = getRandomNumber(startRange, endRange)
    const listDivisorsFirstNum = getListDivisors(firstNumber)
    const listDivisorsSecondNum = getListDivisors(secondNumber)
    const minDivisor = getMaxDivisors(
      listDivisorsFirstNum,
      listDivisorsSecondNum,
    )
    const userAnswer = getAnswerUser(firstNumber, secondNumber)
    const correctAnswer = isCorrectAnswer(userAnswer, minDivisor)
    if (correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${minDivisor}'.`,
      )
      flag = false
      break
    }
  }

  return flag
}

export default startGameNod
