#!/usr/bin/env node
import {
  showGameGreeting,
  getNameUser,
  showResultGame,
} from '../src/games/utils.js'
import startGameNod from '../src/games/game-gcd.js'

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGameNod()
showResultGame(resultGame, nameUser)
