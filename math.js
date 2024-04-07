; 'use strict';
//MathJS v1.0.2
//Last Modified: 07/04/2024 <DD/MM/YYYY>
//Author: Satyam Verma <github.com/SatyamV7>
//Description: A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
//Note: The author is not resposible fo accuracy of the results
//Repository: github.com/MTSOSS/MathJS
//License: MIT License

const math = {
    // Mathematical Constants
    e: Math.E,
    PI: Math.PI,
    LN2: Math.LN2,
    LN10: Math.LN10,
    TAU: 2 * Math.PI,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    EPSILON: Number.EPSILON,
    PHI: (1 + Math.sqrt(5)) / 2,

    //Basic Arithmetic Functions
    add(...n) { //Add all parameters
        return n.reduce((a, b) => a + b, 0);
    },

    subtract(...n) { //Subtract all parameters
        return n.reduce((a, b) => a - b);
    },

    multiply(...n) { //Multiply all parameters
        return n.reduce((a, b) => a * b);
    },

    divide(...n) { //Divide all parameters
        return n.reduce((a, b) => a / b);
    },

    square(n) { //Square the parameter
        return n * n;
    },

    cube(n) { //Cube the parameter
        return n * n * n;
    },

    power(n, e) { //Raise the parameter to the exponent
        return Math.pow(n, e);
    },

    root(n, e) { //Return the nth root of the parameter
        return Math.pow(n, 1 / e);
    },

    round(n) { //Round the parameter
        return Math.round(n);
    },

    roundUp(n) { //Round the parameter up
        return Math.ceil(n);
    },

    roundDown(n) { //Round the parameter down
        return Math.floor(n);
    },

    absolute(n) { //Return the absolute value of the parameter
        return Math.abs(n);
    },

    remainder(n, d) { //Return the remainder of the parameter divided by the divisor
        return n % d;
    },

    max(...n) { //Return the maximum of the parameters
        return Math.max(...n);
    },

    min(...n) { //Return the minimum of the parameters
        return Math.min(...n);
    },

    sqrt(n) { //Return the square root of the parameter
        return Math.sqrt(n);
    },

    cbrt(n) { //Return the cube root of the parameter
        return Math.cbrt(n);
    },

    hypotenuse(a, b) { //Return the hypotenuse of a right-angled triangle given the other two sides
        return Math.hypot(a, b);
    },

    average(...n) { //Return the average of the parameters
        return n.reduce((a, b) => a + b, 0) / n.length;
    },

    //Note: Dependent Function (Dependent on: average)
    mean(...n) { //Return the mean of the parameters
        return this.average(...n);
    },

    median(...n) { //Return the median of the parameters
        n.sort((a, b) => a - b);
        const mid = Math.floor(n.length / 2);
        return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    },

    mode(...n) { //Return the mode of the parameters
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
    },

    range(...n) { //Return the range of the parameters
        n.sort((a, b) => a - b);
        return [n[0], n[n.length - 1]];
    },

    greatestCommonDivisor(...n) { //Return the greatest common divisor of the parameters
        const gcd = (x, y) => !y ? x : gcd(y, x % y);
        return n.reduce((a, b) => gcd(a, b));
    },

    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    highestCommonFactor(...n) { //Return the highest common factor of the parameters
        return this.greatestCommonDivisor(...n);
    },

    leastCommonMultiple(...n) { //Return the least common multiple of the parameters
        const hcf = (x, y) => !y ? x : hcf(y, x % y);
        const lcm = (x, y) => (x * y) / n.reduce((a, b) => hcf(a, b));;
        return n.reduce((a, b) => lcm(a, b));
    },

    //Comparison Functions
    isEven(n) { //Return true if the parameter is even
        return n % 2 === 0;
    },

    isOdd(n) { //Return true if the parameter is odd
        return n % 2 !== 0;
    },

    isPrime(n) { //Return true if the parameter is a prime number
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
    },

    isComposite(n) { //Return true if the parameter is a composite number
        if (n == 1) {
            return false;
        }
        return !isPrime(n);
    },

    isFinite(n) { //Return true if the parameter is a finite number
        return Number.isFinite(n);
    },

    //Factorial and Fibonacci Functions
    factorial(n) { //Return the factorial of the parameter
        let ans = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    },

    fibonacci(n) { //Return the nth Fibonacci number
        let a = 1, b = 0, temp;
        while (n >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            n--;
        }
        return b;
    },

    //Random Number Functions
    random(a, b) { //Return a random number between a and b
        return Math.floor(Math.random() * (b - a + 1)) + a;
    },

    //Advanced Arithmetic Functions
    log(n, b) { //Return the natural logarithm of the parameter w.r.t. the base
        if (b !== undefined) {
            let log = Math.log(n) / Math.log(b);
            return log.toFixed(2);
        }
        let log = Math.log(n);
        return log.toFixed(2);
    },

    logBase2(n) { //Return the base 2 logarithm of the parameter
        return Math.log2(n);
    },

    logBase5(n) { //Return the base 5 logarithm of the parameter
        return Math.log(n) / Math.log(5);
    },

    logBase10(n) { //Return the base 10 logarithm of the parameter
        return Math.log10(n);
    },

    //Trigonometric Functions
    sin(n) { //Return the sine of the parameter till 2 decimal places
        let sine = Math.sin(n * Math.PI / 180);
        return sine.toFixed(2);
    },

    cos(n) { //Return the cosine of the parameter till 2 decimal places
        let cosine = Math.cos(n * Math.PI / 180);
        return cosine.toFixed(2);
    },

    tan(n) { //Return the tangent of the parameter till 2 decimal places
        let tangent = Math.tan(n * Math.PI / 180);
        return tangent.toFixed(2);
    },

    cot(n) { //Return the cotangent of the parameter till 2 decimal places
        let cotangent = 1 / Math.tan(n * Math.PI / 180);
        return cotangent.toFixed(2);
    },

    sec(n) { //Return the secant of the parameter till 2 decimal places
        let secant = 1 / Math.cos(n * Math.PI / 180);
        return secant.toFixed(2);
    },

    csc(n) { //Return the cosecant of the parameter till 2 decimal places
        let cosecant = 1 / Math.sin(n * Math.PI / 180);
        return cosecant.toFixed(2);
    },

    //Evaluate Expression Function
    evaluateExpression(e) { //Evaluate the given expression
        return Function(`'use strict'; return (${e})`)();
    },
};

// Export the math object for different environments
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () { return math; });
} else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = math;
} else {
    // Browser global
    window.math = math;
}