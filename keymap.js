const keymap = (config) => {
  const { layout, layers } = config
  let renderedLayers = "", renderedDefines = ""
  let customKeys = []
  let layerId = 0

  for (let layerIdx in layers) {
    let keys = []

    if (isNaN(parseInt(layerIdx))) {
      renderedDefines += `#define ${layerIdx} ${layerId}\n`
    }

    for (let row of layers[layerIdx]) {
      keys.push(row.map((k) => k && k.value).join(", "))
      customKeys.push(...row.filter((k) => k && k.defineAs))
    }

    renderedLayers += `[${layerIdx}] = LAYOUT_${layout.method}(
      ${keys.join(",\n      ")}
    ),`

    layerId++
  }

  console.log("L>>>", customKeys)
  for (let key of customKeys) {
    renderedDefines += `#define ${key.value} ${key.defineAs}\n`
  }

  return `#include QMK_KEYBOARD_H

${renderedDefines}

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${renderedLayers}
};
  `
}

module.exports = keymap
