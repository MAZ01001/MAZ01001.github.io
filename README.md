# MAZ01001.github.io

> my git [website](https://maz01001.github.io/ "https://MAZ01001.GitHub.io/") with random JS/CSS/HTML single-pages (can be used offline)
> made for pc/chrome browser

Linked pages, not in this repo:

- [Gif decoder/player](https://maz01001.github.io/GIF_decoder "Open website") → [MAZ01001/GIF_decoder](https://github.com/MAZ01001/GIF_decoder "Open GitHub repository")
- [DND Dice & Statistics](https://maz01001.github.io/dice_stats/ "Open website") → [MAZ01001/dice_stats](https://github.com/MAZ01001/dice_stats "Open GitHub repository")
- [Chance Calculator](https://maz01001.github.io/Math-Js/functionsjs_chanceAmount "Open website") → [MAZ01001/Math-Js/functionsjs_chanceAmount.html](https://github.com/MAZ01001/Math-Js#user-content-functionsjs-chanceamount "Open GitHub repository (and scroll to documentation)")
- [Mandelbrot](https://maz01001.github.io/AlmondBreadErkunder "Open website") → [MAZ01001/AlmondBreadErkunder](https://github.com/MAZ01001/AlmondBreadErkunder "Open GitHub repository")

----

- [Hangman](#hangman)
- [ASCII Snake](#ascii-snake)
- [Enigma](#enigma)
- [Calculator for arbitrary-length-integers](#calculator-for-arbitrary-length-integers)
- [Error Correction Codes](#error-correction-codes)
- [Unofficial Satisfactory U3 Flow Chart](#unofficial-satisfactory-u3-flow-chart)
- [Small Dice](#small-dice)
- [Ball Screensaver](#ball-screensaver)
  - [\[Ball Screensaver\] available URL parameters](#ball-screensaver-available-url-parameters)
- [Vector Field](#vector-field)
- [Math Function Drawer](#math-function-drawer)
- [3D-Card example](#3d-card-example)
- [Context menu example](#context-menu-example)
- [Touch example](#touch-example)
- [Pascal's Triangle](#pascals-triangle)
- [4 PI-Day 2021](#4-pi-day-2021)

----

## [Hangman](./site/hangman.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/hangman "open https://maz01001.github.io/site/hangman")

- __A simple word guessing game__
- _no graphics (no actual hangman)_
- guessing is case insensitive
- full Unicode support (_allows for special symbols and Emojis_)
- when clicking on "new round" when over 20 seconds of progress, it shows a confirm dialog (YES/NO)
- customization (_settings_)
  - custom alphabet
    - keys can be set to always show and not be on the "keyboard" (_useful for spaces and punctuation_)
  - custom word list
  - set maximum allowed fails (_or disable loosing with `-1`_)
  - set a percentage for how many letters of the word are uncovered at the start of the round (`0%` to `99%`)
  - clear stored settings and reload page (_shows a confirm dialog (YES/NO)_)
- current settings and progress is stored in browser local storage (_reload does not start a new round or reset settings_)
- export current settings and progress to a JSON file
- import settings and progress from saved JSON file
  - shows data preview of selected save file
    - _only shows time and fails of progress preview_
  - choose to override, ignore, or combine current alphabet / word list with the imported
  - choose to override or ignore imported rng-unhide / max-fails value
  - choose to continue with saved progress or start a new round
    - _can only be continues if alphabet, word list, and max fails are also imported_

Scroll [TOP](#maz01001githubio)

## [ASCII Snake](./site/snake.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/snake "open https://maz01001.github.io/site/snake")

- snake game in ascii style ([direct port from c++](https://github.com/MAZ01001/other-projects#snake_cmd-gamecpp "snake_cmd-game.cpp ducumentation in the other-projects/README.md"))
- right-click for more options

Scroll [TOP](#maz01001githubio)

## [Enigma](./site/enigma.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/enigma "open https://maz01001.github.io/site/enigma")

- almost like the real thing ft. loading screen
- create enigma for encoding
  - read from file
  - configure
    - give custom alphabet (Unicode supported)
    - set number of weels (signal only goes one way)
    - set number of plugs (auto maximum)
- import enigma for decoding
  - read from file
  - mirror encoding enigma
- set custom turning number
- auto "turn" on every character that is encoded, one after another

Scroll [TOP](#maz01001githubio)

## [Calculator for arbitrary-length-integers](./site/BigIntType_calc.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/BigIntType_calc "open https://maz01001.github.io/site/BigIntType_calc")

- Calculator for arbitrary-length-integers
- see [Math-js/BigIntType.js](https://github.com/MAZ01001/Math-Js#biginttypejs "BigIntType.js documentation in the Math-js/README.md") for a detailed description

Scroll [TOP](#maz01001githubio)

## [Error Correction Codes](./site/code_error_correction.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/code_error_correction "open https://maz01001.github.io/site/code_error_correction")

- made from a [3Blue1Brown video](https://youtu.be/X8jsijhllIA "How to send a self-correcting message (Hamming codes)")
  - also see [Ben Eater's video](https://youtu.be/h0jloehRKas "What is error correction? Hamming codes in hardware")
  - another very good page on [Harry Li's github](https://harryli0088.github.io/hamming-code/)
  - and of course in Minecraft by ["processAutomation" r/3Blue1Brown post](https://www.reddit.com/r/3Blue1Brown/comments/iochkl/)
- binary input
- set random bit flips (percentage per byte)
- shows results and the difference to the original per byte
- input/output text (Unicode supported)
- set byte size (if not auto, fill to length or remove if Unicode-char needs more bits)

Scroll [TOP](#maz01001githubio)

## [Unofficial Satisfactory U3 Flow Chart](./site/satisfactory_u3_flowchart.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/satisfactory_u3_flowchart "open https://maz01001.github.io/site/satisfactory_u3_flowchart")

- interactive flow chart for the 3rd Update of [SATISFACTORY](https://www.satisfactorygame.com/ "official game website")

> WIP interactive graph for 1.0 release: <https://github.com/MAZ01001/SatisfactoryFlowchart>

Scroll [TOP](#maz01001githubio)

## [Small Dice](./site/dice.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/dice "open https://maz01001.github.io/site/dice")

- dice for random numbers
- choose min/max number of eyes (0-9)
- left-click on dice for stats
- uses `Math.random()` for random numbers - colors button differently for each new number ('cause sometimes the same number is generated multiple times in a row)

Scroll [TOP](#maz01001githubio)

## [Ball Screensaver](./site/canvas_ball.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/canvas_ball "open https://maz01001.github.io/site/canvas_ball")

- a ball that moves diagonally across the screen and changes color
- using only javascript (visuals via HTML5 canvas)
- see below table for a lot of customizability via URL parameters

> [!NOTE]\
> If you can't see anything, your device might not support [OKLCH](https://oklch.com/ "OKLCH Color Picker & Conveter") colors.\
> To fix this, use the URL parameter `colorRGB` for RGB colors.

### [Ball Screensaver] available URL parameters

URL parameters can be in any order starting with `?` after the URL, then parameters in the format `PARAMETER=VALUE` (empty value: `PARAMETER` / `PARAMETER=`) with `&` between each parameter (_values must be encoded URI components_)

<details open><summary>Click to hide table</summary>

| parameter      | description                                                                                                                                             | default value                                           | possible values                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `bgColor`      | set the background color of the page (can be transparent) <br> or a rainbow color animation <br> with the speed in seconds or milliseconds as parameter | `#222` (dark grey) <br> (rainbow default speed is `6s`) | CSS color like `black` or `transparent` <br> or `rainbow` or `rainbow([+\|-]speed[s\|ms])` <br> (`speed` is a finite integer) |
| `bgRGB`        | if set, uses HSL instead of OKLCH color model for `bgColor`                                                                                             | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `keepCanvas`   | if set, doesn't clear the canvas every frame                                                                                                            | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `fps`          | shows frames per second in the top left corner                                                                                                          | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `seed`         | set the seed for RNG                                                                                                                                    | minute timestamp in hex                                 | anything (even empty)                                                                                                         |
| `ballSize`     | set the ball size (%) relative to the smaller window size                                                                                               | `0.2`                                                   | decimal number between `0` and `1` (inclusive)                                                                                |
| `ballSpeed`    | set the speed of the ball in pixels per second                                                                                                          | `240`                                                   | decimal number                                                                                                                |
| `hideOutline`  | if set, hides the black outline around ball/image                                                                                                       | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `colorSpeed`   | set the speed of the color shift in degrees per second                                                                                                  | `60`                                                    | decimal number                                                                                                                |
| `colorRGB`     | if set, uses HSL instead of OKLCH color model for the ball                                                                                              | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `img`          | put an image over the ball <br> (if the image doesn't replace the ball, it gets cut to fit)                                                             | none                                                    | HTML image source (URL)                                                                                                       |
| `imgPixelArt`  | if set, enables better scaling filter for pixel art                                                                                                     | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `imgOverlay`   | if set, overlays the `img` instead of replacing the ball                                                                                                | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `txt`          | (single line) text to put over the ball/image                                                                                                           | none                                                    | single line text                                                                                                              |
| `txtHeight`    | set the `txt` size (height) relative to the size of the ball <br> with no ball/image it is relative to the smaller window size                          | `0.4`                                                   | positive decimal number                                                                                                       |
| `txtFill`      | `txt` fill color (CSS color, canvas gradient/pattern)                                                                                                   | `#0F0` (green)                                          | CSS color / canvas gradient or pattern                                                                                        |
| `txtLine`      | `txt` outline color (CSS color, canvas gradient/pattern)                                                                                                | `#000` (black)                                          | CSS color / canvas gradient or pattern                                                                                        |
| `txtLineWidth` | set the width of `txt` outline relative to `txtHeight`                                                                                                  | `1`                                                     | positive decimal number                                                                                                       |
| `txtFont`      | set the font of the `txt` (CSS font family)                                                                                                             | `"Times New Roman", Times, serif`                       | CSS font-family, like `sans-serif`                                                                                            |
| `txtWeight`    | set the boldness of the `txt`                                                                                                                           | `normal`                                                | CSS font-weight, like `bold` or `1` to `1000` (inclusive)                                                                     |
| `txtSmallCaps` | if set, uses small-caps for the `txt` <br> (scaled down uppercase for lowercase letters)                                                                | NO                                                      | empty or `1` for YES and `0` or else for NO                                                                                   |
| `txtStyle`     | set the font style of the `txt` (italic/oblique)                                                                                                        | `normal`                                                | CSS font-style, like `italic` or `oblique`                                                                                    |
| `txtStretch`   | set the horizontal stretch of the `txt`                                                                                                                 | `normal`                                                | CSS font-stretch, but only keywords and not percentages                                                                       |

</details>

Scroll [UP](#ball-screensaver) | [TOP](#maz01001githubio)

## [Vector Field](./site/vector_field.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/vector_field "open https://maz01001.github.io/site/vector_field")

- vector objects
- default points to mouse
- use console
  - set variables
  - set custom function for render each vector
- use buttons
  - scroll to make arrows larger
  - left-click/hold to hide cross with coordinates
- shows fps counter
- made with [P5.js](https://p5js.org/ "official P5.js website")

Scroll [TOP](#maz01001githubio)

## [Math Function Drawer](./site/math_function_drawer.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/math_function_drawer "open https://maz01001.github.io/site/math_function_drawer")

- use sliders(show sliders button on the right) to set the coefficients
- scroll or use sliders(top & left) to set scale (zoom)
- render own polynomial (check the checkbox top-left and enter your coefficients)
- shows fps counter

Scroll [TOP](#maz01001githubio)

## [3D-Card example](./site/3d-card_example.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/3d-card_example "open https://maz01001.github.io/site/3d-card_example")

- example of a 3d-card effect with HTML/JS/CSS

Scroll [TOP](#maz01001githubio)

## [Context menu example](./site/context_menu_example.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/context_menu_example "open https://maz01001.github.io/site/context_menu_example")

- example of a custom context menu using HTML/JS/CSS

Scroll [TOP](#maz01001githubio)

## [Touch example](./site/touch_example.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/touch_example "open https://maz01001.github.io/site/touch_example")

- example for detecting touch (not the best detection)

Scroll [TOP](#maz01001githubio)

## [Pascal's Triangle](./site/pascals_triangle.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/pascals_triangle "open https://maz01001.github.io/site/pascals_triangle")

- choose the number of rows to generate

Scroll [TOP](#maz01001githubio)

## [4 PI-Day 2021](./site/pi-day_2021.html "view the source code")

> [view the live webpage](https://maz01001.github.io/site/pi-day_2021 "open https://maz01001.github.io/site/pi-day_2021")

- made from a [Coding Train coding-challenge video](https://youtu.be/EvS_a921dBo "Coding Challenge 161: Estimating π from Random Numbers with Euclid's Algorithm")
- estimates PI with the [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor "Wikipedia: Greatest common divisor") of 100000 numbers
- left-click to pause

Scroll [TOP](#maz01001githubio)
