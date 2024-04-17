"use strict";
;
'use strict';
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
function getUnts(str) {
    str = str.toString();
    const units = str.match(/[a-zA-Z]+/g);
    return units ? units.join('') : '';
}
function getNumericalValue(str) {
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
    add(...n) {
        return n.reduce((a, b) => a + b, 0);
    },
    subtract(...n) {
        return n.reduce((a, b) => a - b);
    },
    multiply(...n) {
        return n.reduce((a, b) => a * b);
    },
    divide(...n) {
        return n.reduce((a, b) => a / b);
    },
    square(n) {
        return n * n;
    },
    cube(n) {
        return n * n * n;
    },
    power(n, e) {
        return Math.pow(n, e);
    },
    root(n, e) {
        return Math.pow(n, 1 / e);
    },
    round(n) {
        return Math.round(n);
    },
    roundUp(n) {
        return Math.ceil(n);
    },
    roundDown(n) {
        return Math.floor(n);
    },
    absolute(n) {
        return Math.abs(n);
    },
    remainder(n, d) {
        return n % d;
    },
    max(...n) {
        return Math.max(...n);
    },
    min(...n) {
        return Math.min(...n);
    },
    sqrt(n) {
        return Math.sqrt(n);
    },
    cbrt(n) {
        return Math.cbrt(n);
    },
    hypotenuse(a, b) {
        return Math.hypot(a, b);
    },
    average(...n) {
        return n.reduce((a, b) => a + b, 0) / n.length;
    },
    //Note: Dependent Function (Dependent on: average)
    mean(...n) {
        return this.average(...n);
    },
    median(...n) {
        n.sort((a, b) => a - b);
        const mid = Math.floor(n.length / 2);
        return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    },
    mode(...n) {
        const count = {};
        n.forEach(e => count[e] = (count[e] || 0) + 1);
        let max = 0, modes = [];
        for (const e in count) {
            if (count[e] > max) {
                modes = [parseInt(e)];
                max = count[e];
            }
            else if (count[e] === max) {
                modes.push(parseInt(e));
            }
        }
        return modes.join(', ');
    },
    range(...n) {
        n.sort((a, b) => a - b);
        return [n[0], n[n.length - 1]].join(', ');
    },
    greatestCommonDivisor(...n) {
        const gcd = (x, y) => !y ? x : gcd(y, x % y);
        return n.reduce((a, b) => gcd(a, b));
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    GCD(...n) {
        return this.greatestCommonDivisor(...n);
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    highestCommonFactor(...n) {
        return this.greatestCommonDivisor(...n);
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    HCF(...n) {
        return this.greatestCommonDivisor(...n);
    },
    leastCommonMultiple(...n) {
        const hcf = (x, y) => !y ? x : hcf(y, x % y);
        const lcm = (x, y) => (x * y) / n.reduce((a, b) => hcf(a, b));
        ;
        return n.reduce((a, b) => lcm(a, b));
    },
    //Note: Dependent Function (Dependent on: leastCommonMultiple)
    LCM(...n) {
        return this.leastCommonMultiple(...n);
    },
    //Comparison Functions
    isEven(n) {
        return n % 2 === 0;
    },
    isOdd(n) {
        return n % 2 !== 0;
    },
    isPositive(n) {
        return n > 0;
    },
    isNegative(n) {
        return n < 0;
    },
    isZero(n) {
        return n === 0;
    },
    isInteger(n) {
        return Number.isInteger(n);
    },
    isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    },
    isPrime(n) {
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
    isComposite(n) {
        if (n == 1) {
            return false;
        }
        return !this.isPrime(n);
    },
    isDivisible(n, d) {
        return n % d === 0;
    },
    isPowerOf(n, e) {
        return Math.log(n) / Math.log(e) % 1 === 0;
    },
    isPerfectSquare(n) {
        return Math.sqrt(n) % 1 === 0;
    },
    isPerfectCube(n) {
        return Math.cbrt(n) % 1 === 0;
    },
    isPerfectPower(n, b) {
        return Math.log(n) / Math.log(b) % 1 === 0;
    },
    isMultiple(n, m) {
        return n % m === 0;
    },
    isFactor(n, f) {
        return f % n === 0;
    },
    isArmstrong(n) {
        return n === n.toString().split('').reduce((a, b) => a + Math.pow(parseInt(b), n.toString().length), 0);
    },
    isPalindrome(n) {
        return n.toString() === n.toString().split('').reverse().join('');
    },
    isFinite(n) {
        return Number.isFinite(n);
    },
    isInfinite(n) {
        return !Number.isFinite(n);
    },
    //Factorial and Fibonacci Functions
    factorial(n) {
        let ans = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    },
    fibonacci(n) {
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
    random(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    },
    //Advanced Arithmetic Functions
    log(n, b) {
        if (b !== undefined) {
            let log = Math.log(n) / Math.log(b);
            return +log.toFixed(2);
        }
        let log = Math.log(n);
        return +log.toFixed(2);
    },
    logBase2(n) {
        return Math.log2(n);
    },
    logBase5(n) {
        return Math.log(n) / Math.log(5);
    },
    logBase10(n) {
        return Math.log10(n);
    },
    //Trigonometric Functions
    sin(n) {
        let sine;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            sine = Math.sin(num * Math.PI / 180);
        }
        else if (getUnts(n) == 'grad') {
            sine = Math.sin(num * Math.PI / 200);
        }
        else if (getUnts(n) == 'rad') {
            sine = Math.sin(num);
        }
        else {
            return 'Invalid Unit';
        }
        return sine.toFixed(2);
    },
    cos(n) {
        let cosine;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            cosine = Math.cos(num * Math.PI / 180);
        }
        else if (getUnts(n) == 'grad') {
            cosine = Math.cos(num * Math.PI / 200);
        }
        else if (getUnts(n) == 'rad') {
            cosine = Math.cos(num);
        }
        else {
            return 'Invalid Unit';
        }
        return cosine.toFixed(2);
    },
    tan(n) {
        let tangent;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            tangent = Math.tan(num * Math.PI / 180);
        }
        else if (getUnts(n) == 'grad') {
            tangent = Math.tan(num * Math.PI / 200);
        }
        else if (getUnts(n) == 'rad') {
            tangent = Math.tan(num);
        }
        else {
            return 'Invalid Unit';
        }
        return tangent.toFixed(2);
    },
    cot(n) {
        let cotangent;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            cotangent = 1 / Math.tan(num * Math.PI / 180);
        }
        else if (getUnts(n) == 'grad') {
            cotangent = 1 / Math.tan(num * Math.PI / 200);
        }
        else if (getUnts(n) == 'rad') {
            cotangent = 1 / Math.tan(num);
        }
        else {
            return 'Invalid Unit';
        }
        return cotangent.toFixed(2);
    },
    sec(n) {
        let secant;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            secant = 1 / Math.cos(num * Math.PI / 180);
        }
        else if (getUnts(n) == 'grad') {
            secant = 1 / Math.cos(num * Math.PI / 200);
        }
        else if (getUnts(n) == 'rad') {
            secant = 1 / Math.cos(num);
        }
        else {
            return 'Invalid Unit';
        }
        return secant.toFixed(2);
    },
    csc(n) {
        let cosecant;
        let num = getNumericalValue(n);
        if (getUnts(n) == 'deg' || getUnts(n) == '' || getUnts(n) == ' ') {
            cosecant = 1 / Math.sin(num * Math.PI / 180);
        }
        else if (getUnts(n) == 'grad') {
            cosecant = 1 / Math.sin(num * Math.PI / 200);
        }
        else if (getUnts(n) == 'rad') {
            cosecant = 1 / Math.sin(num);
        }
        else {
            return 'Invalid Unit';
        }
        return cosecant.toFixed(2);
    },
    //Evaluate Expression Function
    evaluateExpression(e) {
        return Function(`'use strict'; return (${e})`)();
    },
};
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    }
    else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    }
    else if (typeof module === 'object' && typeof module.exports === 'object') {
        // CommonJS and ES6 Modules
        module.exports = factory(); // This line is for CommonJS
        module.exports.default = factory(); // This line is for ES6 default import
    }
    else {
        // Browser globals (root is window)
        root.math = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    return math;
}));
//# sourceMappingURL=math.js.map