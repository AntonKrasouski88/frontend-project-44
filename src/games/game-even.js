import {
  getRandomNumber, showRoundResult, getAnswerUserYesNo } from './utils.js'

export const gameEven = () => {
  const startRange = 1
  const endRange = 100
  const randomNumber = getRandomNumber(startRange, endRange)
  const isEvenNumber = (num) => {
    if (num < 2) {
      return 'no'
    }
    if (num === 2) {
      return 'yes'
    }
    if (num % 2 === 0) {
      return 'no'
    }
    const limit = Math.ceil(Math.sqrt(num))
    for (let i = 3; i <= limit; i += 2) {
      if (num % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }
  const rightAnswer = isEvenNumber(randomNumber)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  console.log(`Question: ${randomNumber}`)
  const answerUser = getAnswerUserYesNo()
  showRoundResult(answerUser, rightAnswer)
  return answerUser === rightAnswer
}
