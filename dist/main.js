/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-console */\n/* eslint-disable no-plusplus */\n\nconst Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\nclass Gameboard {\n  constructor() {\n    this.ships = [];\n    this.shipsSunk = [];\n    this.missedShots = [];\n    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(\"\"));\n  }\n  isLegalCoordinates(coordinates) {\n    const [x, y] = coordinates;\n    if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {\n      return true;\n    }\n    return false;\n  }\n  shipOutOfBounds(ship, coordinates, direction) {\n    const [x, y] = coordinates;\n    if (direction === \"horizontal\") {\n      const maxLeftAndRightValue = coordinates[1] + (ship.length - 1);\n      if (this.isLegalCoordinates([x, maxLeftAndRightValue])) {\n        return true;\n      }\n    }\n    if (direction === \"vertical\") {\n      const maxUpAndDownValue = coordinates[0] + (ship.length - 1);\n      if (this.isLegalCoordinates([maxUpAndDownValue, y])) {\n        return true;\n      }\n    }\n    return false;\n  }\n  placeShip(ship, coordinates, direction) {\n    if (!this.isLegalCoordinates(coordinates) && !this.shipOutOfBounds(ship, coordinates, direction)) {\n      throw new Error(\"coordinates are higher than board row/column \");\n    } else {\n      const [x, y] = coordinates;\n      if (direction === \"vertical\") {\n        for (let i = 0; i < ship.length; i++) {\n          this.grid[x + i][y] = ship;\n        }\n        this.ships.push(ship);\n      } else {\n        for (let i = 0; i < ship.length; i++) {\n          this.grid[x][y + i] = ship;\n        }\n        this.ships.push(ship);\n      }\n      return this.grid;\n    }\n  }\n  alreadyShot(coordinates) {\n    const [x, y] = coordinates;\n    if (this.grid[x][y] === \"x\") {\n      return true;\n    }\n    return false;\n  }\n  receiveAttack(ship, coordinates) {\n    const [x, y] = coordinates;\n    if (this.alreadyShot(coordinates)) {\n      console.error(\"Already shot\");\n      return this.grid;\n    }\n    if (this.grid[x][y] === \"\") {\n      this.grid[x][y] = \"x\";\n      this.missedShots.push(this.grid[x][y]);\n    } else if (ship instanceof Ship) {\n      this.shipsSunk.push(this.grid[x][y]);\n      ship.hit();\n    } else {\n      console.error(\"Invalid parameter for receive attack\");\n      return this.grid;\n    }\n    return this.grid;\n  }\n  allSunk() {\n    return this.ships.every(ship => ship.isSunk());\n  }\n  reset() {\n    this.shipsSunk = [];\n    this.missedShots = [];\n    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(\"\"));\n    this.ships.forEach(ship => {\n      ship.timesHit = 0;\n      ship.sunk = false;\n    });\n  }\n}\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://webpack-demo/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable no-bitwise */\n/* eslint-disable no-plusplus */\n/* eslint-disable max-classes-per-file */\n\nconst Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\nconst Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.grid = new Gameboard();\n  }\n  attack(ship, coordinates) {\n    return this.grid.receiveAttack(ship, coordinates);\n  }\n  placeShip(ship, coordinates, direction) {\n    return this.grid.placeShip(ship, coordinates, direction);\n  }\n}\nclass Ai extends Player {\n  getRandomPlace() {\n    const ship = new Ship(Math.floor(Math.random() * 4));\n    const x = Math.floor(Math.random() * 9);\n    const y = Math.floor(Math.random() * 9);\n    const coordinates = [x, y];\n    const directions = [\"horizontal\", \"vertical\"];\n    const directionChoice = directions[Math.floor(Math.random() * directions.length)];\n    return this.placeShip(ship, coordinates, directionChoice);\n  }\n  getRandomAttack() {\n    const ship = new Ship(Math.floor(Math.random() * 4));\n    const x = Math.floor(Math.random() * 9);\n    const y = Math.floor(Math.random() * 9);\n    const coordinates = [x, y];\n    return this.attack(ship, coordinates);\n  }\n}\nmodule.exports = Player;\nmodule.exports = Ai;\n\n//# sourceURL=webpack://webpack-demo/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n  constructor(length) {\n    this.length = length;\n    this.timesHit = 0;\n    this.sunk = false;\n  }\n\n  // each time ship gets a hit, increment value of timesHit\n  hit() {\n    // eslint-disable-next-line no-plusplus\n    this.timesHit++;\n    if (this.timesHit >= this.length) {\n      this.sunk = true;\n    }\n  }\n  isHit() {\n    return this.timesHit > 0;\n  }\n\n  /* calculate whether a ship is considered sunk based on difference between length\n  and the numbers of hits it has received */\n  isSunk() {\n    return this.sunk;\n  }\n}\nmodule.exports = Ship;\n\n//# sourceURL=webpack://webpack-demo/./src/Ship.js?");

/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameLoop),\n/* harmony export */   restartGame: () => (/* binding */ restartGame)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* eslint-disable no-unreachable-loop */\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-loop-func */\n/* eslint-disable no-plusplus */\n\n// game loop should step through the game turn by turn\n// using only methods from other objects\n// if at any point i am tempted to write a new function inside the game loop\n// step back and figure out which class or module that function should belong to\n\n\nconst Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\nconst Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\nconst Player = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\n// scores\nlet aiScore = 0;\nlet playerScore = 0;\nfunction gameLoop() {\n  // cell elements\n  const humanCells = document.getElementsByClassName(\"human-cells\");\n  const aiCells = document.getElementsByClassName(\"ai-cells\");\n\n  // text contents to update score\n  const h2Ai = document.getElementById(\"h2-ai\");\n  const h2Player = document.getElementById(\"h2-player\");\n\n  // access ai cells looping through all cells\n  for (let i = 0; i < aiCells.length; i++) {\n    const aiCell = aiCells[i];\n    aiCell.addEventListener(\"click\", e => {\n      // get coordinates on clicked cell\n      const x = e.target.parentElement.rowIndex;\n      const y = e.target.cellIndex;\n      const coordinates = [x, y];\n      const ship = ___WEBPACK_IMPORTED_MODULE_0__.aiGameboard.grid[x][y];\n      if (aiCell.classList.contains(\"attacked\")) {\n        // Ignore the click if the cell has already been attacked\n        return;\n      }\n      // give ai cell attacked classlist\n      aiCell.classList.add(\"attacked\");\n      const attack = ___WEBPACK_IMPORTED_MODULE_0__.aiGameboard.receiveAttack(ship, coordinates);\n      if (attack && aiCell.innerHTML == \"[object Object]\") {\n        aiCell.style.pointerEvents = \"none\";\n        aiCell.style.opacity = \"1\";\n        aiCell.textContent = \"ship\";\n        aiCell.style.backgroundColor = \"red\";\n        playerScore++;\n        h2Ai.innerHTML = `Player 2(Ai); Score: ${playerScore}`;\n      } else if (aiCell.innerHTML !== \"[object Object]\") {\n        aiCell.style.pointerEvents = \"none\";\n        aiCell.style.opacity = \"1\";\n        aiCell.textContent = \"miss\";\n        aiCell.style.backgroundColor = \"blue\";\n      }\n\n      // trigger a random attack for the AI when an aiCell is clicked by the user\n      while (true) {\n        const randomX = Math.floor(Math.random() * 9);\n        const randomY = Math.floor(Math.random() * 9);\n        const randomCoordinates = [randomX, randomY];\n        const humanShip = ___WEBPACK_IMPORTED_MODULE_0__.playerGameboard.grid[randomX][randomY];\n        console.log(___WEBPACK_IMPORTED_MODULE_0__.playerGameboard);\n        const randomHumanCell = humanCells[randomX * 9 + randomY];\n        if (!randomHumanCell.classList.contains(\"attacked\")) {\n          const aiAttack = ___WEBPACK_IMPORTED_MODULE_0__.playerGameboard.receiveAttack(humanShip, randomCoordinates);\n          randomHumanCell.classList.add(\"attacked\");\n\n          // handle the result of the AI attack\n          if (aiAttack) {\n            if (randomHumanCell.style.backgroundColor === \"pink\") {\n              randomHumanCell.style.backgroundColor = \"red\";\n              aiScore++;\n              h2Player.innerHTML = `Player 1(Human); Score: ${aiScore}`;\n              randomHumanCell.innerHTML = \"ship\";\n            } else if (randomHumanCell.style.backgroundColor !== \"red\") {\n              randomHumanCell.style.backgroundColor = \"blue\";\n              randomHumanCell.innerHTML = \"miss\";\n            }\n          }\n\n          // if player's or ai's all ships are sunk,\n          if (___WEBPACK_IMPORTED_MODULE_0__.playerGameboard.allSunk() || ___WEBPACK_IMPORTED_MODULE_0__.aiGameboard.allSunk()) {\n            gameOver();\n          }\n        }\n        // break out of the loop if the selected cell is already attacked\n        // to prevent infinite loop\n        break;\n      }\n    });\n  }\n\n  // looping through all human cells\n  for (let i = 0; i < humanCells.length; i++) {\n    const humanCell = humanCells[i];\n    if (humanCell.innerHTML === \"[object Object]\") {\n      humanCell.style.backgroundColor = \"pink\";\n      humanCell.innerHTML = \"\";\n    }\n    // user cannot click on his own grid cells\n    humanCell.style.pointerEvents = \"none\";\n  }\n  function gameOver() {\n    const dialog = document.querySelector(\"dialog\");\n    // if the dialog is already open, return\n    if (dialog.open) {\n      return;\n    }\n    // remove attacked class from ai cells\n    for (let i = 0; i < aiCells.length; i++) {\n      aiCells[i].classList.remove(\"attacked\");\n    }\n\n    // Check if either player or AI has all ships sunk\n    if (___WEBPACK_IMPORTED_MODULE_0__.playerGameboard.allSunk() || ___WEBPACK_IMPORTED_MODULE_0__.aiGameboard.allSunk()) {\n      const dialogText = document.getElementById(\"end-text\");\n      dialog.showModal();\n      dialog.style.display = \"flex\";\n      if (___WEBPACK_IMPORTED_MODULE_0__.aiGameboard.allSunk()) {\n        console.log(\"player wins\");\n        dialogText.textContent = \"Game over. Player wins\";\n      } else {\n        console.log(\"computer wins!\");\n        dialogText.textContent = \"Game over. Ai wins\";\n      }\n      const restartButton = document.getElementById(\"restart-button\");\n      restartButton.addEventListener(\"click\", restartGame);\n    }\n  }\n}\nfunction restartGame() {\n  const aiCells = document.getElementsByClassName(\"ai-cells\");\n  const humanCells = document.getElementsByClassName(\"human-cells\");\n  const h2Ai = document.getElementById(\"h2-ai\");\n  const h2Player = document.getElementById(\"h2-player\");\n  const dialog = document.querySelector(\"dialog\");\n  dialog.close();\n  dialog.style.display = \"none\";\n  // reset score\n  aiScore = 0;\n  playerScore = 0;\n\n  // reset text score\n  h2Ai.innerHTML = `Player 2(Ai); Score: ${playerScore}`;\n  h2Player.innerHTML = `Player 1(Human); Score: ${aiScore}`;\n  ___WEBPACK_IMPORTED_MODULE_0__.aiGameboard.reset();\n  ___WEBPACK_IMPORTED_MODULE_0__.playerGameboard.reset();\n\n  // create ships again\n  (0,___WEBPACK_IMPORTED_MODULE_0__.createPlayerShips)();\n  (0,___WEBPACK_IMPORTED_MODULE_0__.createComputerShips)();\n\n  // Reset UI elements\n  for (let i = 0; i < aiCells.length; i++) {\n    const aiCell = aiCells[i];\n    aiCell.classList.remove(\"attacked\");\n    aiCell.style.pointerEvents = \"auto\";\n    aiCell.style.opacity = \"1\";\n    aiCell.textContent = \"\";\n    aiCell.style.backgroundColor = \"white\";\n  }\n  for (let i = 0; i < humanCells.length; i++) {\n    const humanCell = humanCells[i];\n    humanCell.classList.remove(\"attacked\");\n    humanCell.innerHTML = \"\";\n    if (humanCell.style.backgroundColor === \"blue\") {\n      humanCell.style.backgroundColor = \"white\";\n    } else if (humanCell.style.backgroundColor === \"red\") {\n      humanCell.style.backgroundColor = \"pink\";\n    }\n    humanCell.style.pointerEvents = \"none\";\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/gameloop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aiGameboard: () => (/* binding */ aiGameboard),\n/* harmony export */   createComputerShips: () => (/* binding */ createComputerShips),\n/* harmony export */   createPlayerShips: () => (/* binding */ createPlayerShips),\n/* harmony export */   fourSquareShipOne: () => (/* binding */ fourSquareShipOne),\n/* harmony export */   fourSquareShipThree: () => (/* binding */ fourSquareShipThree),\n/* harmony export */   fourSquareShipTwo: () => (/* binding */ fourSquareShipTwo),\n/* harmony export */   oneSquareShip: () => (/* binding */ oneSquareShip),\n/* harmony export */   oneSquareShipFour: () => (/* binding */ oneSquareShipFour),\n/* harmony export */   oneSquareShipThree: () => (/* binding */ oneSquareShipThree),\n/* harmony export */   oneSquareShipTwo: () => (/* binding */ oneSquareShipTwo),\n/* harmony export */   playerGameboard: () => (/* binding */ playerGameboard),\n/* harmony export */   twoSquareShipOne: () => (/* binding */ twoSquareShipOne),\n/* harmony export */   twoSquareShipThree: () => (/* binding */ twoSquareShipThree),\n/* harmony export */   twoSquareShipTwo: () => (/* binding */ twoSquareShipTwo)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ \"./src/gameloop.js\");\n\n\nconst Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\nconst Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\nconst Player = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\nconst humanGrid = document.getElementById(\"human-grid\");\nconst aiGrid = document.getElementById(\"ai-grid\");\nconst resetGameBtn = document.getElementById(\"resetGameBtn\");\nconst playerGameboard = new Gameboard();\nconst aiGameboard = new Gameboard();\n\n// each player will have 4 ship x 1square, 3 ship x 4square, 3 ship x 2square\nconst oneSquareShip = new Ship(1);\nconst oneSquareShipTwo = new Ship(1);\nconst oneSquareShipThree = new Ship(1);\nconst oneSquareShipFour = new Ship(1);\nconst twoSquareShipOne = new Ship(2);\nconst twoSquareShipTwo = new Ship(2);\nconst twoSquareShipThree = new Ship(2);\nconst fourSquareShipOne = new Ship(4);\nconst fourSquareShipTwo = new Ship(4);\nconst fourSquareShipThree = new Ship(4);\n\n// functions to place ships for player and ai\nfunction createPlayerShips() {\n  playerGameboard.placeShip(oneSquareShip, [0, 0], \"vertical\");\n  playerGameboard.placeShip(oneSquareShipTwo, [6, 8], \"vertical\");\n  playerGameboard.placeShip(oneSquareShipThree, [2, 2], \"vertical\");\n  playerGameboard.placeShip(oneSquareShipFour, [0, 6], \"vertical\");\n  playerGameboard.placeShip(twoSquareShipOne, [2, 4], \"horizontal\");\n  playerGameboard.placeShip(twoSquareShipTwo, [1, 8], \"horizontal\");\n  playerGameboard.placeShip(twoSquareShipThree, [7, 1], \"horizontal\");\n  playerGameboard.placeShip(fourSquareShipOne, [8, 4], \"horizontal\");\n  playerGameboard.placeShip(fourSquareShipTwo, [4, 0], \"horizontal\");\n  playerGameboard.placeShip(fourSquareShipThree, [3, 6], \"vertical\");\n}\nfunction createComputerShips() {\n  aiGameboard.placeShip(oneSquareShip, [0, 4], \"vertical\");\n  aiGameboard.placeShip(oneSquareShipTwo, [9, 1], \"vertical\");\n  aiGameboard.placeShip(oneSquareShipThree, [1, 2], \"vertical\");\n  aiGameboard.placeShip(oneSquareShipFour, [1, 1], \"vertical\");\n  aiGameboard.placeShip(twoSquareShipOne, [2, 4], \"horizontal\");\n  aiGameboard.placeShip(twoSquareShipTwo, [1, 8], \"horizontal\");\n  aiGameboard.placeShip(twoSquareShipThree, [7, 1], \"horizontal\");\n  aiGameboard.placeShip(fourSquareShipOne, [8, 4], \"horizontal\");\n  aiGameboard.placeShip(fourSquareShipTwo, [3, 3], \"vertical\");\n  aiGameboard.placeShip(fourSquareShipThree, [5, 6], \"horizontal\");\n}\n\n// function that takes the 2D array created in Gameboard.js constructors as parameter\n// and it renders it into a table and appends to the html\n\nfunction createTable(_ref) {\n  let {\n    tableData,\n    grid,\n    boolean\n  } = _ref;\n  if (boolean === true) {\n    createPlayerShips();\n  } else if (boolean === false) {\n    createComputerShips();\n  }\n  const table = document.createElement(\"table\");\n  const tableBody = document.createElement(\"tbody\");\n  tableData.forEach(rowData => {\n    const row = document.createElement(\"tr\");\n    rowData.forEach(cellData => {\n      const cell = document.createElement(\"td\");\n      if (boolean === true) {\n        cell.className = \"human-cells\";\n        table.id = \"human-table\";\n      } else if (boolean === false) {\n        cell.className = \"ai-cells\";\n        table.id = \"ai-table\";\n      }\n      cell.appendChild(document.createTextNode(cellData));\n      row.appendChild(cell);\n    });\n    tableBody.appendChild(row);\n  });\n  table.appendChild(tableBody);\n  grid.appendChild(table);\n}\ncreateTable({\n  tableData: playerGameboard.grid,\n  grid: humanGrid,\n  boolean: true\n});\ncreateTable({\n  tableData: aiGameboard.grid,\n  grid: aiGrid,\n  boolean: false\n});\nresetGameBtn.addEventListener(\"click\", _gameloop__WEBPACK_IMPORTED_MODULE_1__.restartGame);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n\tmargin: 0;\n\tpadding: 0;\n}\nbody {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\tpadding: 75px;\n}\n\n/* header */\n#header {\n\tpadding-bottom: 20px;\n}\nh1{\n\tfont-size: 35px;\n}\n\n/* content */\n#content {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 100px;\n\tpadding-bottom: 20px;\n}\n#human, #ai {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ntable, td, th {\n\tborder: 1px solid;\n}\n#ai-cells {\n\tdisplay: none;\n}\ntd.ai-cells {\n\topacity: 0;\n\tcursor: alias;\n}\ntable {\n\tborder-collapse: collapse;\n\ttext-align: center;\n\tdisplay: inline-table;\n\toverflow:scroll;\n\ttable-layout: fixed;\n\twidth: 480px;\n}\n\ntd {\n\theight: 50px;\n}\n/* footer */\n#footer {\n\tpadding-top: 50px;\n}\n\n/* dialog */\n\n::backdrop, dialog + .backdrop {\n\tbackground-color: rgb(158 158 158 / 61%);\n}\ndialog {\n\twidth: 362px;\n    margin-left: 950px;\n    margin-top: 385px;\n    height: 154px;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\ndialog::backdrop {\n\tdisplay: flex;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;