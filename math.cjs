//MathJS v0.0.3
//Last Modified: 06/03/2024 <DD/MM/YYYY>
//Author: Satyam Verma <github.com/SatyamV7>
//Description: A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
//Note: The author is not resposible fo accuracy of the results
//Repository: github.com/MTSOSS/MathJS
//License: MIT License

//Mathematical Constants
const e = Math.E;
const PI = Math.PI;
const LN2 = Math.LN2;
const LN10 = Math.LN10;
const i = Math.sqrt(-1);
const TAU = 2 * Math.PI;
const LOG2E = Math.LOG2E;
const LOG10E = Math.LOG10E;
const EPSILON = Number.EPSILON;
const PHI = (1 + Math.sqrt(5)) / 2;

//Basic Arithmetic Functions
function add(...n) { //Add all parameters
    return n.reduce((a, b) => a + b, 0);
}

function subtract(...n) { //Subtract all parameters
    return n.reduce((a, b) => a - b);
}

function multiply(...n) { //Multiply all parameters
    return n.reduce((a, b) => a * b);
}

function divide(...n) { //Divide all parameters
    return n.reduce((a, b) => a / b);
}

function square(n) { //Square the parameter
    return n * n;
}

function cube(n) { //Cube the parameter
    return n * n * n;
}

function power(n, e) { //Raise the parameter to the exponent
    return Math.pow(n, e);
}

function root(n, e) { //Return the nth root of the parameter
    return Math.pow(n, 1 / e);
}

function round(n) { //Round the parameter
    return Math.round(n);
}

function roundUp(n) { //Round the parameter up
    return Math.ceil(n);
}

function roundDown(n) { //Round the parameter down
    return Math.floor(n);
}

function absolute(n) { //Return the absolute value of the parameter
    return Math.abs(n);
}

function remainder(n, d) { //Return the remainder of the parameter divided by the divisor
    return n % d;
}

function max(...n) { //Return the maximum of the parameters
    return Math.max(...n);
}

function min(...n) { //Return the minimum of the parameters
    return Math.min(...n);
}

function sqrt(n) { //Return the square root of the parameter
    return Math.sqrt(n);
}

function cbrt(n) { //Return the cube root of the parameter
    return Math.cbrt(n);
}

function hypotenuse(a, b) { //Return the hypotenuse of a right-angled triangle given the other two sides
    return Math.hypot(a, b);
}

function average(...n) { //Return the average of the parameters
    return n.reduce((a, b) => a + b, 0) / n.length;
}

function mean(...n) { //Return the mean of the parameters
    return average(...n);
}

function median(...n) { //Return the median of the parameters
    n.sort((a, b) => a - b);
    const mid = Math.floor(n.length / 2);
    return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
}

function mode(...n) { //Return the mode of the parameters
    const count = {};
    n.forEach(e => count[e] = (count[e] || 0) + 1);
    let max = 0, modes = [];
    for (const e in count) {
        if (count[e] > max) {
            modes = [e];
            max = count[e];
        } else if (count[e] === max) {
            modes.push(e);
        }
    }
    return modes;
}

function range(...n) { //Return the range of the parameters
    n.sort((a, b) => a - b);
    return [n[0], n[n.length - 1]];
}

function greatestCommonDivisor(...n) { //Return the greatest common divisor of the parameters
    const gcd = (x, y) => !y ? x : gcd(y, x % y);
    return n.reduce((a, b) => gcd(a, b));
}

//Note: Dependent Function (Dependent on: greatestCommonDivisor)
function highestCommonFactor(...n) { //Return the highest common factor of the parameters
    return greatestCommonDivisor(...n);
}

function leastCommonMultiple(...n) { //Return the least common multiple of the parameters
    const hcf = (x, y) => !y ? x : hcf(y, x % y);
    const lcm = (x, y) => (x * y) / n.reduce((a, b) => hcf(a, b));;
    return n.reduce((a, b) => lcm(a, b));
}

//Comparison Functions
function isEven(n) { //Return true if the parameter is even
    return n % 2 === 0;
}

function isOdd(n) { //Return true if the parameter is odd
    return n % 2 !== 0;
}

function isPrime(n) { //Return true if the parameter is a prime number
    if (n == 1) {
        return false;
    }
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function isComposite(n) { //Return true if the parameter is a composite number
    if (n == 1) {
        return false;
    }
    return !isPrime(n);
}

function isFinite(n) { //Return true if the parameter is a finite number
    return Number.isFinite(n);
}

//Factorial and Fibonacci Functions
function factorial(n) { //Return the factorial of the parameter
    let ans = 1;
    if (n === 0)
        return 1;
    for (let i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

function fibonacci(n) { //Return the nth Fibonacci number
    let a = 1, b = 0, temp;
    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
}

//Random Number Functions
function random(a, b) { //Return a random number between a and b
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

//Advanced Arithmetic Functions
function log(n, b) { //Return the natural logarithm of the parameter w.r.t. the base
    if (b !== undefined) {
        let log = Math.log(n) / Math.log(b);
        return log.toFixed(2);
    }
    let log = Math.log(n);
    return log.toFixed(2);
}

function logBase2(n) { //Return the base 2 logarithm of the parameter
    return Math.log2(n);
}

function logBase5(n) { //Return the base 5 logarithm of the parameter
    return Math.log(n) / Math.log(5);
}

function logBase10(n) { //Return the base 10 logarithm of the parameter
    return Math.log10(n);
}

//Trigonometric Functions
function sin(n) { //Return the sine of the parameter till 2 decimal places
    let sine = Math.sin(n * Math.PI / 180);
    return sine.toFixed(2);
}

function cos(n) { //Return the cosine of the parameter till 2 decimal places
    let cosine = Math.cos(n * Math.PI / 180);
    return cosine.toFixed(2);
}

function tan(n) { //Return the tangent of the parameter till 2 decimal places
    let tangent = Math.tan(n * Math.PI / 180);
    return tangent.toFixed(2);
}

function cot(n) { //Return the cotangent of the parameter till 2 decimal places
    let cotangent = 1 / Math.tan(n * Math.PI / 180);
    return cotangent.toFixed(2);
}

function sec(n) { //Return the secant of the parameter till 2 decimal places
    let secant = 1 / Math.cos(n * Math.PI / 180);
    return secant.toFixed(2);
}

function csc(n) { //Return the cosecant of the parameter till 2 decimal places
    let cosecant = 1 / Math.sin(n * Math.PI / 180);
    return cosecant.toFixed(2);
}

module.exports = { e, PI, LN2, LN10, i, TAU, LOG2E, LOG10E, EPSILON, PHI, add, subtract, multiply, divide, square, cube, power, root, round, roundUp, roundDown, absolute, remainder, max, min, sqrt, cbrt, hypotenuse, average, mean, median, mode, range, greatestCommonDivisor, highestCommonFactor, leastCommonMultiple, isEven, isOdd, isPrime, isComposite, isFinite, factorial, fibonacci, random, log, logBase2, logBase5, logBase10, sin, cos, tan, cot, sec, csc };