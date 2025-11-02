import { getRandomNumber, showRoundResult, getAnswerUserNumber } from './utils.js'

export const gameCalc = () => {
  const symbolsArr = ['+', '-', '*']
  const startRange = 1
  const endRange = 100
  const sign = symbolsArr[Math.floor(Math.random() * symbolsArr.length)]
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
  const firstNumber = getRandomNumber(startRange, endRange)
  const secondNumber = getRandomNumber(startRange, endRange)

  console.log('What is the result of the expression?')
  console.log(`Question: ${firstNumber} ${sign} ${secondNumber}`)
  const userAnswer = getAnswerUserNumber()
  const rightAnswer = calculateNumbers(firstNumber, secondNumber, sign)
  showRoundResult(userAnswer, String(rightAnswer))
  return userAnswer === `${rightAnswer}`
}
