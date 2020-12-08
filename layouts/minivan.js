const keys = require("../helpers/keys")
const minivan = require("../keyboards/minivan")

const {
  alpha: { numrow, numrow_alts },
  blanks: { x3, x4, x6, x9, x10, x12, _3, _4, _5, _6, _7, _8 },
} = require("./groups")

const layers = {}

layers._QWERTY = [
  [tab, q, w, e, r, t, y, u, i, o, p, backspace],
  [lt_esc, a, s, d, f, g, h, j, k, l, semicolon, quote],
  [lshift, z, x, c, v, b, n, m, comma, dot, slash, minus],
  [lctrl, lalt, fn, lgui, raise, space, lower, rshift, grave, enter],
]

layers._RAISE = [
  [tilde, ...numrow, backspace],
  [___, f1, f2, f3, f4, f5, f6, ...x4, backslash],
  [___, f7, f8, f9, f10, f11, f12, ...x4, ___],
  [..._5, lshift, next, vold, volu, play],
]

layers._LOWER = [
  [tilde, ...numrow_alts, backspace],
  [del, ..._6, xxx, xxx, lcurlybrace, rcurlybrace, pipe],
  [___, ...x10, ___],
  [..._4, ...x6],
]

layers._ALT = [
  [..._8, up, lcurlybrace, rcurlybrace, equal],
  [..._7, left, down, right, xxx, grave],
  [..._3, caps, ..._7, backslash],
  [..._8, vold, volu],
]

layers._FN = [x12, x12, x12, [...x9, reset]]

module.exports = {
  board: minivan,
  layers,
}
