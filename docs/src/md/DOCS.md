<center>
<img src="https://satyamv7.github.io/MathJS/assets/MathJSBanner.svg" width="60%" style="margin-top: 40px">


<h4>
 A JavaScript library for basic and advanced arithmetic operations, satistical functions, logical functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
</h4>

[![npm](https://img.shields.io/npm/v/@cypher_077/math)](https://www.npmjs.com/package/@cypher_077/math) [![Downloads](https://img.shields.io/npm/dm/@cypher_077/math.svg)](https://www.npmjs.com/package/@cypher_077/math) [![Build Status](https://github.com/SatyamV7/MathJS/workflows/Node.js%20CI/badge.svg)](https://github.com/SatyamV7/MathJS/actions) ![GitHub](https://img.shields.io/github/license/SatyamV7/MathJS) ![GitHub](https://img.shields.io/github/stars/SatyamV7/MathJS)

</center>

> ⓘ Note
> **_This library does not support complex numbers._**


# Brief Explanation about MathJS Library

The MathJS library is a collection of mathematical functions that can be used in both node.js and in the browser. It provides various mathematical functions for basic and advanced arithmetic operations, satistical functions, logical functions, factorial and fibonacci functions, random number functions, and trigonometric functions.

_Github Repository_: [@SatyamV7/MathJS](https://github.com/SatyamV7/MathJS)

## Installation

MathJS can be used in both node.js and in the browser.

> ⓘ Note
> **_This library supports Universal Module Definition (UMD) i.e you can treat MathJS as a normal JavaScript file or import it as a Module (CommonJS)._**

<h4>For Browser:</h4>

Include either of the following script in your html file
```HTML
    <!--unminified version(14.5 kB)-->
    <script src="https://unpkg.com/@cypher_077/math/math.js"></script>

    <!--Recommended for browsers-->
    <!--minified version(14.5 kB → 7.20 kB)-->
    <script src="https://unpkg.com/@cypher_077/math/dist/math.min.js"></script>
```

<h4>Via NPM:</h4>
Install MathJS using <a href="https://www.npmjs.com/package/@cypher_077/math" target="_blank">npm</a>:

```bash
    npm install @cypher_077/math
```

And then import it in your project:


```JavaScript
    // Import the MathJS library
    const math = require('@cypher_077/math');
```

## Usage
```JavaScript
        console.log(math.hypotenuse(3, 4)); // 5

        console.log(math.mean(1, 2, 3, 4, 5)); // 3

        console.log(math.greatestCommonDivisor(12, 18)); // 6

        console.log(math.leastCommonMultiple(12, 18)); // 36

        console.log(math.isPrime(2)); // true

        console.log(math.isArmstrong(153)); // true

        console.log(math.isPalindrome(121)); // true

        console.log(math.isDivisible(16, 4)); // true

        console.log(math.evaluate('(2 * tan(45) + 3) * 4 ^ x', { x: 2 })); // 80

        console.log(
                    math.chain(10)
                        .add(5)
                        .subtract(3)
                        .multiply(2)
                        .divide(4)
                        .result()
        ); // 6

        // and so on
```

### Mathematical Constants

It defines several mathematical constants using JavaScript's built-in Math object and Number object. These include:

| Name | Description |
| --- | --- |
| `math.e` | Mathematical constant e. |
| `math.PI` | Mathematical constant π. |
| `math.LN2` | Natural logarithm of 2. |
| `math.LN10` | Natural logarithm of 10. |
| `math.TAU` | Tau (2π). |
| `math.LOG2E` | Base 2 logarithm of E. |
| `math.LOG10E` | Base 10 logarithm of E. |
| `math.EPSILON` | Difference between 1 and the smallest value greater than 1 that is representable as a float. |
| `math.PHI` | Golden ratio. |

### Basic Arithmetic Functions

The library provides functions for basic arithmetic operations, such as:

| Name | Type | Description |
| --- | --- | --- |
| `math.add(...n)` | Function | Returns the sum of the given numbers. |
| `math.subtract(...n)` | Function | Returns the difference of the given numbers. |
| `math.multiply(...n)` | Function | Returns the product of the given numbers. |
| `math.divide(...n)` | Function | Returns the division of the given numbers. |
| `math.remainder(...n)` | Function | Returns the remainder of the division of the numbers. |

### Statistical Functions

The library provides functions for statistical operations, such as:

| Name | Type | Description |
| --- | --- | --- |
| `math.max(...n)` | Function | Returns the maximum value from the given numbers. |
| `math.min(...n)` | Function | Returns the minimum value from the given numbers. |
| `math.average(...n)` | Function | Returns the average value of the given numbers. |
| `math.median(...n)` | Function | Returns the median value of the given numbers. |
| `math.mode(...n)` | Function | Returns the mode value of the given numbers. |
| `math.range(...n)` | Function | Returns the range of the given numbers. |
| `math.variance(...n)` | Function | Returns the variance of the given numbers. |
| `math.standardDeviation(...n)` | Function | Returns the standard deviation of the given numbers. |

### Logical Functions

It also includes functions which perform logical operations, such as:

| Name | Type | Description |
| --- | --- | --- |
| `math.isEqual(a, b)` | Function | Checks if two values are equal. |
| `math.isNearlyEqual(a, b)` | Function | Checks if two values are nearly equal. |
| `math.isEven(n)` | Function | Checks if a number is even. |
| `math.isOdd(n)` | Function | Checks if a number is odd. |
| `math.isPositive(n)` | Function | Checks if a number is positive. |
| `math.isNegative(n)` | Function | Checks if a number is negative. |
| `math.isZero(n)` | Function | Checks if a number is zero. |
| `math.isInteger(n)` | Function | Checks if a number is an integer. |
| `math.isFloat(n)` | Function | Checks if a number is a float. |
| `math.isPrime(n)` | Function | Checks if a number is prime. |
| `math.isComposite(n)` | Function | Checks if a number is composite. |
| `math.isDivisible(n, d)` | Function | Checks if `n` is divisible by `d`. |
| `math.isPowerOf(n, e)` | Function | Checks if `n` is a power of `e`. |
| `math.isPerfectSquare(n)` | Function | Checks if a number is a perfect square. |
| `math.isPerfectCube(n)` | Function | Checks if a number is a perfect cube. |
| `math.isPerfectPower(n, b)` | Function | Checks if `n` is a perfect power of `b`. |
| `math.isMultiple(n, m)` | Function | Checks if `n` is a multiple of `m`. |
| `math.isFactor(n, f)` | Function | Checks if `f` is a factor of the parameter in degrees till 2 decimal places. |
| `math.isArmstrong(n)` | Function | Checks if a number is an Armstrong number. |
| `math.isPalindrome(n)` | Function | Checks if a number is a palindrome. |
| `math.isFinite(n)` | Function | Checks if a number is finite. |
| `math.isInfinite(n)` | Function | Checks if a number is infinite. |

### Factorial and Fibonacci Functions

The library provides functions to calculate the factorial and Fibonacci series.

| Name | Type | Description |
| --- | --- | --- |
| `math.factorial(n)` | Function | Returns the factorial of the parameter in degrees till 2 decimal places. |
| `math.fibonacci(n)` | Function | Returns the nth Fibonacci number. |
| `math.fibonacciSeries(n, returnType)` | Function | Returns the Fibonacci series up to `n` terms. |

### Random Number Functions

There's a function to generate a random number between two given numbers.

| Name | Type | Description |
| --- | --- | --- |
| `math.random(a, b)` | Function | Returns a random integer between `a` and `b`, inclusive. |

### Advanced Arithmetic Functions

The library provides functions for advanced arithmetic operations, such as:

| Name | Type | Description |
| --- | --- | --- |
| `math.log(n, b)` | Function | Returns the logarithm of `n` with base `b`. |
| `math.logBase2(n)` | Function | Returns the base 2 logarithm of the parameter in degrees till 2 decimal places. |
| `math.logBase5(n)` | Function | Returns the base 5 logarithm of the parameter in degrees till 2 decimal places. |
| `math.logBase10(n)` | Function | Returns the base 10 logarithm of the parameter in degrees till 2 decimal places. |
| `math.square(n)` | Function | Returns the square of the parameter in degrees till 2 decimal places. |
| `math.cube(n)` | Function | Returns the cube of the parameter in degrees till 2 decimal places. |
| `math.power(n, e)` | Function | Returns `n` raised to the power of `e`. |
| `math.root(n, e)` | Function | Returns the `e`th root of the parameter in degrees till 2 decimal places. |
| `math.round(n)` | Function | Rounds `n` to the nearest integer. |
| `math.roundUp(n)` | Function | Rounds `n` up to the nearest integer. |
| `math.roundDown(n)` | Function | Rounds `n` down to the nearest integer. |
| `math.absolute(n)` | Function | Returns the absolute value of the parameter in degrees till 2 decimal places. |
| `math.sqrt(n)` | Function | Returns the square root of the parameter in degrees till 2 decimal places. |
| `math.cbrt(n)` | Function | Returns the cube root of the parameter in degrees till 2 decimal places. |
| `math.hypotenuse(a, b)` | Function | Returns the hypotenuse of a right triangle with side lengths `a` and `b`. |
| `math.factorsOf(n, returnType)` | Function | Returns the factors of the parameter in degrees till 2 decimal places. |
| `math.primeFactorsOf(n, returnType)` | Function | Returns the prime factors of the parameter in degrees till 2 decimal places. |
| `math.primeFactorizationOf(n, returnType)` | Function | Returns the prime factorization of the parameter in degrees till 2 decimal places. |
| `math.greatestCommonDivisor(...n)` | Function | Returns the greatest common divisor of the given numbers. |
| `math.leastCommonMultiple(...n)` | Function | Returns the least common multiple of the given numbers. |

### Trigonometric Functions

The library provides functions to calculate trigonometric values.

> &#128161; Info
> **_All trigonometric functions accept values in degree and radians. You can achieve this by specifying units like this._**

```javascript
math.sin('90 deg'); // Returns 1
math.cos('PI/2 rad'); // Returns 0
math.tan('3/4*PI rad'); // Returns -1
```

| Name | Type | Description |
| --- | --- | --- |
| `math.sin(n)` | Function | Returns the sine of the parameter till 2 decimal places. |
| `math.cos(n)` | Function | Returns the cosine of the parameter till 2 decimal places. |
| `math.tan(n)` | Function | Returns the tangent of the parameter till 2 decimal places. |
| `math.cot(n)` | Function | Returns the cotangent of the parameter till 2 decimal places. |
| `math.sec(n)` | Function | Returns the secant of the parameter till 2 decimal places. |
| `math.csc(n)` | Function | Returns the cosecant of the parameter till 2 decimal places. |

### Evaluation of Mathematical Expressions

This is an expression evaluator of this library that can evaluate mathematical expressions with optional variables.

| Name | Type | Description |
| --- | --- | --- |
| `math.evaluate(expression, variables)` | Function | Evaluates a mathematical expression with optional variables. |

### Chaining Methods

The library provides a method to chain arithmetic operations.

Example:
```javascript
math.chain(5)
  .add(3)
  .multiply(2)
  .result(); // Returns 16

math.chain()
  .add(5)
  .divide(2)
  .result(); // Returns 2.5
```
# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/SatyamV7/MathJS/blob/main/LICENSE) file for details.
&nbsp;