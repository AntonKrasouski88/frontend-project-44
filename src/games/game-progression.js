import readlineSync from 'readline-sync'
import {
  checkAnswerNumber,
  getRandomNumber,
  isCorrectAnswer,
} from './utils.js'

const getProgression = (startNum, step, length) => {
  const arrNumbers = []
  let num = startNum
  for (let i = 0; i < length; i += 1) {
    arrNumbers.push(num)
    num += step
  }
  return arrNumbers
}

const hideNumber = (arrNum, position) => {
  const copyArr = [...arrNum]
  copyArr[position] = '..'
  return copyArr
}

const getAnswerUser = (arrNum, position) => {
  const progression = hideNumber(arrNum, position)
  console.log('What number is missing in the progression?')
  console.log(`Question: ${progression.join(' ')}`)
  const answer = checkAnswerNumber()
  return Number(answer)
}

const startGameProgression = () => {
  let flag = true

  for (let i = 0; i < 3; i += 1) {
    const startNumber = getRandomNumber(1, 100)
    const step = getRandomNumber(1, 10)
    const progressionLength = 10
    const positionHideElem = getRandomNumber(0, progressionLength - 1)
    const progressionNumbers = getProgression(
      startNumber,
      step,
      progressionLength,
    )
    const userAnswer = getAnswerUser(progressionNumbers, positionHideElem)
    const correctAnswer = isCorrectAnswer(
      userAnswer,
      progressionNumbers[positionHideElem],
    )
    if (correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${progressionNumbers[positionHideElem]}'.`,
      )
      flag = false
      break
    }
  }
  return flag
}

export default startGameProgression
