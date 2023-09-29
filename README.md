# MAZ01001.github.io

>
> my git [website](https://maz01001.github.io/ "https://MAZ01001.GitHub.io/") with random HTML/JS/CSS single-pages (can be used offline)
> made for pc/chrome browser
>

- [Unofficial Satisfactory U3 Flow Chart](#unofficial-satisfactory-u3-flow-chart)
- [Ball Screensaver](#ball-screensaver)
  - [[Ball Screensaver] available URL parameters](#ball-screensaver-available-url-parameters)
- [Small Dice](#small-dice)
- [Pascal's Triangle](#pascals-triangle)
- [Math Function Drawer](#math-function-drawer)
- [Error Correction Codes](#error-correction-codes)
- [Enigma](#enigma)
- [Vector Field](#vector-field)
- [ASCII Snake](#ascii-snake)
- [Calculator for arbitrary-length-integers](#calculator-for-arbitrary-length-integers)
- [Hangman](#hangman)
- [_hidden_](#hidden)
  - [Context menu example](#context-menu-example)
  - [4 PI-Day 2021](#4-pi-day-2021)
  - [Touch example](#touch-example)
  - [3D-Card example](#3d-card-example)

----

## [Unofficial Satisfactory U3 Flow Chart](./site/satisfactory_u3_flowchart.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/satisfactory_u3_flowchart "open https://maz01001.github.io/site/satisfactory_u3_flowchart")
>

- interactive flow chart for the 3rd Update of [SATISFACTORY](https://www.satisfactorygame.com/ "official game website")

## [Ball Screensaver](./site/canvas_ball.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/canvas_ball "open https://maz01001.github.io/site/canvas_ball")
>

- a ball that moves diagonally across the screen and changes color
- using only javascript (HTML5 canvas)

### [Ball Screensaver] available URL parameters

URL parameters can be in any order (_starting with `?` after the URL then parameters in format `PARAMETER=VALUE` with `&` between each parameter_)

<details open><summary>click to hide table</summary>

| parameter         | description                                               | default value           | possible values                                              |
| ----------------- | --------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| `transparent`     | make the background of the website transparent            | `0`                     | `0` or `1`                                                   |
| `fpsView`         | show fps                                                  | `1`                     | `0` or `1`                                                   |
| `clearCanvas`     | clears the canvas every frame                             | `1`                     | `0` or `1`                                                   |
| `ballOutline`     | give the ball/image drawn a black outline                 | `1`                     | `0` or `1`                                                   |
| `seed`            | set the seed for RNG                                      | minute timestamp in hex | anything                                                     |
| `ballSize`        | set the ball size (%) relative to the smaller window size | `0.2`                   | `0` to `1`                                                   |
| `ballSpeed`       | set the speed of the ball in pixels per second            | `240`                   | positive decimal number <br> (supports scientific notation) |
| `colorSpeed`      | set the speed of the color shift in degrees per second    | `60`                    | positive decimal number <br> (supports scientific notation) |
| `img`             | put an image on the ball                                  | none                    | HTML image source (URL) <br> (encoded URI component)        |
| `imgPixelArt`     | enable better renderer for pixel art                      | `0`                     | `0` or `1`                                                   |
| `imgOverrideBall` | when active replaces the ball with the image              | `1`                     | `0` or `1`                                                   |

</details>

## [Small Dice](./site/dice.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/dice "open https://maz01001.github.io/site/dice")
>

- dice for random numbers
- choose min/max number of eyes (0-9)
- left-click on dice for stats
- uses `Math.random()` for random numbers - colors button differently for each new number ('cause sometimes the same number is generated multiple times in a row)

## [Pascal's Triangle](./site/pascals_triangle.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/pascals_triangle "open https://maz01001.github.io/site/pascals_triangle")
>

- choose the number of rows to generate

## [Math Function Drawer](./site/math_function_drawer.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/math_function_drawer "open https://maz01001.github.io/site/math_function_drawer")
>

- use sliders(show sliders button on the right) to set the coefficients
- scroll or use sliders(top & left) to set scale (zoom)
- render own polynomial (check the checkbox top-left and enter your coefficients)
- shows fps counter

## [Error Correction Codes](./site/code_error_correction.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/code_error_correction "open https://maz01001.github.io/site/code_error_correction")
>

- made from a [3Blue1Brown video](https://youtu.be/X8jsijhllIA "How to send a self-correcting message (Hamming codes)")
  - also see [Ben Eater's video](https://youtu.be/h0jloehRKas "What is error correction? Hamming codes in hardware")
  - another very good page on [Harry Li's github](https://harryli0088.github.io/hamming-code/)
  - and of course in Minecraft by ["processAutomation" r/3Blue1Brown post](https://www.reddit.com/r/3Blue1Brown/comments/iochkl/)
- binary input
- set random bit flips (percentage per byte)
- shows results and the difference to the original per byte
- input/output text (Unicode supported)
- set byte size (if not auto, fill to length or remove if Unicode-char needs more bits)

## [Enigma](./site/enigma.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/enigma "open https://maz01001.github.io/site/enigma")
>

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

## [Vector Field](./site/vector_field.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/vector_field "open https://maz01001.github.io/site/vector_field")
>

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

## [ASCII Snake](./site/snake.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/snake "open https://maz01001.github.io/site/snake")
>

- snake game in ascii style ([direct port from c++](https://github.com/MAZ01001/other-projects#snake_cmd-gamecpp "snake_cmd-game.cpp ducumentation in the other-projects/README.md"))
- right-click for more options

## [Calculator for arbitrary-length-integers](./site/BigIntType_calc.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/BigIntType_calc "open https://maz01001.github.io/site/BigIntType_calc")
>

- Calculator for arbitrary-length-integers
- see [Math-js/BigIntType.js](https://github.com/MAZ01001/Math-Js#biginttypejs "BigIntType.js documentation in the Math-js/README.md") for a detailed description

## [Hangman](./site/hangman.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/hangman "open https://maz01001.github.io/site/hangman")
>

- __A simple word guessing game__
- _no graphics (no actual hangman)_
- guessing is case insensitive
- full Unicode support (allows for special symbols and Emojis)
- when clicking on "new round" when over 20 seconds of progress, it shows a confirm dialog (YES/NO)
- customization (settings)
  - custom alphabet
    - keys can be set to always show and not be on the "keyboard" (useful for spaces and punctuation)
  - custom word list
  - set maximum allowed fails (or disable loosing with `-1`)
  - set a percentage for how many letters of the word are uncovered at the start of the round (`0%` to `99%`)
  - clear stored settings and reload page (shows a confirm dialog (YES/NO))
- current settings and progress is stored in browser local storage (reload does not start a new round or reset settings)
- export current settings and progress to a JSON file
- (__WIP__) import settings and progress from saved JSON file
  - choose what to import of the save
  - choose to override, ignore, or combine current alphabet / word list with the imported
  - choose to override or ignore imported rng-unhide / max-fails value
  - choose to continue with saved progress or start a new round (only previews time and fails)
    - can only be continued if the guess-word with characters are present in final settings

----

## _hidden_

### [Context menu example](./site/context_menu_example.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/context_menu_example "open https://maz01001.github.io/site/context_menu_example")
>

- example of a custom context menu using HTML/JS/CSS

### [4 PI-Day 2021](./site/pi-day_2021.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/pi-day_2021 "open https://maz01001.github.io/site/pi-day_2021")
>

- made from a [Coding Train coding-challenge video](https://youtu.be/EvS_a921dBo "Coding Challenge 161: Estimating π from Random Numbers with Euclid's Algorithm")
- estimates PI with the [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor "Wikipedia: Greatest common divisor") of 100000 numbers
- left-click to pause

### [Touch example](./site/touch_example.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/touch_example "open https://maz01001.github.io/site/touch_example")
>

- example for detecting touch (not the best detection)

### [3D-Card example](./site/3d-card_example.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/3d-card_example "open https://maz01001.github.io/site/3d-card_example")
>

- example of a 3d-card effect with HTML/JS/CSS
