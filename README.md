# layouts

Creating layouts for custom built keyboards is fun, but can be tedious after awhile. It's also not that easy to remember all the various key sizes each layout requires. This is a collection of stuff™ that I have built to help me solve these problems.

## status

very early work in progress.

## directory structure

*this is what I will work towards, not where things are at today necessarily :).

- `/`
  - `keyboards/`: contains a definition file for each supported keyboard
  - `layouts/`: contains a definition file for each layout (can be multiple per keyboard)
  - `src/`: contains source code used to do all the things this bundle of code does
  - `build/`: contains files built by the source codes. can be removed and regenerated at any time, not under source control
  - `index.js`: entry point file for the application
  - `cli.js`: code for interpreting command line interactions and kicking the tires
  - `README`: you already know, cause you're here right now
  - `package.json`: scripts and dependencies, the usual

## keyboards

All features require knowledge about each keyboard layout. This information is stored in `keyboards.js` and the `keyboards/` directory. The required information about each board will probably grow over time, but currently is divided into two categories: `metadata`, and `layout`.

Each keyboard should have a single definition file inside `keyboards/`. The structure of this file is in flux, but will eventually be documented here.

### adding a new keyboard

To add data about a new keyboard, it is simplest to copy an existing one, and then update all of the data values. There is also a mapping in `keyboards.js` that you should add to. Once you've done this, all features will work for the new board.

### known keyboards list

Currently known keyboards as of 2020/11/19. see `keyboards.js` for most up to date list, this is a manually maintained list. When running a command, use these values for the `keyboard` arg.

- `candybar_southpaw`: 40% keyboard with a macropad on the left
- `minivan`: compact 40% board
- `planck`: compact ortho board
- `preonic`: 50% ortho board
- `prime_e`: very unique 40ish% board
- `roadkit`: 16 key macropad
- `sixty`: dz60/satan60 compatible layout for standard 60% boards

The above list can be generated using `yarn boardlist`

## features

### ascii layouts

Use the `layout` command to generate a simple ascii layout of a keyboard. Replace "<keyboard>" with the name of one of the known keyboards.

`yarn layout <keyboard>`

Use a comma-separated list to see more than one layout at a time.

`yarn layout keyboardone,keyboardtwo,keyboardthree`

Pass "all" as the keyboard to see all layouts.

`yarn layout all`

### QMK keymap file

To generate a QMK compatible keymap use the `keymap` command. Similiar to other commands, you must tell this which layout you want to generate a keymap for, and then it will do the work.

The keymap contents will simply be output in the terminal at the moment, but an option to save to file will be added eventually.

#### layouts

Available layouts are defined in the 'layouts/' directory. Each file in here must be valid javascript, and must ultimately export a configuration in the form of:

```javascript
module.exports = {
  board,
  layout,
  layers,
}
```

- `board`: This must be a *keyboard* object. `require` the keyboard this layout is for from the `keyboards/` dir, and use that as the value here.
- `layout`: If the board offers more than just a default layout, specify which one to use for this layout here. 
- `layers`: The configuration of all the keys for the keymap. See below for more info on how to create this.

##### layers

`layers` are the actual keyboard layout. This can be specified as either an object, or an array, depending on if you want to name the layers or not. You only need to specify an empty object in order to be able to generate a valid keymap, but you can have as many layers as you want; there is no limitations built into this codebase, but your keyboard will have its own limitations.

Each layer must specify *rows* of *keys*. Keys are defined into global namespace for convenience, but still need to be required. Each row must be an array of string values for the keys in that row. You could use static strings if you wanted to, or create local variables to your layer for custom keys, but it is recommended to use the globals for the added benefit of automatic error handling for misspelled, or missing keys.

example row for a numpad:

```javascript
[num7, num8, num9, kp_plus]
```

example layer for a numpad:

```javascript
const layer0 = [
  [num7, num8, num9, kp_minus],
  [num4, num5, num6, kp_plus],
  [num1, num2, num3, kp_equal],
  [kp_0, ___, kp_dot, kp_equal],
]
```

example of layers as array:

```
layers: [layer0]
```

example of named layers:

```
layers: {
  _DEFAULT: layer0,
}
```

for examples of it all coming together check out the `layouts/` directory.
