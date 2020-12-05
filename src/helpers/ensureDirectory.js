const chalk = require("chalk")
const fs = require("fs")

const ensureDirectory = (dirPath, then) => {
  fs.mkdir(dirPath, { recursive: true }, (makeError) => {
    if (makeError) {
      console.log(chalk.red("error creating directories"))
      console.log(makeError)
      return
    }

    then()
  })
}

module.exports = ensureDirectory
