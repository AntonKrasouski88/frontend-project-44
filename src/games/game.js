import { showGameGreeting, getNameUser, showResultGame } from './utils.js'

export const startGame = (game) => {
  showGameGreeting()
  const name = getNameUser()
  let flag = true

  for (let i = 0; i < 3; i++) {
    flag = game()
    if (!flag) {
      break
    }
  }
  showResultGame(flag, name)
}
