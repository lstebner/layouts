const keys = require("../helpers/keys")
const roadkit = require("../keyboards/roadkit")
const { x2, x3, x4 } = require("./groups/blanks")

const layers = {}

layers[0] = [
  [num7, num8, num9, kp_plus],
  [num4, num5, num6, kp_minus],
  [num1, num2, num3, backspace],
  [kp_dot, kp_0, raise, kp_equal],
]

layers._RAISE = [
  [esc, ...x2, kp_asterisk],
  [...x3, kp_slash],
  x4,
  x4,
]

module.exports = {
  board: roadkit,
  layout: roadkit.layouts.ortho,
  layers,
}
