import {
  getRandomNumber, showRoundResult, getAnswerUserYesNo } from './utils.js'

export const gameEven = () => {
  const startRange = 1
  const endRange = 100
  const randomNumber = getRandomNumber(startRange, endRange)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  console.log(`Question: ${randomNumber}`)
  const answerUser = getAnswerUserYesNo()
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
  showRoundResult(answerUser, rightAnswer)
  return answerUser === rightAnswer
}
