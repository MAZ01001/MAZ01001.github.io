# [MAZ01001.github.io](https://maz01001.github.io/)

> my git website with random HTML/JS/CSS single-pages (for offline use)
> made for pc/chrome browser

+ [[Unofficial Satisfactory U3 Flow Chart]](#unofficial-satisfactory-u3-flow-chart)
+ [[Ball Screensaver]](#ball-screensaver)
+ [[Small Dice]](#small-dice)
+ [[Pascal's Triangle]](#pascals-triangle)
+ [[Math Function Drawer]](#math-function-drawer)
+ [[Error Correction Codes]](#error-correction-codes)
+ [[Enigma]](#enigma)
+ [[Vector Field]](#vector-field)
+ [[ASCII Snake]](#ascii-snake)
+ [[Calculator for arbitrary-length-integers]](#Calculator-for-arbitrary-length-integers)
+ [_hidden_](#hidden)
  + [[Context menu example]](#context-menu-example)
  + [[4 PI-Day 2021]](#4-pi-day-2021)
  + [[Touch example]](#touch-example)
  + [[3D-Card example]](#3d-card-example)

----

## [Unofficial Satisfactory U3 Flow Chart](./site/flowchart/index.html)

+ interactive flow chart for the 3rd Update of [SATISFACTORY](https://www.satisfactorygame.com/)

## [Ball Screensaver](./site/canvas%20ball.html)

+ a ball that bounces back from the walls and fades through colors
+ made with [P5.js](https://p5js.org/)
+ shows fps counter

## [Small Dice](./site/dice.html)

+ dice for random numbers
+ choose min/max number of eyes (0-9)
+ left-click on dice for stats
+ uses `Math.random()` for random numbers - colors button differently for each new number ('cause sometimes the same number is generated multiple times in a row)

## [Pascal's Triangle](./site/pascal's%20triangle.html)

+ choose the number of rows to generate

## [Math Function Drawer](./site/math%20function%20drawer.html)

+ use sliders(show sliders button on the right) to set the coefficients
+ scroll or use sliders(top & left) to set scale (zoom)
+ render own polynomial (check the checkbox top-left and enter your coefficients)
+ shows fps counter

## [Error Correction Codes](./site/code%20error%20correction.html)

+ made from a [3Blue1Brown video](https://youtu.be/X8jsijhllIA)
  + also see [Ben Eater's video](https://youtu.be/h0jloehRKas)
  + another very good page on [Harry Li's github](https://harryli0088.github.io/hamming-code/)
  + and of course in Minecraft by ["processAutomation" r/3Blue1Brown post](https://www.reddit.com/r/3Blue1Brown/comments/iochkl/)
+ binary input
+ set random bit flips (percentage per byte)
+ shows results and the difference to the original per byte
+ input/output text (Unicode supported)
+ set byte size (if not auto, fill to length or remove if Unicode-char needs more bits)

## [Enigma](./site/enigma.html)

+ almost like the real thing ft. loading screen
+ create enigma for encoding
  + read from file
  + configure
    + give custom alphabet (Unicode supported)
    + set number of weels (signal only goes one way)
    + set number of plugs (auto maximum)
+ import enigma for decoding
  + read from file
  + mirror encoding enigma
+ set custom turning number
+ auto "turn" on every character that is encoded, one after another

## [Vector Field](./site/vector_field.html)

+ vector objects
+ default points to mouse
+ use console
  + set variables
  + set custom function for render each vector
+ use buttons
  + scroll to make arrows larger
  + left-click/hold to hide cross with coordinates
+ shows fps counter
+ made with [P5.js](https://p5js.org/)

## [ASCII Snake](./site/snake.html)

+ snake game in ascii style ([port from c++](../other-projects#snake_cmd-gamecpp))
+ right-click for more options

## [Calculator for arbitrary-length-integers](./site/BigIntType_calc.html)

+ Calculator for arbitrary-length-integers
+ see [Math-js/BigIntType.js](../Math-Js/README.md#BigIntType.js) for more description

----

## _hidden_

### [Context menu example](./site/context%20menu%20example.html)

+ example of a custom context menu using HTML/JS/CSS

### [4 PI-Day 2021](./site/pi-day_2021.html)

+ made from a [Coding Train coding-challenge video](https://youtu.be/EvS_a921dBo)
+ estimates PI with the [gcd](https://en.wikipedia.org/wiki/Greatest_common_divisor) of 100000 numbers
+ left-click to pause

### [Touch example](./site/touch%20example.html)

+ example for detecting touch (not the best detection)

### [3D-Card example](./site/3d-card%20example.html)

+ example of a 3d-card effect with HTML/JS/CSS
