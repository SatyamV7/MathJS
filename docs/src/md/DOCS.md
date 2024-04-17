<center>
<img src="https://satyamv7.github.io/MathJS/assets/MathJSBanner.svg" width="60%" style="margin-top: 40px">
</center>

 _A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions_

> ⓘ Note
> **_This library does not support complex numbers._**

> &#128161; Info
>Each function is defined using https://satyamv7.github.io/MathJS/assets/MathJSBanner.svgJavaScript's function keyword, and many of them use the ... (spread) syntax to accept any number of arguments. They also use JavaScript's built-in Math object to perform various mathematical operations.

# Brief Explanation about MathJS Library

This JavaScript file, math.js, is a library that provides various mathematical functions.

_Github Repository_: [@SatyamV7/MathJS](https://github.com/SatyamV7/MathJS)

## Installation

MathJS can be used in both node.js and in the browser.

<h4>For Browser:</h4>

Include the following code snippets in your html file
```
    <script src="https://unpkg.com/@cypher_077/math/math.js"></script>

    <!--minified version(8kb → 3kb)-->
    <script src="https://unpkg.com/@cypher_077/math/dist/math.min.js"></script>
```

> ⓘ Note
> **_This library does Universal Module Definition (UMD) support i.e you can call math.js as a normal js or import it as a Module (CommonJS)._**

<h4>Via NPM:</h4>
Install MathJS using <a href="https://www.npmjs.com/package/@cypher_077/math" target="_blank">npm</a>:

    npm i @cypher_077/math

## Usage
<h4>For Browser:</h4>

    <script src="https://unpkg.com/@cypher_077/math/dist/math.min.js"></script>
    <script>
        console.log(math.hypotenuse(3, 4)); // 5

        console.log(math.mean(1, 2, 3, 4, 5)); // 3

        console.log(math.greatestCommonDivisor(12, 18)); // 6

        console.log(math.leastCommonMultiple(12, 18)); // 36

        console.log(math.isPrime(2)); // true

        // and so on
    </script>

<h4>For Node.js:</h4>

        const math = require('@cypher_077/math');

        console.log(math.hypotenuse(3, 4)); // 5

        console.log(math.mean(1, 2, 3, 4, 5)); // 3

        console.log(math.greatestCommonDivisor(12, 18)); // 6

        console.log(math.leastCommonMultiple(12, 18)); // 36

        console.log(math.isPrime(2)); // true

        // and so on


## Mathematical Constants
It defines several mathematical constants using JavaScript's built-in Math object and Number object. These include
| Name | Type | Description |
| --- | --- | --- |
| `math.e` | Constant | Euler's number |
| `math.PI` | Constant | Pi |
| `math.LN2` | Constant | Natural logarithm of 2 |
| `math.LN10` | Constant | Natural logarithm of 10 |
| `math.TAU` | Constant | Tau (2 * Pi) |
| `math.LOG2E` | Constant | Base 2 logarithm of Euler's number |
| `math.LOG10E` | Constant | Base 10 logarithm of Euler's number |
| `math.EPSILON` | Constant | Smallest interval between representable numbers |
| `math.PHI` | Constant | Golden ratio |

### Basic Arithmetic Functions
The library provides functions for basic arithmetic operations, such as
| Name | Type | Description |
| --- | --- | --- |
| `math.add(...n)` | Function | Add all parameters |
| `math.subtract(...n)` | Function | Subtract all parameters |
| `math.multiply(...n)` | Function | Multiply all parameters |
| `math.divide(...n)` | Function | Divide all parameters |
| `math.square(n)` | Function | Square the parameter |
| `math.cube(n)` | Function | Cube the parameter |
| `math.power(n, e)` | Function | Raise the parameter to the exponent |
| `math.root(n, e)` | Function | Return the nth root of the parameter |
| `math.round(n)` | Function | Round the parameter |
| `math.roundUp(n)` | Function | Round up the parameter |
| `math.roundDown(n)` | Function | Round down the parameter |
| `math.absolute(n)` | Function | Return the absolute value of the parameter |
| `math.remainder(n, d)` | Function | Return the remainder of the parameter divided by the divisor |
| `math.max(...n)` | Function | Return the maximum of the parameters |
| `math.min(...n)` | Function | Return the minimum of the parameters |
| `math.sqrt(n)` | Function | Return the square root of the parameter |
| `math.cbrt(n)` | Function | Return the cube root of the parameter |
| `math.hypotenuse(a, b)` | Function | Return the hypotenuse of a right-angled triangle given the other two sides |
| `math.average(...n)` | Function | Return the average of the parameters |
| `math.mean(...n)` | Function | Return the mean of the parameters |
| `math.median(...n)` | Function | Return the median of the parameters |
| `math.mode(...n)` | Function | Return the mode of the parameters |
| `math.range(...n)` | Function | Return the range of the parameters |
| `math.greatestCommonDivisor(...n)` <br> or `math.highestCommonFactor(...n)` <br> or `math.GCD(...n)` or `math.HCF(...n)`| Function | Return the greatest common divisor of the parameters |
| `math.leastCommonMultiple(...n)` <br> or `math.LCM(...n)` | Function | Return the least common multiple of the parameters |

### Comparison Functions
It also includes functions to check if a number is even, odd, prime, composite, or finite.
| Name | Type | Description |
| --- | --- | --- |
| `math.isEven(n)` | Function | Return true if the parameter is even |
| `math.isOdd(n)` | Function | Return true if the parameter is odd |
| `math.isPositive(n)` | Function | Return true if the parameter is positive |
| `math.isNegative(n)` | Function | Return true if the parameter is negative |
| `math.isZero(n)` | Function | Return true if the parameter is zero |
| `math.isInteger(n)` | Function | Return true if the parameter is an integer |
| `math.isFloat(n)` | Function | Return true if the parameter is a float |
| `math.isPrime(n)` | Function | Return true if the parameter is a prime number |
| `math.isComposite(n)` | Function | Return true if the parameter is a composite number |
| `math.isDivisible(n, d)` | Function | Return true if the parameter is divisible by the divisor |
| `math.isPowerof(n, e)` | Function | Return true if the parameter is a power of the exponent |
| `math.isPerfectSquare(n)` | Function | Return true if the parameter is a perfect square |
| `math.isPerfectCube(n)` | Function | Return true if the parameter is a perfect cube |
| `math.isPerfectPower(n, e)` | Function | Return true if the parameter is a perfect power of the exponent |
| `math.isFactor(n, f)` | Function | Return true if the parameter is a factor of the factor |
| `math.isMultiple(n, m)` | Function | Return true if the parameter is a multiple of the multiple |
| `math.isArmstrong(n)` | Function | Return true if the parameter is an Armstrong number |
| `math.isPalindrome(n)` | Function | Return true if the parameter is a palindrome |
| `math.isFinite(n)` | Function | Return true if the parameter is a finite number |
| `math.isInfinite(n)` | Function | Return true if the parameter is an infinite number |

### Factorial and Fibonacci Functions
The library provides functions to calculate the factorial of a number and the nth Fibonacci number.
| Name | Type | Description |
| --- | --- | --- |
| `math.factorial(n)` | Function | Return the factorial of the parameter |
| `math.fibonacci(n)` | Function | Return the nth Fibonacci number |

### Random Number Function
There's a function to generate a random number between two given numbers.
| Name | Type | Description |
| --- | --- | --- |
| `math.random(a, b)` | Function | Return a random number between a and b |

### Advanced Arithmetic Functions
The library also includes advanced arithmetic functions, such as
| Name | Type | Description |
| --- | --- | --- |
| `math.log(n, b)` | Function | Return the natural logarithm of the parameter w.r.t. the base |
| `math.logBase2(n)` | Function | Return the base 2 logarithm of the parameter|
| `math.logBase5(n)` | Function | Return the base 5 logarithm of the parameter |
| `math.logBase10(n)` | Function | Return the base 10 logarithm of the parameter |

### Trigonometric Functions
Finally, the library provides functions to calculate the sine, cosine, tangent, cotangent, secant, and cosecant of a number.
| Name | Type | Description |
| --- | --- | --- |
| `math.sin(n)` | Function | Return the sine of the parameter till 2 decimal places |
| `math.cos(n)` | Function | Return the cosine of the parameter till 2 decimal places |
| `math.tan(n)` | Function | Return the tangent of the parameter till 2 decimal places |
| `math.cot(n)` | Function | Return the cotangent of the parameter till 2 decimal places |
| `math.sec(n)` | Function | Return the secant of the parameter till 2 decimal places |
| `math.csc(n)` | Function | Return the cosecant of the parameter till 2 decimal places |

### Evaluate Expression
There's a function to evaluate given expression.
| Name | Type | Description |
| --- | --- | --- |
| `math.evaluateExpression(e)` | Function | Evaluate the given expression |
