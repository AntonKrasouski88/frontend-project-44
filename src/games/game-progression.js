import { getRandomNumber, showRoundResult, getAnswerUserNumber } from './utils.js'

export const gameProgression = () => {
  const startNumber = getRandomNumber(1, 100)
  const step = getRandomNumber(1, 10)
  const progressionLength = 10
  const positionHideElem = getRandomNumber(0, progressionLength - 1)
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
  const progressionNumbers = getProgression(startNumber, step, progressionLength)
  const progression = hideNumber(progressionNumbers, positionHideElem)
  console.log('What number is missing in the progression?')
  console.log(`Question: ${progression.join(' ')}`)
  const userAnswer = getAnswerUserNumber()
  showRoundResult(userAnswer, String(progressionNumbers[positionHideElem]))
  return userAnswer === `${progressionNumbers[positionHideElem]}`
}
