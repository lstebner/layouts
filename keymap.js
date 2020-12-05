const keymap = (config) => {
  const { board, layers } = config
  let layout = config.layout
  let renderedLayers = "", renderedDefines = ""
  let customKeys = []
  let layerId = 0

  const TAB = "  "

  if (!layout) {
    layout = board.layouts.default

    if (!layout) return new Error("specified board in keymap has no layout!")
  }

  for (let layerIdx in layers) {
    let keys = []

    if (isNaN(parseInt(layerIdx))) {
      renderedDefines += `#define ${layerIdx} ${layerId}\n`
    }

    for (let row of layers[layerIdx]) {
      keys.push(row.map((k) => k && k.value).join(", "))
      customKeys.push(...row.filter((k) => k && k.defineAs))
    }

    renderedLayers += `\n${TAB}[${layerIdx}] = LAYOUT_${layout.method}(
      ${keys.join(`,\n${TAB}${TAB}`)}
    ),`

    layerId++
  }

  if (customKeys.length) {
    if (renderedDefines.length) {
      renderedDefines = `// define layers\n${renderedDefines}`
    }

    renderedDefines += "\n// define custom keys\n"

    for (let key of customKeys) {
      renderedDefines += `#define ${key.value} ${key.defineAs}\n`
    }
  }

  return `#include QMK_KEYBOARD_H

${renderedDefines}

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
  ${renderedLayers}
};
  `
}

module.exports = keymap
