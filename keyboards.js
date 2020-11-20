const CANDYBAR_SOUTHPAW = "candybar_southpaw"
const MINIVAN = "minivan"
const PLANCK = "planck"
const PREONIC = "preonic"
const PRIME_E = "prime_e"
const SIXTY = "sixty"

const _100 = "s100"
const _125 = "s125"
const _25 = "s25"
const _75 = "s75"

const LAYOUTS = {
  [CANDYBAR_SOUTHPAW]: CANDYBAR_SOUTHPAW,
  [MINIVAN]: MINIVAN,
  [PLANCK]: PLANCK,
  [PREONIC]: PREONIC,
  [PRIME_E]: PRIME_E,
  [SIXTY]: SIXTY,
}

const minivan = {
  metadata: {
    name: "Minivan",
    size: 40,
    maker: "thevankeyboards",
    description: "compact 40% board",
  },
  layout: [
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 175],
    [125, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 150],
    [175, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 225, 200, 150, 100, 100, 100],
  ]
}

const planck = {
  metadata: {
    name: "Planck",
    size: 40,
    maker: "olkb",
    description: "compact ortho board",
  },
  layout: [
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  ]
}

const preonic = {
  metadata: {
    name: "Preonic",
    size: 50,
    maker: "olkb",
    description: "50% ortho board",
  },
  layout: [
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
  ]
}

const sixty = {
  metadata: {
    name: "Generic Sixty",
    size: 60,
    maker: "",
    description: "dz60/satan60 compatible layout for standard 60% boards",
  },
  layout: [
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 200],
    [150, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 150],
    [175, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 225],
    [225, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 275],
    [125, 125, 125, 625, 125, 125, 125, 125],
  ]
}

const prime_e = {
  metadata: {
    name: "Prime-E",
    size: 40,
    maker: "",
    description: "very unique 40ish% board",
  },
  layout: [
    [100, 100, 100, 100, 100, 100, _100, 100, 100, 100, 100, 100, 100, 100],
    [125, 100, 100, 100, 100, 100, _100, 100, 100, 100, 100, 100, 175],
    [175, 100, 100, 100, 100, 100, _25, 100, 100, 100, 100, 100, 100, 125],
    [125, 125, _75, 125, 200, 225, 125, _100, 125, 125],
  ]
}

const candybar_southpaw = {
  metadata: {
    name: "Candybar Southpaw",
    size: 50,
    maker: "",
    description: "40% keyboard with a macropad on the left",
  },
  layout: [
    [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 200],
    [100, 100, 100, 100, 125, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 175],
    [100, 100, 100, 100, 175, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 125],
    [100, 100, 100, 100, 125, 125, 125, 275, 225, 125, 100, 100, 100],
  ]
}

module.exports = {
  layouts: LAYOUTS,
  keyboards: {
    [CANDYBAR_SOUTHPAW]: candybar_southpaw,
    [MINIVAN]: minivan,
    [PLANCK]: planck,
    [PREONIC]: preonic,
    [PRIME_E]: prime_e,
    [SIXTY]: sixty,
  }
}
