const keys = require("../helpers/keys")
const roadkit = require("../keyboards/roadkit")

const layers = {}

layers[0] = [
  [num7, num8, num9, kp_plus],
  [num4, num5, num6, kp_minus],
  [num1, num2, num3, backspace],
  [kp_dot, kp_0, raise, kp_equal],
]

layers._RAISE = [
  [esc, xxx, xxx, kp_asterisk],
  [xxx, xxx, xxx, kp_slash],
  [xxx, xxx, xxx, xxx],
  [xxx, xxx, xxx, xxx],
]

module.exports = {
  board: roadkit,
  layout: roadkit.layouts.ortho,
  layers,
}
