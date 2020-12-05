const keys = require("../helpers/keys")
const minivan = require("../keyboards/minivan")

const layers = {}

layers._QWERTY = [
  [tab, q, w, e, r, t, y, u, i, o, p, backspace],
  [lt_esc, a, s, d, f, g, h, j, k, l, semicolon, quote],
  [lshift, z, x, c, v, b, n, m, comma, dot, slash, minus],
  [lctrl, lalt, fn, lgui, raise, space, lower, rshift, grave, enter],
]

layers._RAISE = [
  [tilde, num1, num2, num3, num4, num5, num6, num7, num8, num9, num0, backspace],
  [___, f1, f2, f3, f4, f5, f6, xxx, xxx, xxx, xxx, backslash],
  [___, f7, f8, f9, f10, f11, f12, xxx, xxx, xxx, xxx, ___],
  [___, ___, ___, ___, ___, lshift, next, vold, volu, play],
]

layers._LOWER = [
  [tilde, exclamation, at, hash, dollar, percent, caret, ampersand, asterisk, lparen, rparen, backspace],
  [del, ___, ___, ___, ___, ___, ___, xxx, xxx, lcurlybrace, rcurlybrace, pipe],
  [___, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, ___],
  [___, ___, ___, ___, xxx, xxx, xxx, xxx, xxx, xxx],
]

layers._ALT = [
  [___, ___, ___, ___, ___, ___, ___, ___, up, lcurlybrace, rcurlybrace, equal],
  [___, ___, ___, ___, ___, ___, ___, left, down, right, xxx, grave],
  [___, ___, ___, caps, ___, ___, ___, ___, ___, ___, ___, backslash],
  [___, ___, ___, ___, ___, ___, ___, ___, vold, volu],
]

layers._FN = [
  [xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx],
  [xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx],
  [xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx],
  [xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, reset],
]

module.exports = {
  board: minivan,
  layers,
}
