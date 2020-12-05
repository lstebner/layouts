const chalk = require("chalk")
const keyboardsConfig = require("../keyboards")
const keyboardLayouts = require("../layouts")
const keymap = require("../keymap")
const asciiLayout = require("./asciiLayout")

const { layouts, keyboards } = keyboardsConfig

const LINE_BREAK = "\n"
const COLON = ":"
const SPACE = " "

const p = console.log
const err = (msg) => p(chalk.red("ooops, something went wrong:\n" + msg))

const _infoText = () => {
  p(`
  layouts help text

  available commands:
    - layout -k <keyboardname>
      render an ascii layout for a keyboard, pass 'all' to see all boards at once

    - keymap -k <keymapname>
      generate a qmk compatible keymap file

    - boardlist
      list all boards this application knows about, add --describe for info about each

    - help
      displays this help text
  `)
}

const _boardList = ({ describe }) => {
  const boardsList = Object.keys(keyboards)
  let outputString = ""
  let description = ""

  for (let board of boardsList) {
    if (describe) {
      description = COLON + SPACE + keyboards[board].metadata.description + SPACE
    }
    outputString += `- \`${board}\`${description}${LINE_BREAK}`
  }

  p(LINE_BREAK + outputString)
}

const _asciiLayout = ({ k }) => {
  const ALL = "all"
  const argKeyboard = k || ALL
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
    p(asciiLayout(outputBoards[kb]))
  }
}

const _keymap = ({ k }) => {
  const keyboard = k
  const layout = keyboardLayouts[keyboard]

  if (!keyboard) return err(`-k arg is required to know which keymap to generate`)
  if (!layout) return err(`could not locate a keymap definition for "${keyboard}"`)

  p(keymap(layout))
}

module.exports = (argv) => {
  if (argv.info) {
    return _infoText()
  } else if (argv.boardlist) {
    return _boardList({ describe } = argv)
  } else if (argv.keymap) {
    return _keymap({ k } = argv)
  }

  //default is ascii layout
  _asciiLayout({ k } = argv)
}
