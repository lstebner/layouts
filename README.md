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

The above list can be generated using `yarn boardlist --describe`

## features

### ascii layouts

Use the `layout` command to generate a simple ascii layout of a keyboard. Replace "<keyboard>" with the name of one of the known keyboards.

`yarn layout <keyboard>`

Use a comma-separated list to see more than one layout at a time.

`yarn layout keyboardone,keyboardtwo,keyboardthree`

Pass "all" as the keyboard to see all layouts.

`yarn layout all`
