const keymap = (config) => {
  const { layout, layers } = config
  let rendered = ""

  for (let layerIdx in layers) {
    let keys = []
    for (let row of layers[layerIdx]) {
      keys.push(row.map((k) => k.value).join(", "))
    }

    rendered += `[${layerIdx}] = LAYOUT_${layout.method}(
      ${keys.join(",\n      ")}
    ),`
  }

  return `#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${rendered}
};
  `
}

module.exports = keymap
