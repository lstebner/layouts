/*
 * keysConfig contains a mapping of key names that this app understands, to the
 * key names that QMK understands. because I (lstebner, author of this codebase)
 * like verbose naming, the default names are the ones that i prefer. however,
 * everything is alias'd to a name that is the same as the QMK one in case that
 * is your preference, or you like to have short names for everything.
 *
 * in general, if QMK's var is "KC_some_key" the var in here is just "some_key"
 * when you requie this file in a layout configuration, all of the keys, and
 * their aliases, become available in global scope for easy reference.
 *
 * this file is sort of like the master list of keys, and shouldn't really be
 * edited. though it may be missing some keys and need appended until complete.
 */

const keysConfig = {
  0: { value: "KC_0", alias: ["num0"] },
  1: { value: "KC_1", alias: ["num1"] },
  2: { value: "KC_2", alias: ["num2"] },
  3: { value: "KC_3", alias: ["num3"] },
  4: { value: "KC_4", alias: ["num4"] },
  5: { value: "KC_5", alias: ["num5"] },
  6: { value: "KC_6", alias: ["num6"] },
  7: { value: "KC_7", alias: ["num7"] },
  8: { value: "KC_8", alias: ["num8"] },
  9: { value: "KC_9", alias: ["num9"] },
  ___: "_______",
  a: "KC_A",
  ampersand: { value: "KC_AMPR", alias: ["ampr"] },
  asterisk: { value: "KC_ASTR", alias: ["astr"] },
  at: "KC_AT",
  b: "KC_B",
  backslash: { value: "KC_BSLS", alias: ["bsls"] },
  backspace: { value: "KC_BSPC", alias: ["bspc"] },
  c: "KC_C",
  caps: "KC_CAPS",
  caret: { value: "KC_CIRC", alias: ["circ"] },
  comma: { value: "KC_COMM", alias: ["comm"] },
  d: "KC_D",
  del: "KC_DEL",
  dollar: { value: "KC_DLR", alias: ["dlr"] },
  dot: "KC_DOT",
  down: "KC_DOWN",
  e: "KC_E",
  enter: { value: "KC_ENT", alias: ["ent"] },
  equal: { value: "KC_EQL", alias: ["eql"] },
  esc: "KC_ESC",
  exclamation: { value: "KC_EXLM", alias: ["exlm"] },
  f10: "KC_F10",
  f11: "KC_F11",
  f12: "KC_F12",
  f1: "KC_F1",
  f2: "KC_F2",
  f3: "KC_F3",
  f4: "KC_F4",
  f5: "KC_F5",
  f6: "KC_F6",
  f7: "KC_F7",
  f8: "KC_F8",
  f9: "KC_F9",
  f: "KC_F",
  fn: { value: "FN", defineAs: "MO(_FN)" },
  g: "KC_G",
  grave: "KC_GRAVE",
  h: "KC_H",
  hash: "KC_HASH",
  i: "KC_I",
  insert: { value: "KC_INS", alias: ["ins"] },
  j: "KC_J",
  k: "KC_K",
  kp_0: "KC_KP_0",
  kp_1: "KC_KP_1",
  kp_2: "KC_KP_2",
  kp_3: "KC_KP_3",
  kp_4: "KC_KP_4",
  kp_5: "KC_KP_5",
  kp_6: "KC_KP_6",
  kp_7: "KC_KP_7",
  kp_8: "KC_KP_8",
  kp_9: "KC_KP_9",
  kp_asterisk: "KC_KP_ASTERISK",
  kp_comma: "KC_KP_COMMA",
  kp_dot: "KC_KP_DOT",
  kp_enter: "KC_KP_ENTER",
  kp_equal: "KC_KP_EQUAL",
  kp_minus: "KC_KP_MINUS",
  kp_plus: "KC_KP_PLUS",
  kp_slash: "KC_KP_SLASH",
  l: "KC_L",
  lalt: "KC_LALT",
  lbracket: { value: "KC_LBRC", alias: ["lbrc"] },
  lctrl: { value: "KC_LCTL", alias: ["lctl"] },
  lcurlybrace: { value: "KC_LCBR", alias: ["lcbr"] },
  left: "KC_LEFT",
  lgui: "KC_LGUI",
  lower: { value: "LOWER", defineAs: "MO(_LOWER)" },
  lparen: { value: "KC_LPRN", alias: ["lprn"] },
  lshift: { value: "KC_LSFT", alias: ["lsft"] },
  lt_esc: { value: "LT_ESC", defineAs: "LT(_ALT, KC_ESC)" },
  m: "KC_M",
  minus: "KC_MINUS",
  n: "KC_N",
  mnext: { value: "KC_MNXT", alias: ["mnxt", "next"] },
  o: "KC_O",
  p: "KC_P",
  percent: { value: "KC_PERC", alias: ["perc"] },
  pipe: "KC_PIPE",
  mplay: { value: "KC_MPLY", alias: ["mply", "play"] },
  q: "KC_Q",
  quote: { value: "KC_QUOT", alias: ["quot"] },
  r: "KC_R",
  raise: { value: "RAISE", defineAs: "MO(_RAISE)" },
  rbracket: { value: "KC_RBRC", alias: ["rbrc"] },
  rcurlybrace: { value: "KC_RCBR", alias: ["rcbr"] },
  reset: "RESET",
  right: "KC_RIGHT",
  rparen: { value: "KC_RPRN", alias: ["rprn"] },
  rshift: { value: "KC_RSFT", alias: ["rsft"] },
  s: "KC_S",
  semicolon: { value: "KC_SCLN", alias: ["scln"] },
  slash: { value: "KC_SLSH", alias: ["slsh"] },
  space: { value: "KC_SPC", alias: ["spc"] },
  t: "KC_T",
  tab: "KC_TAB",
  tilde: { value: "KC_TILD", alias: ["tild"] },
  u: "KC_U",
  up: "KC_UP",
  v: "KC_V",
  vold: "KC_VOLD",
  volu: "KC_VOLU",
  w: "KC_W",
  x: "KC_X",
  xxx: "XXXXXXX",
  y: "KC_Y",
  z: "KC_Z",
}

let keys = {}

// loop over the above config to set up consistent schema for each key and also
// expose them to global namespace for convenience
for (let id in keysConfig) {
  if (typeof keysConfig[id] === "string") {
    keys[id] = { value: keysConfig[id] }
  } else {
    keys[id] = keysConfig[id]
  }

  global[id] = keys[id]

  if (keysConfig[id].alias) {
    if (!Array.isArray(keysConfig[id].alias)) {
      console.log(
        `error processing alias for key "${keysConfig[id]}". the 'alias' property should be an array`
      )
      break
    }

    keysConfig[id].alias.forEach((alias) => {
      if (keys[alias])
        return console.error(
          `tried to create key alias ${alias} but there is already a key defined with this name`
        )
      keys[alias] = keysConfig[id]

      global[alias] = keysConfig[id]
    })
  }
}

module.exports = keys
