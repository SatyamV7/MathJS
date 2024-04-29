"use strict";
/*
    MathJS v1.2.9
    Last Modified: 30/04/2024 <DD/MM/YYYY>
    Author: Satyam Verma <github.com/SatyamV7>
    Description: A JavaScript library for basic and advanced arithmetic operations, Satistical functions, logical functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
    Note: The author is not resposible fo accuracy of the results
    Repository: github.com/SatyamV7/MathJS
    License: MIT License
*/
/*
    Helper Functions
*/
function getUnits(str) {
    str = str.toString();
    const units = str.match(/(?!\b(pi|tau)\b)\b[a-z]+\b/gi);
    math.debuggingMode ? console.log('Units:', units) : null;
    return units ? units.join('') : '';
}
function convertToRadians(n) {
    let num = math.evaluate(n.toString().replace(/(?<![a-zA-Z])(pi|tau)(?![a-zA-Z])|[a-zA-Z]/gi, (match, p1) => p1 ? match : ''), {});
    if (getUnits(n) == 'deg' || getUnits(n) == '') {
        return num * Math.PI / 180;
    }
    else if (getUnits(n) == 'grad') {
        return num * Math.PI / 200;
    }
    else if (getUnits(n) == 'rad') {
        return num;
    }
    else {
        throw new Error('Invalid Unit');
    }
}
const math = {
    // Debugging Mode
    debuggingMode: false,
    /*
        Mathematical Constants
    */
    e: Math.E,
    PI: Math.PI,
    LN2: Math.LN2,
    LN10: Math.LN10,
    TAU: 2 * Math.PI,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    EPSILON: Number.EPSILON,
    PHI: (1 + Math.sqrt(5)) / 2,
    /*
        Basic Arithmetic Functions
    */
    add: (...n) => n.reduce((a, b) => a + b, 0),
    subtract: (...n) => n.reduce((a, b) => a - b),
    multiply: (...n) => n.reduce((a, b) => a * b),
    divide: (...n) => n.reduce((a, b) => a / b),
    remainder: (n, d) => n % d,
    /*
        Statistical Functions
    */
    max: (...n) => Math.max(...n),
    min: (...n) => Math.min(...n),
    average: (...n) => n.reduce((a, b) => a + b, 0) / n.length,
    mean: (...n) => math.average(...n),
    median: (...n) => {
        n.sort((a, b) => a - b);
        const mid = Math.floor(n.length / 2);
        return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    },
    mode: (...n) => {
        let returnType = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1].toString())) {
            returnType = n.pop();
        }
        const count = {};
        n.forEach(e => (count[e] = (count[e] || 0) + 1));
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
        return returnType === 'Str' ? modes.join(', ') : modes;
    },
    range: (...n) => {
        let returnType = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1])) {
            returnType = n.pop();
        }
        const numbers = n.filter((item) => typeof item === 'number');
        numbers.sort((a, b) => a - b);
        const range = [numbers[0], numbers[numbers.length - 1]];
        return returnType === 'Str' ? range.join(', ') : range;
    },
    variance: (...n) => {
        const mean = math.mean(...n);
        return math.mean(...n.map(e => math.square(e - mean)));
    },
    standardDeviation: (...n) => Math.sqrt(math.variance(...n)),
    /*
        Logical Functions
    */
    isEqual: (a, b) => a === b,
    isNearlyEqual: (a, b, epsilon = Number.EPSILON) => Math.abs(a - b) < epsilon,
    isEven: (n) => n % 2 === 0,
    isOdd: (n) => n % 2 !== 0,
    isPositive: (n) => n > 0,
    isNegative: (n) => n < 0,
    isZero: (n) => n === 0,
    isInteger: (n) => Number.isInteger(n),
    isFloat: (n) => Number(n) === n && n % 1 !== 0,
    isPrime: (n) => {
        if (n === 1 || n < 2) {
            return false;
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    },
    isComposite: (n) => !math.isPrime(n),
    isDivisible: (n, d) => n % d === 0,
    isPowerOf: (n, e) => Math.log(n) / Math.log(e) % 1 === 0,
    isPerfectSquare: (n) => Math.sqrt(n) % 1 === 0,
    isPerfectCube: (n) => Math.cbrt(n) % 1 === 0,
    isPerfectPower: (n, b) => Math.log(n) / Math.log(b) % 1 === 0,
    isMultiple: (n, m) => n % m === 0,
    isFactor: (n, f) => f % n === 0,
    isArmstrong: (n) => n === n.toString().split('').reduce((a, b) => a + Math.pow(parseInt(b), n.toString().length), 0),
    isPalindrome: (n) => n.toString() === n.toString().split('').reverse().join(''),
    isFinite: (n) => Number.isFinite(n),
    isInfinite: (n) => !Number.isFinite(n),
    /*
        Factorial and Fibonacci Functions
    */
    factorial: (n) => {
        let int = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            int = int * i;
        return int;
    },
    fibonacci: (n) => {
        let a = 1, b = 0, temp;
        for (; n >= 0; n--) {
            temp = a;
            a = a + b;
            b = temp;
        }
        return b;
    },
    fibonacciSeries: (n, returnType = 'Str') => {
        const series = Array.from({ length: n }, (_, i) => math.fibonacci(i));
        return returnType === 'Str' ? series.join(', ') : series;
    },
    /*
        Random Number Functions
    */
    random: (a, b) => Math.floor(Math.random() * (b - a + 1)) + a,
    /*
        Advanced Arithmetic Functions
    */
    log: (n, b) => {
        if (b !== undefined) {
            const log = Math.log(n) / Math.log(b);
            return +log.toFixed(2);
        }
        const log = Math.log(n);
        return +log.toFixed(2);
    },
    logBase2: (n) => Math.log2(n),
    logBase5: (n) => Math.log(n) / Math.log(5),
    logBase10: (n) => Math.log10(n),
    square: (n) => n ** 2,
    cube: (n) => n ** 3,
    power: (n, e) => n ** e,
    root: (n, e) => n ** (1 / e),
    round: (n) => Math.round(n),
    roundUp: (n) => Math.ceil(n),
    roundDown: (n) => Math.floor(n),
    absolute: (n) => Math.abs(n),
    sqrt: (n) => Math.sqrt(n),
    cbrt: (n) => Math.cbrt(n),
    hypotenuse: (a, b) => Math.hypot(a, b),
    factorsOf: (n, returnType = 'Arr') => {
        const factors = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                factors.push(i);
            }
        }
        return returnType === 'Str' ? factors.join(', ') : factors;
    },
    primeFactorsOf: (n, returnType = 'Arr') => {
        const primeFactors = [];
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                if (!primeFactors.includes(i)) {
                    primeFactors.push(i);
                }
                n /= i;
            }
        }
        return returnType === 'Str' ? primeFactors.join(', ') : primeFactors;
    },
    primeFactorizationOf: (n, returnType = 'Arr') => {
        const factors = [];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }
        if (n > 1) {
            factors.push(n);
        }
        return returnType === 'Str' ? factors.join(', ') : factors;
    },
    greatestCommonDivisor: (...n) => {
        const gcd = (x, y) => (!y ? x : gcd(y, x % y));
        return n.reduce((a, b) => gcd(a, b));
    },
    GCD: (...n) => math.greatestCommonDivisor(...n),
    highestCommonFactor: (...n) => math.greatestCommonDivisor(...n),
    HCF: (...n) => math.greatestCommonDivisor(...n),
    leastCommonMultiple: (...n) => {
        const hcf = (x, y) => (!y ? x : hcf(y, x % y));
        const lcm = (x, y) => (x * y) / n.reduce((a, b) => hcf(a, b));
        return n.reduce((a, b) => lcm(a, b));
    },
    LCM: (...n) => math.leastCommonMultiple(...n),
    /*
        Trigonometric Functions
    */
    sin: (n) => {
        const sine = Math.sin(convertToRadians(n));
        return +sine.toFixed(2);
    },
    cos: (n) => {
        const cosine = Math.cos(convertToRadians(n));
        return +cosine.toFixed(2);
    },
    tan: (n) => {
        const tangent = Math.tan(convertToRadians(n));
        return +tangent.toFixed(2);
    },
    cot: (n) => {
        const cotangent = 1 / Math.tan(convertToRadians(n));
        return +cotangent.toFixed(2);
    },
    sec: (n) => {
        const secant = 1 / Math.cos(convertToRadians(n));
        return +secant.toFixed(2);
    },
    csc: (n) => {
        const cosecant = 1 / Math.sin(convertToRadians(n));
        return +cosecant.toFixed(2);
    },
    asin: (n) => {
        const arcsine = Math.asin(convertToRadians(n));
        return +arcsine.toFixed(2);
    },
    acos: (n) => {
        const arccosine = Math.acos(convertToRadians(n));
        return +arccosine.toFixed(2);
    },
    atan: (n) => {
        const arctangent = Math.atan(convertToRadians(n));
        return +arctangent.toFixed(2);
    },
    acot: (n) => {
        const arccotangent = 1 / Math.atan(convertToRadians(n));
        return +arccotangent.toFixed(2);
    },
    asec: (n) => {
        const arcsecant = 1 / Math.acos(convertToRadians(n));
        return +arcsecant.toFixed(2);
    },
    acsc: (n) => {
        const arccosecant = 1 / Math.asin(convertToRadians(n));
        return +arccosecant.toFixed(2);
    },
    sinh: (n) => {
        const hyperbolicSine = Math.sinh(convertToRadians(n));
        return +hyperbolicSine.toFixed(2);
    },
    cosh: (n) => {
        const hyperbolicCosine = Math.cosh(convertToRadians(n));
        return +hyperbolicCosine.toFixed(2);
    },
    tanh: (n) => {
        const hyperbolicTangent = Math.tanh(convertToRadians(n));
        return +hyperbolicTangent.toFixed(2);
    },
    coth: (n) => {
        const hyperbolicCotangent = 1 / Math.tanh(convertToRadians(n));
        return +hyperbolicCotangent.toFixed(2);
    },
    sech: (n) => {
        const hyperbolicSecant = 1 / Math.cosh(convertToRadians(n));
        return +hyperbolicSecant.toFixed(2);
    },
    csch: (n) => {
        const hyperbolicCosecant = 1 / Math.sinh(convertToRadians(n));
        return +hyperbolicCosecant.toFixed(2);
    },
    asinh: (n) => {
        const hyperbolicArcsine = Math.asinh(convertToRadians(n));
        return +hyperbolicArcsine.toFixed(2);
    },
    acosh: (n) => {
        const hyperbolicArccosine = Math.acosh(convertToRadians(n));
        return +hyperbolicArccosine.toFixed(2);
    },
    atanh: (n) => {
        const hyperbolicArctangent = Math.atanh(convertToRadians(n));
        return +hyperbolicArctangent.toFixed(2);
    },
    acoth: (n) => {
        const hyperbolicArccotangent = 1 / Math.atanh(convertToRadians(n));
        return +hyperbolicArccotangent.toFixed(2);
    },
    asech: (n) => {
        const hyperbolicArcsecant = 1 / Math.acosh(convertToRadians(n));
        return +hyperbolicArcsecant.toFixed(2);
    },
    acsch: (n) => {
        const hyperbolicArccosecant = 1 / Math.asinh(convertToRadians(n));
        return +hyperbolicArccosecant.toFixed(2);
    },
    /*
        Evaluate Function
    */
    evaluate: (expression, variables) => {
        try {
            if (typeof expression !== 'string') {
                throw new Error('Expression must be a string');
            }
            if (variables) {
                for (let variable in variables) {
                    const regex = new RegExp('\\b' + variable + '\\b', 'g');
                    expression = expression.replace(regex, variables[variable].toString());
                }
            }
            expression = expression
                .replace(/\^/g, '**')
                .replace(/÷/g, '/')
                .replace(/×/g, '*')
                .replace(/\bpi\b/gi, '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679')
                .replace(/\btau\b/gi, '6.2831853071795864769252867665590057683943387987502116419498891846156328125724179972560696506842341358');
            for (let method in math) {
                if (method !== 'pi' && method !== 'tau') {
                    const regex = new RegExp(`\\b${method}\\b`, 'g');
                    expression = expression.replace(regex, `math['${method}']`);
                }
            }
            const allowedCharactersRegex = /^[\d\s+\-*/()a-zA-Z"''\[\].,]+$/;
            for (let i = 0; i < expression.length; i++) {
                if (!allowedCharactersRegex.test(expression[i])) {
                    throw new Error(`Expression contains disallowed character: ${expression[i]} at character position: ${i} in expression: ${expression}`);
                }
            }
            math.debuggingMode ? console.log('Expression:', expression) : null;
            return Function('math', `'use strict'; return (${expression})`)(math);
        }
        catch (error) {
            throw new Error('Error occurred while evaluating the expression: ' + error);
        }
    },
    /*
        Chain Handler
    */
    chain: (initialValue) => {
        let result = initialValue;
        const chained = {};
        for (const method in math) {
            if (typeof math[method] === 'function' && method !== 'chain') {
                chained[method] = (...args) => {
                    try {
                        if (typeof result === 'number') {
                            result = math[method](result, ...args);
                        }
                    }
                    catch (error) {
                        console.error(`Error executing method ${method}:`, error);
                    }
                    return chained;
                };
            }
        }
        chained.result = () => {
            return result;
        };
        if (typeof initialValue === 'number') {
            return chained;
        }
        else {
            throw new Error('Initial value must be a number');
        }
    }
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