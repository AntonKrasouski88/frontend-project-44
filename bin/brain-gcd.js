#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  showGameGreeting,
  getNameUser,
  getRandomNumber,
  isCorrectAnswer,
} from './utils.js'

const getListDivisors = (num) => {
  const arrDivisors = [num]
  for (let i = 1; i < Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      arrDivisors.push(i)
    }
  }
  return arrDivisors
}

const getMinDivisors = (arrDivisors1, arrDivisors2) => {
  const divisors = arrDivisors1.reduce((acc, divisor) => {
    if (arrDivisors2.includes(divisor) && divisor !== 1) {
      acc.push(divisor)
    }
    return acc
  }, [])
  if (divisors.length !== 0) {
    return divisors[0]
  }

  return 1
}

const getAnswerUser = (num1, num2) => {
  console.log('Find the greatest common divisor of given numbers.')
  console.log(`Question: ${num1} ${num2}`)
  let answer
  do {
    answer = readlineSync.question('Your answer: ')
    if (answer.length === 0 || Number.isNaN(Number(answer))) {
      console.log('Please answer with a number')
    }
  } while (answer.length === 0 || Number.isNaN(Number(answer)))
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
    const minDivisor = getMinDivisors(
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

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGameNod()
if (resultGame) {
  console.log(`Congratulations, ${nameUser}!`)
}
else {
  console.log(`Let's try again, ${nameUser}!`)
}
