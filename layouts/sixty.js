const keys = require("../helpers/keys")
const board = require("../keyboards/sixty")

const {
  alpha: { numrow, numrow_alts },
  blanks: { x4, x5, x7, x8, x10, x11, x12, x13, x14, x15, _3, _4, _6, _7, _8, _9 },
} = require("./groups")

const layers = {}

layers._QWERTY = [
  [tilde, ...numrow, minus, equal, backspace, backspace],
  [tab, q, w, e, r, t, y, u, i, o, p, lbracket, rbracket, backspace],
  [lt_esc, a, s, d, f, g, h, j, k, l, semicolon, quote, enter],
  [lshift, xxx, z, x, c, v, b, n, m, comma, dot, slash, minus, grave],
  [lctrl, lalt, lgui, space, space, space, raise, xxx, lower, rshift, enter],
]

layers._RAISE = [
  [___, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, ___, ___],
  [tilde, ...numrow, lbracket, rbracket, pipe],
  [___, f1, f2, f3, f4, f5, f6, ...x5, backslash],
  [lshift, xxx, f7, f8, f9, f10, f11, f12, ...x5, ___],
  [..._7, lshift, vold, volu, play],
]

layers._LOWER = [
  x15,
  [tilde, ...numrow_alts, lcurlybrace, rcurlybrace, pipe],
  [del, ..._7, xxx, xxx, lcurlybrace, rcurlybrace, pipe],
  [lshift, ...x12, ___],
  x11,
]

layers._ALT = [
  x15,
  [..._8, up, lcurlybrace, rcurlybrace, minus, equal, pipe],
  [..._7, left, down, right, xxx, xxx, grave],
  [..._4, caps, ..._8, backslash],
  [..._9, vold, volu],
]

layers._FN = [x15, x14, x13, x14, [...x10, reset]]

module.exports = {
  board,
  layers,
}
