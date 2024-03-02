# MathJS
 A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions

> [!NOTE]
> This library does not support complex numbers.

## Brief Explanation about MathJS Library

This JavaScript file, math.js, is a library that provides various mathematical functions. Here's a brief explanation of each section:

### Mathematical Constants
It defines several mathematical constants using JavaScript's built-in Math object and Number object. These include:
| Name | Type | Description |
| --- | --- | --- |
| `e` | Constant | Euler's number |
| `PI` | Constant | Pi |
| `LN2` | Constant | Natural logarithm of 2 |
| `NaN` | Constant | Not a Number |
| `LN10` | Constant | Natural logarithm of 10 |
| `i` | Constant | Imaginary unit |
| `TAU` | Constant | Tau (2 * Pi) |
| `LOG2E` | Constant | Base 2 logarithm of Euler's number |
| `LOG10E` | Constant | Base 10 logarithm of Euler's number |
| `EPSILON` | Constant | Smallest interval between representable numbers |
| `PHI` | Constant | Golden ratio |
| `Infinity` | Constant | Positive infinity |
| `negativeInfinity` | Constant | Negative infinity |

### Basic Arithmetic Functions
The library provides functions for basic arithmetic operations, such as
| Name | Type | Description |
| --- | --- | --- |
| `add(...n)` | Function | Add all parameters |
| `subtract(...n)` | Function | Subtract all parameters |
| `multiply(...n)` | Function | Multiplication |
| `divide(...n)` | Function | Division |
| `square(n)` | Function | Squaring |
| `cube(n)` | Function | Cubing |
| `power(n, e)` | Function | Exponentiation |
| `root(n, e)` | Function | nth root |
| `round(n)` | Function | Rounding |
| `roundUp(n)` | Function | Rounding up |
| `roundDown(n)` | Function | Rounding down |
| `absolute(n)` | Function | Absolute value |
| `remainder(n, d)` | Function | Remainder |
| `max(...n)` | Function | Maximum |
| `min(...n)` | Function | Minimum |
| `sqrt(n)` | Function | Square root |
| `cbrt(n)` | Function | Cube root |
| `hypotenuse(a, b)` | Function | Hypotenuse |
| `average(...n)` | Function | Average |
| `mean(...n)` | Function | Mean |
| `median(...n)` | Function | Median |
| `mode(...n)` | Function | Mode |
| `range(...n)` | Function | Range |
| `greatestCommonDivisor(...n)` | Function | Greatest common divisor |
| `highestCommonFactor(...n)` | Function | Highest common factor |
| `leastCommonMultiple(...n)` | Function | Least common multiple |

### Comparison Functions
It also includes functions to check if a number is even, odd, prime, composite, or finite.
| Name | Type | Description |
| --- | --- | --- |
| `isEven(n)` | Function | Check if even |
| `isOdd(n)` | Function | Check if odd |
| `isPrime(n)` | Function | Check if prime |
| `isComposite(n)` | Function | Check if composite |
| `isFinite(n)` | Function | Check if finite |

### Factorial and Fibonacci Functions
The library provides functions to calculate the factorial of a number and the nth Fibonacci number.
| Name | Type | Description |
| --- | --- | --- |
| `factorial(n)` | Function | Factorial |
| `fibonacci(n)` | Function | Fibonacci |

### Random Number Function
There's a function to generate a random number between two given numbers.
| Name | Type | Description |
| --- | --- | --- |
| `random(a, b)` | Function | Random number |

### Advanced Arithmetic Functions
The library also includes advanced arithmetic functions, such as
| Name | Type | Description |
| --- | --- | --- |
| `log(n, b)` | Function | Logarithm |
| `logBase2(n)` | Function | Base 2 logarithm |
| `logBase5(n)` | Function | Base 5 logarithm |
| `logBase10(n)` | Function | Base 10 logarithm |

### Trigonometric Functions
Finally, the library provides functions to calculate the sine, cosine, tangent, cotangent, secant, and cosecant of a number.
| Name | Type | Description |
| --- | --- | --- |
| `sin(n)` | Function | Sine |
| `cos(n)` | Function | Cosine |
| `tan(n)` | Function | Tangent |
| `cot(n)` | Function | Cotangent |
| `sec(n)` | Function | Secant |
| `csc(n)` | Function | Cosecant |

**Each function is defined using JavaScript's function keyword, and many of them use the ... (spread) syntax to accept any number of arguments. They also use JavaScript's built-in Math object to perform various mathematical operations.**