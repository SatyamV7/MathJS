; 'use strict';
/*
MathJS v1.0.7
Last Modified: 17/04/2024 <DD/MM/YYYY>
Author: Satyam Verma <github.com/SatyamV7>
Description: A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
Note: The author is not resposible fo accuracy of the results
Repository: github.com/MTSOSS/MathJS
License: MIT License
*/

//Helper Functions
function getUnts(str: string): string {
    str = str.toString();
    const units = str.match(/[a-zA-Z]+/g);
    return units ? units.join('') : '';
}

function getNumericalValue(str: string): number {
    str = str.toString();
    const numericalValue = str.match(/\d+/);
    return numericalValue ? +numericalValue[0] : 0;
}

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
    add(...n: number[]): number { //Add all parameters
        return n.reduce((a, b) => a + b, 0);
    },

    subtract(...n: number[]): number { //Subtract all parameters
        return n.reduce((a, b) => a - b);
    },

    multiply(...n: number[]): number { //Multiply all parameters
        return n.reduce((a, b) => a * b);
    },

    divide(...n: number[]): number { //Divide all parameters
        return n.reduce((a, b) => a / b);
    },

    square(n: number): number { //Square the parameter
        return n * n;
    },

    cube(n: number): number { //Cube the parameter
        return n * n * n;
    },

    power(n: number, e: number): number { //Raise the parameter to the exponent
        return Math.pow(n, e);
    },

    root(n: number, e: number): number { //Return the nth root of the parameter
        return Math.pow(n, 1 / e);
    },

    round(n: number): number { //Round the parameter
        return Math.round(n);
    },

    roundUp(n: number): number { //Round the parameter up
        return Math.ceil(n);
    },

    roundDown(n: number): number { //Round the parameter down
        return Math.floor(n);
    },

    absolute(n: number): number { //Return the absolute value of the parameter
        return Math.abs(n);
    },

    remainder(n: number, d: number): number { //Return the remainder of the parameter divided by the divisor
        return n % d;
    },

    max(...n: number[]): number { //Return the maximum of the parameters
        return Math.max(...n);
    },

    min(...n: number[]): number { //Return the minimum of the parameters
        return Math.min(...n);
    },

    sqrt(n: number): number { //Return the square root of the parameter
        return Math.sqrt(n);
    },

    cbrt(n: number): number { //Return the cube root of the parameter
        return Math.cbrt(n);
    },

    hypotenuse(a: number, b: number): number { //Return the hypotenuse of a right-angled triangle given the other two sides
        return Math.hypot(a, b);
    },

    average(...n: number[]): number { //Return the average of the parameters
        return n.reduce((a, b) => a + b, 0) / n.length;
    },

    //Note: Dependent Function (Dependent on: average)
    mean(...n: number[]): number { //Return the mean of the parameters
        return this.average(...n);
    },

    median(...n: number[]): number { //Return the median of the parameters
        n.sort((a, b) => a - b);
        const mid = Math.floor(n.length / 2);
        return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    },

    mode(...n: number[]): string { //Return the mode of the parameters
        const count: { [key: number]: number } = {};
        n.forEach(e => count[e] = (count[e] || 0) + 1);
        let max = 0, modes: number[] = [];
        for (const e in count) {
            if (count[e] > max) {
                modes = [parseInt(e)];
                max = count[e];
            } else if (count[e] === max) {
                modes.push(parseInt(e));
            }
        }
        return modes.join(', ');
    },

    range(...n: number[]): string { //Return the range of the parameters
        n.sort((a, b) => a - b);
        return [n[0], n[n.length - 1]].join(', ');
    },

    greatestCommonDivisor(...n: number[]): number { //Return the greatest common divisor of the parameters
        const gcd = (x: number, y: number): number => !y ? x : gcd(y, x % y);
        return n.reduce((a, b) => gcd(a, b));
    },

    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    GCD(...n: number[]): number { //Return the highest common factor of the parameters
        return this.greatestCommonDivisor(...n);
    },

    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    highestCommonFactor(...n: number[]): number { //Return the highest common factor of the parameters
        return this.greatestCommonDivisor(...n);
    },

    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    HCF(...n: number[]): number { //Return the highest common factor of the parameters
        return this.greatestCommonDivisor(...n);
    },

    leastCommonMultiple(...n: number[]): number { //Return the least common multiple of the parameters
        const hcf = (x: number, y: number): number => !y ? x : hcf(y, x % y);
        const lcm = (x: number, y: number): number => (x * y) / n.reduce((a, b) => hcf(a, b));;
        return n.reduce((a, b) => lcm(a, b));
    },

    //Note: Dependent Function (Dependent on: leastCommonMultiple)
    LCM(...n: number[]): number { //Return the highest common factor of the parameters
        return this.leastCommonMultiple(...n);
    },

    //Comparison Functions
    isEven(n: number): boolean { //Return true if the parameter is even
        return n % 2 === 0;
    },

    isOdd(n: number): boolean { //Return true if the parameter is odd
        return n % 2 !== 0;
    },

    isPositive(n: number): boolean { //Return true if the parameter is positive
        return n > 0;
    },

    isNegative(n: number): boolean { //Return true if the parameter is negative
        return n < 0;
    },

    isZero(n: number): boolean { //Return true if the parameter is zero
        return n === 0;
    },

    isInteger(n: number): boolean { //Return true if the parameter is an integer
        return Number.isInteger(n);
    },

    isFloat(n: number): boolean { //Return true if the parameter is a float
        return Number(n) === n && n % 1 !== 0;
    },

    isPrime(n: number): boolean { //Return true if the parameter is a prime number
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

    isComposite(n: number): boolean { //Return true if the parameter is a composite number
        if (n == 1) {
            return false;
        }
        return !this.isPrime(n);
    },

    isDivisible(n: number, d: number): boolean { //Return true if the parameter is divisible by the divisor
        return n % d === 0;
    },

    isPowerOf(n: number, e: number): boolean { //Return true if the parameter is a power of the exponent
        return Math.log(n) / Math.log(e) % 1 === 0;
    },

    isPerfectSquare(n: number): boolean { //Return true if the parameter is a perfect square
        return Math.sqrt(n) % 1 === 0;
    },

    isPerfectCube(n: number): boolean { //Return true if the parameter is a perfect cube
        return Math.cbrt(n) % 1 === 0;
    },

    isPerfectPower(n: number, b: number): boolean { //Return true if the parameter is a perfect power of the exponent
        return Math.log(n) / Math.log(b) % 1 === 0;
    },

    isMultiple(n: number, m: number): boolean { //Return true if the parameter is a multiple of the number
        return n % m === 0;
    },

    isFactor(n: number, f: number): boolean { //Return true if the parameter is a factor of the number
        return f % n === 0;
    },

    isArmstrong(n: number): boolean { //Return true if the parameter is an Armstrong number
        return n === n.toString().split('').reduce((a, b) => a + Math.pow(parseInt(b), n.toString().length), 0);
    },

    isPalindrome(n: number): boolean { //Return true if the parameter is a palindrome
        return n.toString() === n.toString().split('').reverse().join('');
    },

    isFinite(n: number): boolean { //Return true if the parameter is a finite number
        return Number.isFinite(n);
    },

    isInfinite(n: number): boolean { //Return true if the parameter is an infinite number
        return !Number.isFinite(n);
    },

    //Factorial and Fibonacci Functions
    factorial(n: number): number { //Return the factorial of the parameter
        let ans = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    },

    fibonacci(n: number): number { //Return the nth Fibonacci number
        let a = 1, b = 0, temp: number;
        while (n >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            n--;
        }
        return b;
    },

    //Random Number Functions
    random(a: number, b: number): number { //Return a random number between a and b
        return Math.floor(Math.random() * (b - a + 1)) + a;
    },

    //Advanced Arithmetic Functions
    log(n: number, b?: number): number { //Return the natural logarithm of the parameter w.r.t. the base
        if (b !== undefined) {
            let log = Math.log(n) / Math.log(b);
            return +log.toFixed(2);
        }
        let log = Math.log(n);
        return +log.toFixed(2);
    },

    logBase2(n: number): number { //Return the base 2 logarithm of the parameter
        return Math.log2(n);
    },

    logBase5(n: number): number { //Return the base 5 logarithm of the parameter
        return Math.log(n) / Math.log(5);
    },

    logBase10(n: number): number { //Return the base 10 logarithm of the parameter
        return Math.log10(n);
    },

    //Trigonometric Functions
    sin(n: string): string { //Return the sine of the parameter till 2 decimal places
        let sine: number;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            sine = Math.sin(num * Math.PI / 180);
        } else if (getUnts(n) == 'grad') {
            sine = Math.sin(num * Math.PI / 200);
        } else if (getUnts(n) == 'rad') {
            sine = Math.sin(num);
        }
        else { return 'Invalid Unit' }
        return sine.toFixed(2);
    },

    cos(n: string): string { //Return the cosine of the parameter till 2 decimal places
        let cosine: number;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            cosine = Math.cos(num * Math.PI / 180);
        } else if (getUnts(n) == 'grad') {
            cosine = Math.cos(num * Math.PI / 200);
        } else if (getUnts(n) == 'rad') {
            cosine = Math.cos(num);
        }
        else { return 'Invalid Unit' }
        return cosine.toFixed(2);
    },

    tan(n: string): string { //Return the tangent of the parameter till 2 decimal places
        let tangent: number;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            tangent = Math.tan(num * Math.PI / 180);
        } else if (getUnts(n) == 'grad') {
            tangent = Math.tan(num * Math.PI / 200);
        } else if (getUnts(n) == 'rad') {
            tangent = Math.tan(num);
        }
        else { return 'Invalid Unit' }
        return tangent.toFixed(2);
    },

    cot(n: string): string { //Return the cotangent of the parameter till 2 decimal places
        let cotangent: number;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            cotangent = 1 / Math.tan(num * Math.PI / 180);
        } else if (getUnts(n) == 'grad') {
            cotangent = 1 / Math.tan(num * Math.PI / 200);
        } else if (getUnts(n) == 'rad') {
            cotangent = 1 / Math.tan(num);
        }
        else { return 'Invalid Unit' }
        return cotangent.toFixed(2);
    },

    sec(n: string): string { //Return the secant of the parameter till 2 decimal places
        let secant: number;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            secant = 1 / Math.cos(num * Math.PI / 180);
        } else if (getUnts(n) == 'grad') {
            secant = 1 / Math.cos(num * Math.PI / 200);
        } else if (getUnts(n) == 'rad') {
            secant = 1 / Math.cos(num);
        }
        else { return 'Invalid Unit' }
        return secant.toFixed(2);
    },

    csc(n: string): string { //Return the cosecant of the parameter till 2 decimal places
        let cosecant: number;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            cosecant = 1 / Math.sin(num * Math.PI / 180);
        } else if (getUnts(n) == 'grad') {
            cosecant = 1 / Math.sin(num * Math.PI / 200);
        } else if (getUnts(n) == 'rad') {
            cosecant = 1 / Math.sin(num);
        }
        else { return 'Invalid Unit' }
        return cosecant.toFixed(2);
    },

    //Evaluate Expression Function
    evaluateExpression(e: string): any { //Evaluate the given expression
        return Function(`'use strict'; return (${e})`)();
    },
};

// Export the math object for different environments

declare var module: any;

declare var exports: any;

declare var define: {
    (id: string[], factory: () => any): void;
    amd: any;
};

(function (root: any, factory: any) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // CommonJS and ES6 Modules
        module.exports = factory(); // This line is for CommonJS
        module.exports.default = factory(); // This line is for ES6 default import
    } else {
        // Browser globals (root is window)
        root.math = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    return math;
}));
