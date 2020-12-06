require("../../helpers/keys")

let blanks = {}
let amount = 17
let xKey, _Key

for (let i = 1; i <= amount; i++) {
  xKey = `x${i}`
  _Key = `_${i}`

  blanks[xKey] = []
  blanks[_Key] = []

  for (let k = 0; k < i; k++) {
    blanks[xKey].push(xxx)
    blanks[_Key].push(___)
  }
}

// the above loop generates exported variables for rows like such:
//
//  x1: [xxx],
//  x2: [xxx, xxx],
//  x3: [xxx, xxx, xxx],
//  _1: [___],
//  _2: [___, ___],
//  _3: [___, ___, ___],
//
//  they can be imported by name, and destructured for use mid-row,
//  or used as an entire row as is

module.exports = blanks
