import readlineSync from 'readline-sync'
import {
  getRandomNumber,
  isCorrectAnswer,
} from './utils.js'

const isEvenNumber = num => num % 2 === 0

const getAnswerUser = (num) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  console.log(`Question: ${num}`)
  let answer
  do {
    answer = readlineSync.question('Your answer: ')
    if (answer !== 'yes' && answer !== 'no') {
      console.log('Please answer with \'yes\' or \'no\'')
    }
  } while (answer !== 'yes' && answer !== 'no')
  return answer === 'yes'
}

const startGameEvenNumber = () => {
  const startRange = 1
  const endRange = 100
  let flag = true

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(startRange, endRange)
    const answerUser = getAnswerUser(randomNumber)
    const evenNumber = isEvenNumber(randomNumber)
    const correctAnswer = isCorrectAnswer(answerUser, evenNumber)

    if (correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${
          evenNumber ? 'yes' : 'no'
        }'.`,
      )
      flag = false
      break
    }
  }

  return flag
}

export default startGameEvenNumber
