import { getRandomNumber, showRoundResult, getAnswerUserNumber } from './utils.js'

export const gameGcd = () => {
  const startRange = 1
  const endRange = 100
  const firstNumber = getRandomNumber(startRange, endRange)
  const secondNumber = getRandomNumber(startRange, endRange)
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
  const listDivisorsFirstNum = getListDivisors(firstNumber)
  const listDivisorsSecondNum = getListDivisors(secondNumber)
  const maxDivisor = getMaxDivisors(
    listDivisorsFirstNum,
    listDivisorsSecondNum,
  )

  console.log('Find the greatest common divisor of given numbers.')
  console.log(`Question: ${firstNumber} ${secondNumber}`)
  const userAnswer = getAnswerUserNumber()
  showRoundResult(userAnswer, String(maxDivisor))
  return userAnswer === `${maxDivisor}`
}
