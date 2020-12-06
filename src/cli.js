const chalk = require("chalk")
const fs = require("fs")
const path = require("path")

const ensureDirectory = require("./helpers/ensureDirectory")

const keyboardsConfig = require("../keyboards")
const keyboardLayouts = require("../layouts")
const keymap = require("./keymap")
const asciiLayout = require("./asciiLayout")

const { layouts, keyboards } = keyboardsConfig

const LINE_BREAK = "\n"
const COLON = ":"
const SPACE = " "
const ASCII_PLACEHOLDER = "<--ascii-->"

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

const _boardList = ({ describe = true }) => {
  const boardsList = Object.keys(keyboards)
  let outputString = ""
  let description = ""

  for (let board of boardsList) {
    if (describe && describe !== "false") {
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

const _keymap = ({
  k,
  saveAs,
  print = true,
  save = false,
  saveDir = "./build/keymaps",
  safe = false,
  showAsciiLayout = true,
}) => {
  const keyboard = k
  const layout = keyboardLayouts[keyboard]
  const filename = saveAs || `${layout.board.metadata.name}.keymap.c`
  let fullPath = path.resolve(saveDir, filename)
  let asciiRendering = ""
  let keymapData

  if (!keyboard) return err(`-k arg is required to know which keymap to generate`)
  if (!layout) return err(`could not locate a keymap definition for "${keyboard}"`)

  if (showAsciiLayout && showAsciiLayout !== "false") {
    asciiRendering = "/*\n" + asciiLayout(layout.board) + "*/"
  }

  keymapData = keymap(layout).replace(ASCII_PLACEHOLDER, asciiRendering)

  if (print && print !== "false") {
    p(keymapData)
  }

  if (save && save !== "false") {
    ensureDirectory(fullPath.substr(0, fullPath.lastIndexOf("/")), () => {
      if (fs.existsSync(fullPath)) {
        if (safe && safe !== "false") {
          return p(chalk.red(`keymap file already exists; aborting. remove safe mode flag to overwrite, or specify a new name to save as`))
        } else {
          p(chalk.red(`${fullPath} exists, will be overwritten`))
        }
      }

      p(chalk.yellow(`writing keymap to ${fullPath}`))

      fs.writeFile(fullPath, keymapData, (saveErr) => {
        if (saveErr) {
          err("the following error occurred when attempting to write the keymap file")
          p(saveErr)

          return
        }

        p(chalk.green("done!"))
      })
    })
  }
}

module.exports = (argv) => {
  if (argv.info) {
    return _infoText()
  } else if (argv.boardlist) {
    return _boardList({ describe } = argv)
  } else if (argv.keymap) {
    return _keymap({ k, print, save, saveDir, safe } = argv)
  }

  //default is ascii layout
  _asciiLayout({ k } = argv)
}
