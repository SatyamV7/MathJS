"use strict";
/*
    MathJS v1.2.7
    Last Modified: 28/04/2024 <DD/MM/YYYY>
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
    add(...n) {
        return n.reduce((a, b) => a + b, 0);
    },
    //Note: Dependent Function (Dependent on: add)
    sum(...n) {
        return this.add(...n);
    },
    subtract(...n) {
        return n.reduce((a, b) => a - b);
    },
    //Note: Dependent Function (Dependent on: subtract)
    difference(...n) {
        return this.subtract(...n);
    },
    multiply(...n) {
        return n.reduce((a, b) => a * b);
    },
    //Note: Dependent Function (Dependent on: multiply)
    product(...n) {
        return this.multiply(...n);
    },
    divide(...n) {
        return n.reduce((a, b) => a / b);
    },
    //Note: Dependent Function (Dependent on: divide)
    quotient(...n) {
        return this.divide(...n);
    },
    remainder(n, d) {
        return n % d;
    },
    /*
        Statistical Functions
    */
    max(...n) {
        return Math.max(...n);
    },
    min(...n) {
        return Math.min(...n);
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
        let returnType = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1].toString())) {
            returnType = n.pop();
        }
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
        return returnType === 'Str' ? modes.join(', ') : modes;
    },
    range(...n) {
        let returnType = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1])) {
            returnType = n.pop();
        }
        const numbers = n.filter((item) => typeof item === 'number');
        numbers.sort((a, b) => a - b);
        const range = [numbers[0], numbers[numbers.length - 1]];
        return returnType === 'Str' ? range.join(', ') : range;
    },
    variance(...n) {
        const mean = this.mean(...n);
        return this.mean(...n.map(e => this.square(e - mean)));
    },
    standardDeviation(...n) {
        return Math.sqrt(this.variance(...n));
    },
    /*
        Logical Functions
    */
    isEqual(a, b) {
        return a === b;
    },
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
    //Note: Dependent Function (Dependent on: isPrime)
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
    /*
        Factorial and Fibonacci Functions
    */
    factorial(n) {
        let int = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            int = int * i;
        return int;
    },
    fibonacci(n) {
        let a = 1, b = 0, temp;
        for (; n >= 0; n--) {
            temp = a;
            a = a + b;
            b = temp;
        }
        return b;
    },
    //Note: Dependent Function (Dependent on: fibonacci)
    fibonacciSeries(n, returnType = 'Str') {
        let series = [];
        for (let i = 0; i < n; i++) {
            series.push(this.fibonacci(i));
        }
        return returnType === 'Str' ? series.join(', ') : series;
    },
    /*
        Random Number Functions
    */
    random(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    },
    /*
        Advanced Arithmetic Functions
    */
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
    square(n) {
        return n * n;
    },
    cube(n) {
        return n * n * n;
    },
    power(n, e) {
        return Math.pow(n, e);
    },
    nthPower(n, e) {
        return Math.pow(n, e);
    },
    root(n, e) {
        return Math.pow(n, 1 / e);
    },
    nthRoot(n, e) {
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
    sqrt(n) {
        return Math.sqrt(n);
    },
    cbrt(n) {
        return Math.cbrt(n);
    },
    hypotenuse(a, b) {
        return Math.hypot(a, b);
    },
    factorsOf(n, returnType = 'Arr') {
        const factors = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                factors.push(i);
            }
        }
        return returnType === 'Str' ? factors.join(', ') : factors;
    },
    primeFactorsOf(n, returnType = 'Arr') {
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
    primeFactorizationOf(n, returnType = 'Arr') {
        let factors = [];
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
    /*
        Trigonometric Functions
    */
    sin(n) {
        let sine = Math.sin(convertToRadians(n));
        return +sine.toFixed(2);
    },
    cos(n) {
        let cosine = Math.cos(convertToRadians(n));
        return +cosine.toFixed(2);
    },
    tan(n) {
        let tangent = Math.tan(convertToRadians(n));
        return +tangent.toFixed(2);
    },
    cot(n) {
        let cotangent = 1 / Math.tan(convertToRadians(n));
        return +cotangent.toFixed(2);
    },
    sec(n) {
        let secant = 1 / Math.cos(convertToRadians(n));
        return +secant.toFixed(2);
    },
    csc(n) {
        let cosecant = 1 / Math.sin(convertToRadians(n));
        return +cosecant.toFixed(2);
    },
    asin(n) {
        let arcsine = Math.asin(n) * 180 / Math.PI;
        return +arcsine.toFixed(2);
    },
    acos(n) {
        let arccosine = Math.acos(n) * 180 / Math.PI;
        return +arccosine.toFixed(2);
    },
    atan(n) {
        let arctangent = Math.atan(n) * 180 / Math.PI;
        return +arctangent.toFixed(2);
    },
    acot(n) {
        let arccotangent = Math.atan(1 / n) * 180 / Math.PI;
        return +arccotangent.toFixed(2);
    },
    asec(n) {
        let arcsecant = Math.acos(1 / n) * 180 / Math.PI;
        return +arcsecant.toFixed(2);
    },
    acsc(n) {
        let arccosecant = Math.asin(1 / n) * 180 / Math.PI;
        return +arccosecant.toFixed(2);
    },
    sinh(n) {
        return Math.sinh(n);
    },
    cosh(n) {
        return Math.cosh(n);
    },
    tanh(n) {
        return Math.tanh(n);
    },
    coth(n) {
        return 1 / Math.tanh(n);
    },
    sech(n) {
        return 1 / Math.cosh(n);
    },
    csch(n) {
        return 1 / Math.sinh(n);
    },
    asinh(n) {
        return Math.asinh(n);
    },
    acosh(n) {
        return Math.acosh(n);
    },
    atanh(n) {
        return Math.atanh(n);
    },
    acoth(n) {
        return Math.atanh(1 / n);
    },
    asech(n) {
        return Math.acosh(1 / n);
    },
    acsch(n) {
        return Math.asinh(1 / n);
    },
    /*
        evaluateExpression Function
    */
    evaluateExpression(expression, variables) {
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
            // Regular expression to match allowed mathematical operators and functions
            const allowedCharactersRegex = /^[\d\s+\-*/()a-zA-Z"''\[\].,]+$/;
            // Check if the expression contains only allowed characters
            for (let i = 0; i < expression.length; i++) {
                if (!allowedCharactersRegex.test(expression[i])) {
                    throw new Error(`Expression contains disallowed character: ${expression[i]} at character position: ${i} in expression: ${expression}`);
                }
            }
            this.debuggingMode ? console.log('Expression:', expression) : null;
            return Function('math', `'use strict'; return (${expression})`)(math);
        }
        catch (error) {
            throw new Error('Error occurred while evaluating the expression: ' + error);
        }
    },
    //Note: Dependent Function (Dependent on: evaluateExpression)
    evaluate(expression, variables) {
        return this.evaluateExpression(expression, variables);
    },
    /*
        Chain Handler
    */
    chain(initialValue) {
        let result = initialValue;
        const chained = {};
        // Iterate over properties of math object
        for (const method in math) {
            // Check if the property is a function and not the chain method itself
            if (typeof math[method] === 'function' && method !== 'chain') {
                // Dynamically generate a method for the property
                chained[method] = (...args) => {
                    try {
                        if (typeof result === 'number') {
                            result = math[method](result, ...args);
                        }
                    }
                    catch (error) {
                        console.error(`Error executing method ${method}:`, error);
                    }
                    return chained; // Return the chained object
                };
            }
        }
        // Add a done method to return the final result
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