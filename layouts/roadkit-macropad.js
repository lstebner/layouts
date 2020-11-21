const keys = require("../helpers/keys")
const roadkit = require("../keyboards/roadkit")

const layer1 = [
  [[keys["7"]], [keys["8"]], [keys["9"]], [keys.plus]],
  [[keys["4"]], [keys["5"]], [keys["6"]], [keys.minus]],
  [[keys["1"]], [keys["2"]], [keys["3"]], [keys.asterisk]],
  [[keys.dot], [keys["0"]], [keys.backspace], [keys.fslash]],
]

module.exports = {
  board: roadkit,
  layers: [
    layer1,
  ]
}
