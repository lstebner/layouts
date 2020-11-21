const layout_method = "ortho_4x4"

const roadkit = {
  metadata: {
    name: "Roadkit",
    size: 10,
    maker: "thevankeyboards",
    description: "16 key macropad",
    layout_method,
  },
  layout: [
    [100, 100, 100, 100],
    [100, 100, 100, 100],
    [100, 100, 100, 100],
    [100, 100, 100, 100],
  ],
  keymap(layout) {
    let layers = ""

    for (let idx in layout.layers) {
      let keys = layout.layers[idx]

      // this formatting looks weird, but needs to be like this
      layers += `[${idx}] = LAYOUT_${layout_method}(
      ${keys.join(", ")}
  ),`
    }

    return `#include QMK_KEYBOARD_H

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${layers}
};
  `
  }
}

module.exports = roadkit
