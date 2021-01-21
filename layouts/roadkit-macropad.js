const keys = require("../helpers/keys")
const roadkit = require("../keyboards/roadkit")
const { x4 } = require("./groups/blanks")
const CustomKey = require("./helpers/CustomKey")

const layers = {}

const customRaiseKey = CustomKey("MY_RAISE_KEY", "MO(_RAISE)")

layers[0] = [
  [num7, num8, num9, kp_plus],
  [num4, num5, num6, kp_minus],
  [num1, num2, num3, backspace],
  [kp_dot, kp_0, customRaiseKey, kp_equal],
]

layers._RAISE = [[esc, xxx, xxx, kp_asterisk], [xxx, xxx, xxx, kp_slash], x4, x4]

module.exports = {
  board: roadkit,
  layout: roadkit.layouts.ortho,
  layers,
}
