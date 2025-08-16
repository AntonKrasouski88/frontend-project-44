#!/usr/bin/env node
import {
  showGameGreeting,
  getNameUser,
  showResultGame,
} from '../src/games/utils.js'

import startGameCalculate from '../src/games/game-calc.js'

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGameCalculate()
showResultGame(resultGame, nameUser)
