const yargs = require("yargs")
const chalk = require("chalk")
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const keyboardsConfig = require("./keyboards")
const keyboardLayouts = require("./layouts")
const keymap = require("./keymap")
const asciiLayout = require("./src/asciiLayout")

const { layouts, keyboards } = keyboardsConfig

// runtime input here and below -----------------------------------------------

if (argv.boardlist) {
  const boardsList = Object.keys(keyboards)
  let outputString = ""
  let description = ""

  for (let board of boardsList) {
    if (argv.describe) {
      description = COLON + SPACE + keyboards[board].metadata.description + SPACE
    }
    outputString += `- \`${board}\`${description}${LINE_BREAK}`
  }

  console.log(LINE_BREAK + outputString)

  return
} else if (argv.keymap) {
  const keyboard = argv.k
  const layout = keyboardLayouts[keyboard]

  console.log(keymap(layout))

  return
}

const ALL = "all"
const argKeyboard = argv.keyboard || argv.k || ALL
let outputBoards = []

if (argKeyboard.indexOf(",") > -1) {
  const argKeyboardsSplit = argKeyboard.split(",")

  for (let board of argKeyboardsSplit) {
    if (keyboards[board]) {
      outputBoards.push(keyboards[board])
    }
  }
} else if (keyboards[argKeyboard]) {
  outputBoards.push(keyboards[argKeyboard])
} else {
  outputBoards = keyboards
}

for (let kb in outputBoards) {
  console.log(asciiLayout(outputBoards[kb]))
}
