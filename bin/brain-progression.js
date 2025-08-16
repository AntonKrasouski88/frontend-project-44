#!/usr/bin/env node
import {
  showGameGreeting,
  getNameUser,
  showResultGame,
} from '../src/games/utils.js'
import startGameProgression from '../src/games/game-progression.js'

showGameGreeting()
const nameUser = getNameUser()
const resultGame = startGameProgression()
showResultGame(resultGame, nameUser)
