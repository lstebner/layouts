const keys = require("../helpers/keys")
const roadkit = require("../keyboards/roadkit")
const keymap = require("../keymap")

const layer1 = [
  [[keys.num7], [keys.num8], [keys.num9], [keys.kp_plus]],
  [[keys.num4], [keys.num5], [keys.num6], [keys.kp_minus]],
  [[keys.num1], [keys.num2], [keys.num3], [keys.kp_asterisk]],
  [[keys.kp_dot], [keys.kp_0], [keys.kp_equal], [keys.kp_slash]],
]

const layers = [
  layer1,
  layer1,
]

module.exports = {
  board: roadkit,
  layout: roadkit.layouts.ortho,
  layers,
}
