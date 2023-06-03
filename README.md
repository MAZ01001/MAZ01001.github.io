# MAZ01001.github.io

>
> my git [website](https://maz01001.github.io/ "https://MAZ01001.GitHub.io/") with random HTML/JS/CSS single-pages (for offline use)
> made for pc/chrome browser
>

- [Unofficial Satisfactory U3 Flow Chart](#unofficial-satisfactory-u3-flow-chart)
- [Ball Screensaver](#ball-screensaver)
- [Small Dice](#small-dice)
- [Pascal's Triangle](#pascals-triangle)
- [Math Function Drawer](#math-function-drawer)
- [Error Correction Codes](#error-correction-codes)
- [Enigma](#enigma)
- [Vector Field](#vector-field)
- [ASCII Snake](#ascii-snake)
- [Calculator for arbitrary-length-integers](#calculator-for-arbitrary-length-integers)
- [_hidden_](#hidden)
  - [Context menu example](#context-menu-example)
  - [4 PI-Day 2021](#4-pi-day-2021)
  - [Touch example](#touch-example)
  - [3D-Card example](#3d-card-example)

----

## [Unofficial Satisfactory U3 Flow Chart](./site/satisfactory_u3_flowchart.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/satisfactory_u3_flowchart.html "open https://maz01001.github.io/site/satisfactory_u3_flowchart.html")
>

- interactive flow chart for the 3rd Update of [SATISFACTORY](https://www.satisfactorygame.com/ "official game website")

## [Ball Screensaver](./site/canvas_ball.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/canvas_ball.html "open https://maz01001.github.io/site/canvas_ball.html")
>

- a ball that moves diagonally across the screen and changes color
- using only javascript (HTML5 canvas)

### available URL parameters

<details open><summary>click to hide table</summary>
  <table>
    <tr><th><code>parameter</code></th><th>possible values</th><th>description</th><th>default value</th></tr>
    <tr><td><code>transparent</code></td><td>0 / 1</td><td>make the background of the website transparent</td><td><code>0</code></td></tr>
    <tr><td><code>fpsView</code></td><td>0 / 1</td><td>show fps</td><td><code>1</code></td></tr>
    <tr><td><code>clearCanvas</code></td><td>0 / 1</td><td>clears the canvas every frame</td><td><code>1</code></td></tr>
    <tr><td><code>fpsMax</code></td><td>safe integer</td><td>set the max frame rate</td><td><code>60</code></td></tr>
    <tr><td><code>ballSize</code></td><td>0.0 - 1.0</td><td>set the ball size (%) relative to the smaller window size</td><td><code>0.2</code></td></tr>
    <tr><td><code>ballSpeed</code></td><td>finite float</td><td>set the speed of the ball</td><td><code>4</code></td></tr>
    <tr><td><code>colorSpeed</code></td><td>finite float</td><td>set the speed of the color shift</td><td><code>1</code></td></tr>
    <tr><td><code>seed</code></td><td>any</td><td>set the seed for RNG</td><td>minute timestamp in hex</td></tr>
    <tr><td><code>img</code></td><td>image (URI component)</td><td>put an image on the ball (encode value as URI component)</td><td>none</td></tr>
    <tr><td><code>imgPixelArt</code></td><td>0/1</td><td>enable better renderer for pixel art</td><td><code>0</code></td></tr>
    <tr><td><code>imgOverrideBall</code></td><td>0/1</td><td>when active replaces the ball with the image</td><td><code>1</code></td></tr>
  </table>
</details>

## [Small Dice](./site/dice.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/dice.html "open https://maz01001.github.io/site/dice.html")
>

- dice for random numbers
- choose min/max number of eyes (0-9)
- left-click on dice for stats
- uses `Math.random()` for random numbers - colors button differently for each new number ('cause sometimes the same number is generated multiple times in a row)

## [Pascal's Triangle](./site/pascals_triangle.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/pascals_triangle.html "open https://maz01001.github.io/site/pascals_triangle.html")
>

- choose the number of rows to generate

## [Math Function Drawer](./site/math_function_drawer.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/math_function_drawer.html "open https://maz01001.github.io/site/math_function_drawer.html")
>

- use sliders(show sliders button on the right) to set the coefficients
- scroll or use sliders(top & left) to set scale (zoom)
- render own polynomial (check the checkbox top-left and enter your coefficients)
- shows fps counter

## [Error Correction Codes](./site/code_error_correction.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/code_error_correction.html "open https://maz01001.github.io/site/code_error_correction.html")
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
> [view the live webpage](https://maz01001.github.io/site/enigma.html "open https://maz01001.github.io/site/enigma.html")
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
> [view the live webpage](https://maz01001.github.io/site/vector_field.html "open https://maz01001.github.io/site/vector_field.html")
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
> [view the live webpage](https://maz01001.github.io/site/snake.html "open https://maz01001.github.io/site/snake.html")
>

- snake game in ascii style ([port from c++](https://github.com/MAZ01001/other-projects#snake_cmd-gamecpp "snake_cmd-game.cpp ducumentation in the other-projects/README.md"))
- right-click for more options

## [Calculator for arbitrary-length-integers](./site/BigIntType_calc.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/BigIntType_calc.html "open https://maz01001.github.io/site/BigIntType_calc.html")
>

- Calculator for arbitrary-length-integers
- see [Math-js/BigIntType.js](https://github.com/MAZ01001/Math-Js#biginttypejs "BigIntType.js documentation in the Math-js/README.md") for a detailed description

----

## _hidden_

### [Context menu example](./site/context_menu_example.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/context_menu_example.html "open https://maz01001.github.io/site/context_menu_example.html")
>

- example of a custom context menu using HTML/JS/CSS

### [4 PI-Day 2021](./site/pi-day_2021.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/pi-day_2021.html "open https://maz01001.github.io/site/pi-day_2021.html")
>

- made from a [Coding Train coding-challenge video](https://youtu.be/EvS_a921dBo "Coding Challenge 161: Estimating π from Random Numbers with Euclid's Algorithm")
- estimates PI with the [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor "Wikipedia: Greatest common divisor") of 100000 numbers
- left-click to pause

### [Touch example](./site/touch_example.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/touch_example.html "open https://maz01001.github.io/site/touch_example.html")
>

- example for detecting touch (not the best detection)

### [3D-Card example](./site/3d-card_example.html "view the source code")

>
> [view the live webpage](https://maz01001.github.io/site/3d-card_example.html "open https://maz01001.github.io/site/3d-card_example.html")
>

- example of a 3d-card effect with HTML/JS/CSS
