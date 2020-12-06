const CANDYBAR = "candybar"
const MINIVAN = "minivan"
const PLANCK = "planck"
const PREONIC = "preonic"
const PRIME_E = "prime_e"
const ROADKIT = "roadkit"
const SIXTY = "sixty"

const LAYOUTS = {
  [CANDYBAR]: CANDYBAR,
  [MINIVAN]: MINIVAN,
  [PLANCK]: PLANCK,
  [PREONIC]: PREONIC,
  [PRIME_E]: PRIME_E,
  [ROADKIT]: ROADKIT,
  [SIXTY]: SIXTY,
}

const candybar = require("./keyboards/candybar")
const minivan = require("./keyboards/minivan")
const planck = require("./keyboards/planck")
const preonic = require("./keyboards/preonic")
const prime_e = require("./keyboards/prime_e")
const roadkit = require("./keyboards/roadkit")
const sixty = require("./keyboards/sixty")


module.exports = {
  layouts: LAYOUTS,
  keyboards: {
    [CANDYBAR]: candybar,
    [MINIVAN]: minivan,
    [PLANCK]: planck,
    [PREONIC]: preonic,
    [PRIME_E]: prime_e,
    [ROADKIT]: roadkit,
    [SIXTY]: sixty,
  }
}
