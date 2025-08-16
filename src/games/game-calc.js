import readlineSync from 'readline-sync'
import { getRandomNumber, isCorrectAnswer, showRoundResultNum } from './utils.js'

const symbolsArr = ['+', '-', '*']

const getSymbol = symbols => symbols[Math.floor(Math.random() * symbols.length)]

const calculateNumbers = (firstNumber, secondNumber, symbol) => {
  let result = 0
  if (symbol === '+') {
    result = firstNumber + secondNumber
  }
  if (symbol === '-') {
    result = firstNumber - secondNumber
  }
  if (symbol === '*') {
    result = firstNumber * secondNumber
  }
  return result
}

const getAnswer = (firstNumber, secondNumber, symbol) => {
  console.log('What is the result of the expression?')
  console.log(`Question: ${firstNumber} ${symbol} ${secondNumber}`)
  const answer = readlineSync.question('Your answer: ')
  return Number(answer)
}

const startGameCalculate = () => {
  const startRange = 1
  const endRange = 100
  let flag = true

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(startRange, endRange)
    const secondNumber = getRandomNumber(startRange, endRange)
    const symbol = getSymbol(symbolsArr)
    const answerRight = calculateNumbers(firstNumber, secondNumber, symbol)
    const userAnswer = getAnswer(firstNumber, secondNumber, symbol)
    const correctAnswer = isCorrectAnswer(userAnswer, answerRight)
    flag = showRoundResultNum(correctAnswer, userAnswer, answerRight)
    if (!flag) {
      break
    }
  }
  return flag
}

export default startGameCalculate
