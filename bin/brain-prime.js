#!/usr/bin/env node
import {
  showGameGreeting,
  getNameUser,
  showResultGame,
} from '../src/games/utils.js'
import startGamePrime from '../src/games/game-prime.js'

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGamePrime()
showResultGame(resultGame, nameUser)
