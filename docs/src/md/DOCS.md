<center>
<img src="./assets/MathJSBanner.svg" width="60%" style="margin-top: 40px">
</center>

 _A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions_

> ⓘ Note
> **_This library does not support complex numbers._**

> &#128161; Info
>Each function is defined using JavaScript's function keyword, and many of them use the ... (spread) syntax to accept any number of arguments. They also use JavaScript's built-in Math object to perform various mathematical operations.

# Brief Explanation about MathJS Library

This JavaScript file, math.js, is a library that provides various mathematical functions.

_Github Repository_: [@MTSOSS/MathJS](https://github.com/MTSOSS/MathJS)

## Installation

MathJS can be used in both node.js and in the browser.

<h4>For Browser:</h4>

Include the following code snippets in your html file
```
    <script src="https://unpkg.com/arithmetic-core.js/math.js"></script>

    <!--minified version(8kb → 3kb)-->
    <script src="https://unpkg.com/arithmetic-core.js/dist/math.min.js"></script>
```

> ⓘ Note
> **_This library does Universal Module Definition (UMD) support i.e you can call math.js as a normal js or import it as a Module (CJS or MJS, both supported)._**

<h4>NPM:</h4>
Install MathJS using <a href="https://www.npmjs.com/package/arithmetic-core.js" target="_blank">npm</a>:

    npm i arithmetic-core.js

## Usage
<h4>For Browser:</h4>

    <script src="https://unpkg.com/arithmetic-core.js/dist/math.min.js"></script>
    <script>
        console.log(math.hypotenuse(3, 4)); // 5

        console.log(math.mean(1, 2, 3, 4, 5)); // 3

        console.log(math.greatestCommonDivisor(12, 18)); // 6

        console.log(math.leastCommonMultiple(12, 18)); // 36

        console.log(math.isPrime(2)); // true
        <!-- and so on -->
    </script>

<h4>For Node.js:</h4>

        const math = require('arithmetic-core.js');

        console.log(math.hypotenuse(3, 4)); // 5

        console.log(math.mean(1, 2, 3, 4, 5)); // 3

        console.log(math.greatestCommonDivisor(12, 18)); // 6

        console.log(math.leastCommonMultiple(12, 18)); // 36

        console.log(math.isPrime(2)); // true
        <!-- and so on -->


## Mathematical Constants
It defines several mathematical constants using JavaScript's built-in Math object and Number object. These include
| Name | Type | Description |
| --- | --- | --- |
| `e` | Constant | Euler's number |
| `PI` | Constant | Pi |
| `LN2` | Constant | Natural logarithm of 2 |
| `LN10` | Constant | Natural logarithm of 10 |
| `TAU` | Constant | Tau (2 * Pi) |
| `LOG2E` | Constant | Base 2 logarithm of Euler's number |
| `LOG10E` | Constant | Base 10 logarithm of Euler's number |
| `EPSILON` | Constant | Smallest interval between representable numbers |
| `PHI` | Constant | Golden ratio |

### Basic Arithmetic Functions
The library provides functions for basic arithmetic operations, such as
| Name | Type | Description |
| --- | --- | --- |
| `add(...n)` | Function | Add all parameters |
| `subtract(...n)` | Function | Subtract all parameters |
| `multiply(...n)` | Function | Multiply all parameters |
| `divide(...n)` | Function | Divide all parameters |
| `square(n)` | Function | Square the parameter |
| `cube(n)` | Function | Cube the parameter |
| `power(n, e)` | Function | Raise the parameter to the exponent |
| `root(n, e)` | Function | Return the nth root of the parameter |
| `round(n)` | Function | Round the parameter |
| `roundUp(n)` | Function | Round up the parameter |
| `roundDown(n)` | Function | Round down the parameter |
| `absolute(n)` | Function | Return the absolute value of the parameter |
| `remainder(n, d)` | Function | Return the remainder of the parameter divided by the divisor |
| `max(...n)` | Function | Return the maximum of the parameters |
| `min(...n)` | Function | Return the minimum of the parameters |
| `sqrt(n)` | Function | Return the square root of the parameter |
| `cbrt(n)` | Function | Return the cube root of the parameter |
| `hypotenuse(a, b)` | Function | Return the hypotenuse of a right-angled triangle given the other two sides |
| `average(...n)` | Function | Return the average of the parameters |
| `mean(...n)` | Function | Return the mean of the parameters |
| `median(...n)` | Function | Return the median of the parameters |
| `mode(...n)` | Function | Return the mode of the parameters |
| `range(...n)` | Function | Return the range of the parameters |
| `greatestCommonDivisor(...n)` | Function | Return the greatest common divisor of the parameters |
| `highestCommonFactor(...n)` | Function | Return the highest common factor of the parameters |
| `leastCommonMultiple(...n)` | Function | Return the least common multiple of the parameters |

### Comparison Functions
It also includes functions to check if a number is even, odd, prime, composite, or finite.
| Name | Type | Description |
| --- | --- | --- |
| `isEven(n)` | Function | Return true if the parameter is even |
| `isOdd(n)` | Function | Return true if the parameter is odd |
| `isPrime(n)` | Function | Return true if the parameter is a prime number |
| `isComposite(n)` | Function | Return true if the parameter is a composite number |
| `isFinite(n)` | Function | Return true if the parameter is a finite number |

### Factorial and Fibonacci Functions
The library provides functions to calculate the factorial of a number and the nth Fibonacci number.
| Name | Type | Description |
| --- | --- | --- |
| `factorial(n)` | Function | Return the factorial of the parameter |
| `fibonacci(n)` | Function | Return the nth Fibonacci number |

### Random Number Function
There's a function to generate a random number between two given numbers.
| Name | Type | Description |
| --- | --- | --- |
| `random(a, b)` | Function | Return a random number between a and b |

### Advanced Arithmetic Functions
The library also includes advanced arithmetic functions, such as
| Name | Type | Description |
| --- | --- | --- |
| `log(n, b)` | Function | Return the natural logarithm of the parameter w.r.t. the base |
| `logBase2(n)` | Function | Return the base 2 logarithm of the parameter|
| `logBase5(n)` | Function | Return the base 5 logarithm of the parameter |
| `logBase10(n)` | Function | Return the base 10 logarithm of the parameter |

### Trigonometric Functions
Finally, the library provides functions to calculate the sine, cosine, tangent, cotangent, secant, and cosecant of a number.
| Name | Type | Description |
| --- | --- | --- |
| `sin(n)` | Function | Return the sine of the parameter till 2 decimal places |
| `cos(n)` | Function | Return the cosine of the parameter till 2 decimal places |
| `tan(n)` | Function | Return the tangent of the parameter till 2 decimal places |
| `cot(n)` | Function | Return the cotangent of the parameter till 2 decimal places |
| `sec(n)` | Function | Return the secant of the parameter till 2 decimal places |
| `csc(n)` | Function | Return the cosecant of the parameter till 2 decimal places |

### Evaluate Expression
There's a function to evaluate given expression.
| Name | Type | Description |
| --- | --- | --- |
| `evaluateExpression(e)` | Function | Evaluate the given expression |
