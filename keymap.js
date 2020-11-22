const keymap = (config) => {
  const { layout, layers } = config
  let rendered = ""

  for (let idx in layers) {
    let keys = layers[idx]

    // this formatting looks weird, but needs to be like this
    rendered += `[${idx}] = LAYOUT_${layout.method}(
    ${keys.join(", ")}
),`
  }

  return `#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${rendered}
};
  `
}

module.exports = keymap
