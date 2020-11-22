const { _100, _25, _75 } = require("../helpers/spacers")

const prime_e = {
  metadata: {
    name: "Prime-E",
    size: 40,
    maker: "",
    description: "very unique 40ish% board",
  },
  layouts: {
    default: {
      method: "",
      rows: [
        [100, 100, 100, 100, 100, 100, _100, 100, 100, 100, 100, 100, 100, 100],
        [125, 100, 100, 100, 100, 100, _100, 100, 100, 100, 100, 100, 175],
        [175, 100, 100, 100, 100, 100, _25, 100, 100, 100, 100, 100, 100, 125],
        [125, 125, _75, 125, 200, 225, 125, _100, 125, 125],
      ]
    },
  },
}

module.exports = prime_e
