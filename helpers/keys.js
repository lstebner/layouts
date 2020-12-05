const keysConfig = {
  "0": { value: "KC_0", alias: ["num0"]},
  "1": { value: "KC_1", alias: ["num1"]},
  "2": { value: "KC_2", alias: ["num2"]},
  "3": { value: "KC_3", alias: ["num3"]},
  "4": { value: "KC_4", alias: ["num4"]},
  "5": { value: "KC_5", alias: ["num5"]},
  "6": { value: "KC_6", alias: ["num6"]},
  "7": { value: "KC_7", alias: ["num7"]},
  "8": { value: "KC_8", alias: ["num8"]},
  "9": { value: "KC_9", alias: ["num9"]},
  "___": "_______",
  a: "KC_A",
  ampersand: "KC_AMPR",
  asterisk: "KC_ASTR",
  at: "KC_AT",
  b: "KC_B",
  backslash: "KC_BSLS",
  backspace: "KC_BSPC",
  c: "KC_C",
  caps: "KC_CAPS",
  caret: "KC_CIRC",
  comma: "KC_COMM",
  d: "KC_D",
  del: "KC_DEL",
  dollar: "KC_DLR",
  dot: "KC_DOT",
  down: "KC_DOWN",  
  e: "KC_E",
  enter: "KC_ENT",
  equal: "KC_EQL",
  esc: "KC_ESC",
  exclamation: "KC_EXLM",
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
  lbracket: "KC_LBRC",
  lctrl: "KC_LCTL",
  lcurlybrace: "KC_LCBR",
  left: "KC_LEFT", 
  lgui: "KC_LGUI",
  lower: { value: "LOWER", defineAs: "MO(_LOWER)" },
  lparen: "KC_LPRN",
  lshift: "KC_LSFT",
  lt_esc: { value: "LT_ESC", defineAs: "LT(_ALT, KC_ESC)" },
  m: "KC_M",
  minus: "KC_MINUS",
  n: "KC_N",
  next: "KC_MNXT", 
  o: "KC_O",
  p: "KC_P",
  percent: "KC_PERC",
  pipe: "KC_PIPE",
  play: "KC_MPLY",
  q: "KC_Q",
  quote: "KC_QUOT",
  r: "KC_R",
  raise: { value: "RAISE", defineAs: "MO(_RAISE)" },
  rbracket: "KC_RBRC",
  rcurlybrace: "KC_RCBR",
  reset: "RESET",
  right: "KC_RIGHT",
  rparen: "KC_RPRN",
  rshift: "KC_RSFT",
  s: "KC_S",
  semicolon: "KC_SCLN",
  slash: "KC_SLSH",
  space: "KC_SPC",
  t: "KC_T",
  tab: "KC_TAB",
  tilde: "KC_TILD", 
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
    if (!Array.isArray(keysConfig[id].alias)) return console.log(`error processing alias for key "${keysConfig[id]}". the 'alias' property should be an array`)

    keysConfig[id].alias.forEach((alias) => {
      if (keys[alias]) return console.error(`tried to create key alias ${alias} but there is already a key defined with this name`)
      keys[alias] = keysConfig[id]

      global[alias] = keysConfig[id]
    })
  } 
}

module.exports = keys
