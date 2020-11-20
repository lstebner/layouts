const yargs = require("yargs")
const chalk = require("chalk")
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const keyboardsConfig = require("./keyboards")

const { layouts, keyboards } = keyboardsConfig

const BLANK = ""
const BSLASH = "\\"
const COLON = ":"
const FSLASH = "/"
const LINE_BREAK = "\n"
const PIPE = "|"
const SPACE = " "
const TICK = "•"
const UNDER = "-"

const asciiHeading = (label) => {
  let heading = SPACE

  for (let i = 0; i < label.length + 3; i++) {
    heading += "_"
  }

  heading += LINE_BREAK
  heading += FSLASH + SPACE + label + SPACE + SPACE + BSLASH + LINE_BREAK

  return heading
}

const asciiKey = (keySize, leftBorder = true, rightBorder = false) => {
  let size = keySize / 25
  let chars = ""

  if (leftBorder) chars = PIPE

  for (let i = 0; i < size - 1; i++) {
    chars += SPACE
  }

  if (rightBorder) chars += PIPE

  return chars
}

const asciiSpacer = (keySize) => {
  let size = keySize / 25
  let chars = SPACE

  if (size === 1) return chars

  for (let i = 0; i < size; i++) {
    chars += SPACE
  }

  return chars
}

const asciiDividerRow = (rowLayout) => {
  let rendered = BLANK

  for (let keyIndex in rowLayout) {
    keyIndex = parseInt(keyIndex)
    let rawSize = rowLayout[keyIndex]
    let isSpacer = rawSize[0] === "s"
    let nextKeyIsSpacer = rowLayout[keyIndex + 1] && rowLayout[keyIndex + 1][0] === "s"
    let keySize = isSpacer ? parseInt(rawSize.substr(1)) : rawSize

    keySize = keySize / 25

    rendered += isSpacer ? SPACE : TICK

    for (let i = 0; i < keySize - 1; i++) {
      rendered += isSpacer ? SPACE : UNDER
    }

    if (isSpacer && keySize > 1) rendered += SPACE

    if (nextKeyIsSpacer) {
      rendered += TICK
    }
  }

  rendered += TICK

  return rendered
}

const asciiLayout = (keyboard) => {
  const { layout } = keyboard
  let rendered = ""

  rendered += asciiHeading(keyboard.metadata.name + SPACE + keyboard.metadata.size + "%")
  rendered += asciiDividerRow(layout[0]) + LINE_BREAK

  for (let row in layout) {
    for (let keyIndex in layout[row]) {
      keyIndex = parseInt(keyIndex)
      let isFirstKey = keyIndex === 0
      let isLastKey = keyIndex === layout[row].length - 1
      let keySize = layout[row][keyIndex]
      let nextKeyIsSpacer = layout[row][keyIndex + 1] && layout[row][keyIndex + 1][0] === "s"

      if (keySize[0] === "s") {
        rendered += asciiSpacer(parseInt(keySize.substr(1)))

        if (nextKeyIsSpacer) rendered += TICK
      } else {
        rendered += asciiKey(keySize, true, isLastKey)

        if (nextKeyIsSpacer) rendered += PIPE
      }
    }

    rendered += LINE_BREAK
    rendered += asciiDividerRow(layout[row]) + LINE_BREAK
  }

  return rendered
}


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
