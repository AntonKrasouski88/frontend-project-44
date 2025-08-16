#!/usr/bin/env node
import {
  showGameGreeting,
  getNameUser,
  showResultGame,
} from '../src/games/utils.js'

import startGameEvenNumber from '../src/games/game-even.js'

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGameEvenNumber()
showResultGame(resultGame, nameUser)
