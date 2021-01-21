const keys = require("../helpers/keys")
const candybar = require("../keyboards/candybar")

const {
  alpha: { qwer, asdf, zxcv, numrow },
  blanks: { x4, x6, x7, x10, x11, x12, x16, x17 },
} = require("./groups")

const layers = {}

layers._QWERTY = [
  [num7, num8, num9, kp_minus, tab, q, w, e, r, t, y, u, i, o, p, backspace, backspace],
  [num4, num5, num6, kp_plus, lt_esc, a, s, d, f, g, h, j, k, l, semicolon, quote],
  [num1, num2, num3, grave, lshift, z, x, c, v, b, n, m, comma, dot, slash, minus],
  [fn, num0, kp_dot, backslash, lctrl, lalt, lgui, raise, space, space, rshift, lbracket, rbracket, enter],
]

layers._RAISE = [
  [f7, f8, f9, kp_asterisk, grave, ...numrow, insert, backspace],
  [f4, f5, f6, slash, ...x11, grave],
  [f1, f2, f3, grave, ___, ...x10, backslash],
  [f10, f11, f12, backslash, xxx, xxx, ___, xxx, xxx, rshift, xxx, lcurlybrace, rcurlybrace, enter],
]

layers._ALT = [
  [...x12, up, xxx, xxx, insert, equal],
  [...x11, left, down, right, xxx, grave],
  [...x4, lshift, ...x10, minus],
  [...x6, lgui, space, space, space, xxx, lcurlybrace, rcurlybrace, enter],
]

layers._FN = [x17, x16, x16, [...x7, reset, reset, reset, ...x4]]

module.exports = {
  board: candybar,
  layout: candybar.layouts.lefty,
  layers,
}
