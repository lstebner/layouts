const keys = require("../helpers/keys")

const {
  alpha: { numrow, numrow_alts },
  blanks: { x4, x5, x7, x8, x11, x12, x13, _3, _4, _6, _7, _8 },
} = require("./groups")

const layers = {}

layers._QWERTY = [
  [tab, q, w, e, r, t, y, u, i, o, p, backspace, backspace],
  [lt_esc, a, s, d, f, g, h, j, k, l, semicolon, quote],
  [lshift, z, x, c, v, b, grave, n, m, comma, dot, slash, minus],
  [lctrl, lalt, lgui, raise, space, lower, rshift, enter],
]

layers._RAISE = [
  [tilde, ...numrow, lbracket, rbracket],
  [___, f1, f2, f3, f4, f5, f6, ...x4, backslash],
  [lshift, f7, f8, f9, f10, f11, f12, ...x5, ___],
  [..._4, lshift, vold, volu, play],
]

layers._LOWER = [
  [tilde, ...numrow_alts, lcurlybrace, rcurlybrace],
  [del, ..._6, xxx, xxx, lcurlybrace, rcurlybrace, pipe],
  [lshift, ...x11, ___],
  x8,
]

layers._ALT = [
  [..._8, up, lcurlybrace, rcurlybrace, minus, equal],
  [..._7, left, down, right, xxx, grave],
  [..._3, caps, ..._8, backslash],
  [..._6, vold, volu],
]

layers._FN = [x13, x12, x13, [...x7, reset]]

module.exports = {
  board: require("../keyboards/prime_e"),
  layers,
}
