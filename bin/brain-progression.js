#!/usr/bin/env node
import readlineSync from 'readline-sync'
import {
  showGameGreeting,
  getNameUser,
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
  console.log(copyArr)
  console.log(arrNum)
  console.log(position)
  return copyArr
}

const getAnswerUser = (arrNum, position) => {
  const progression = hideNumber(arrNum, position)
  console.log('What number is missing in the progression?')
  console.log(`Question: ${progression.join(' ')}`)
  let answer
  do {
    answer = readlineSync.question('Your answer: ')
    if (answer.length === 0 || Number.isNaN(Number(answer))) {
      console.log('Please answer with a number')
    }
  } while (answer.length === 0 || Number.isNaN(Number(answer)))
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

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGameProgression()
if (resultGame) {
  console.log(`Congratulations, ${nameUser}!`)
}
else {
  console.log(`Let's try again, ${nameUser}!`)
}
