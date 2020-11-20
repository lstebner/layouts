# layouts

Creating layouts for custom built keyboards is fun, but can be tedious after awhile. It's also not that easy to remember all the various key sizes each layout requires. This is a collection of stuff™ that I have built to help me solve these problems.

## status

very early work in progress.

## keyboards

All features require knowledge about each keyboard layout. This information is stored in `keyboards.js`. The required information about each board will probably grow over time, but currently is divided into two categories: `metadata`, and `layout`.

### adding a new keyboard

To add data about a new keyboard, it is simplest to copy an existing one, and then update all of the data values. Once you've done this, all features will work for the new board.

### known keyboards list

Currently known keyboards as of 2020/11/19. see `keyboards.js` for most up to date list, this is a manually maintained list. When running a command, use these values for the `keyboard` arg.

- `candybar_southpaw`: 40% keyboard with a macropad on the left
- `minivan`: compact 40% board
- `planck`: compact ortho board
- `preonic`: 50% ortho board
- `prime_e`: very unique 40ish% board
- `sixty`: dz60/satan60 compatible layout for standard 60% boards

The above list can be generated using `yarn boardlist --describe`

## features

### ascii layouts

Use the `k` arg to generate a simple ascii layout of a keyboard.

`yarn layout -k keyboardname`

Use a comma-separated list to see more than one layout at a time.

`yarn layout -k keyboardone,keyboardtwo,keyboardthree`

#### all layouts

Omit the `k` arg to see all layouts.

```
 ________________________
/ Candybar Southpaw 50%  \
•---•---•---•---•---•---•---•---•---•---•---•---•---•---•---•-------•
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |       |
•---•---•---•---•---•---•---•---•---•---•---•---•---•---•---•-------•
|   |   |   |   |    |   |   |   |   |   |   |   |   |   |   |      |
•---•---•---•---•----•---•---•---•---•---•---•---•---•---•---•------•
|   |   |   |   |      |   |   |   |   |   |   |   |   |   |   |    |
•---•---•---•---•------•---•---•---•---•---•---•---•---•---•---•----•
|   |   |   |   |    |    |    |          |        |    |   |   |   |
•---•---•---•---•----•----•----•----------•--------•----•---•---•---•
```

```
 ______________
/ Minivan 40%  \
•---•---•---•---•---•---•---•---•---•---•---•------•
|   |   |   |   |   |   |   |   |   |   |   |      |
•---•---•---•---•---•---•---•---•---•---•---•------•
|    |   |   |   |   |   |   |   |   |   |   |     |
•----•---•---•---•---•---•---•---•---•---•---•-----•
|      |   |   |   |   |   |   |   |   |   |   |   |
•------•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |        |       |     |   |   |   |
•---•---•---•---•--------•-------•-----•---•---•---•
```

```
 _____________
/ Planck 40%  \
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
```

```
 ______________
/ Preonic 50%  \
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
|   |   |   |   |   |   |   |   |   |   |   |   |
•---•---•---•---•---•---•---•---•---•---•---•---•
```

```
 ______________
/ Prime-E 40%  \
•---•---•---•---•---•---•     •---•---•---•---•---•---•---•
|   |   |   |   |   |   |     |   |   |   |   |   |   |   |
•---•---•---•---•---•---•     •---•---•---•---•---•---•---•
|    |   |   |   |   |   |     |   |   |   |   |   |      |
•----•---•---•---•---•---•     •---•---•---•---•---•------•
|      |   |   |   |   |   | |   |   |   |   |   |   |    |
•------•---•---•---•---•---• •---•---•---•---•---•---•----•
|    |    |    |    |       |        |    |     |    |    |
•----•----•    •----•-------•--------•----•     •----•----•
```

```
 ____________________
/ Generic Sixty 60%  \
•---•---•---•---•---•---•---•---•---•---•---•---•---•-------•
|   |   |   |   |   |   |   |   |   |   |   |   |   |       |
•---•---•---•---•---•---•---•---•---•---•---•---•---•-------•
|     |   |   |   |   |   |   |   |   |   |   |   |   |     |
•-----•---•---•---•---•---•---•---•---•---•---•---•---•-----•
|      |   |   |   |   |   |   |   |   |   |   |   |        |
•------•---•---•---•---•---•---•---•---•---•---•---•--------•
|        |   |   |   |   |   |   |   |   |   |   |          |
•--------•---•---•---•---•---•---•---•---•---•---•----------•
|    |    |    |                        |    |    |    |    |
•----•----•----•------------------------•----•----•----•----•
```
