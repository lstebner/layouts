const keys = require("../helpers/keys")
const roadkit = require("../keyboards/roadkit")

const layer1 = [
  [keys.num7, keys.num8, keys.num9, keys.kp_plus],
  [keys.num4, keys.num5, keys.num6, keys.kp_minus],
  [keys.num1, keys.num2, keys.num3, keys.backspace],
  [keys.kp_dot, keys.kp_0, keys.raise, keys.kp_equal],
]

const layer2 = [
  [keys.esc, keys.xxx, keys.xxx, keys.kp_asterisk],
  [keys.xxx, keys.xxx, keys.xxx, keys.kp_slash],
  [keys.xxx, keys.xxx, keys.xxx, keys.xxx],
  [keys.xxx, keys.xxx, keys.xxx, keys.xxx],
]

const layers = {
  0: layer1,
  _RAISE: layer2,
}

module.exports = {
  board: roadkit,
  layout: roadkit.layouts.ortho,
  layers,
}
