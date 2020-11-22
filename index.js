const yargs = require("yargs")
const chalk = require("chalk")
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

require("./src/cli")(argv)

