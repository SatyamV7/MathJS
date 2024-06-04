/*
    MathJS v1.3.6
    Last Modified: 04/06/2024 <DD/MM/YYYY>
    Author: Satyam Verma <github.com/SatyamV7>
    Description: A JavaScript library for basic and advanced arithmetic operations, Satistical functions, logical functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
    Note: The author is not resposible fo accuracy of the results
    Repository: github.com/SatyamV7/MathJS
    License: MIT License
*/

/*
    Helper Functions
*/

function getUnits(str: string): string {
    str = str.toString();
    const units = str.match(/(?!\b(pi|tau)\b)\b[a-z]+\b/gi);
    math.debuggingMode ? console.log('Units:', units) : null;
    return units ? units.join('') : '';
}

function convertToRadians(n: string): number { //Convert the parameter to radians
    let num = math.evaluate(n.toString().replace(/(?<![a-zA-Z])(pi|tau)(?![a-zA-Z])|[a-zA-Z]/gi, (match, p) => p ? match : ''), {}) as number;
    switch (getUnits(n)) {
        case 'deg':
        case '':
            return num * Math.PI / 180;
        case 'grad':
            return num * Math.PI / 200;
        case 'rad':
            return num;
        default:
            throw new Error('Invalid Unit');
    }
}

function validateAngle(Angle: number, Function: string): number {
    return ((Function === 'tan' || Function === 'sec') && (Angle === Math.PI / 2 || Angle === 3 * Math.PI / 2)) ? Number.POSITIVE_INFINITY : ((Function === 'cot' || Function === 'csc') && (Angle === 0 || Angle === Math.PI)) ? Number.POSITIVE_INFINITY : Angle;
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

    add: (...n: number[]): number => n.reduce((a, b) => a + b, 0),

    subtract: (...n: number[]): number => n.reduce((a, b) => a - b),

    multiply: (...n: number[]): number => n.reduce((a, b) => a * b),

    divide: (...n: number[]): number => n.reduce((a, b) => a / b),

    remainder: (...n: number[]): number => n.reduce((a, b) => a % b),

    /*
        Statistical Functions
    */

    max: (...n: number[]): number => Math.max(...n),

    min: (...n: number[]): number => Math.min(...n),

    average: (...n: number[]): number => n.reduce((a, b) => a + b, 0) / n.length,

    mean: (...n: number[]): number => math.average(...n),

    median: (...n: number[]): number => {
        n.sort((a, b) => a - b);
        const mid = Math.floor(n.length / 2);
        return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    },

    mode: (...n: (number | string | any)[]): string | any[] => {
        let returnType: 'Str' | 'Arr' = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1] as string)) {
            returnType = n.pop() as 'Str' | 'Arr';
        }
        const count: { [key: string]: number } = {};
        const modes: any[] = [];
        let maxCount = 0;
        n.forEach(e => {
            const key = typeof e === 'string' ? `s_${e}` : e.toString();
            count[key] = (count[key] || 0) + 1;
            if (count[key] > maxCount) {
                modes.splice(0, modes.length, e);
                maxCount = count[key];
            } else if (count[key] === maxCount) {
                modes.push(e);
            }
        });
        return returnType === 'Str' ? modes.map(e => typeof e === 'string' ? e : e.toString()).join(', ') : modes;
    },

    range: (...n: (number | 'Str' | 'Arr')[]): string | number[] => {
        let returnType: 'Str' | 'Arr' = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1] as string)) {
            returnType = n.pop() as 'Str' | 'Arr';
        }
        const numbers = n.filter((item): item is number => typeof item === 'number');
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);
        const range: number[] = [min, max];
        return returnType === 'Str' ? range.join(', ') : range;
    },

    variance: (...n: number[]): number => {
        const mean = math.mean(...n);
        return math.mean(...n.map(e => math.square(e - mean)));
    },

    standardDeviation: (...n: number[]): number => Math.sqrt(math.variance(...n)),

    /*
        Logical Functions
    */

    isEqual: (a: number, b: number): boolean => a === b,

    isNearlyEqual: (a: number, b: number, epsilon: number = Number.EPSILON): boolean => Math.abs(a - b) < epsilon,

    isEven: (n: number): boolean => n % 2 === 0,

    isOdd: (n: number): boolean => n % 2 !== 0,

    isPositive: (n: number): boolean => n > 0,

    isNegative: (n: number): boolean => n < 0,

    isZero: (n: number): boolean => n === 0,

    isInteger: (n: number): boolean => Number.isInteger(n),

    isFloat: (n: number): boolean => Number(n) === n && n % 1 !== 0,

    isPrime: (n: number): boolean => {
        if (n === 2) {
            return true;
        }
        if (n === 1 || n % 2 === 0) {
            return false;
        }
        const sqrt = Math.sqrt(n);
        for (let i = 3; i <= sqrt; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    },

    isComposite: (n: number): boolean => !math.isPrime(n),

    isDivisible: (n: number, d: number): boolean => n % d === 0,

    isPowerOf: (n: number, e: number): boolean => Math.log(n) / Math.log(e) % 1 === 0,

    isPerfectSquare: (n: number): boolean => Math.sqrt(n) % 1 === 0,

    isPerfectCube: (n: number): boolean => Math.cbrt(n) % 1 === 0,

    isPerfectPower: (n: number, b: number): boolean => Math.log(n) / Math.log(b) % 1 === 0,

    isMultiple: (n: number, m: number): boolean => n % m === 0,

    isFactor: (n: number, f: number): boolean => f % n === 0,

    isArmstrong: (n: number): boolean => n === n.toString().split('').reduce((a, b) => a + Math.pow(parseInt(b), n.toString().length), 0),

    isPalindrome: (n: number): boolean => n.toString() === n.toString().split('').reverse().join(''),

    isFinite: (n: number): boolean => Number.isFinite(n),

    isInfinite: (n: number): boolean => !Number.isFinite(n),

    /*
        Factorial and Fibonacci Functions
    */

    factorial: (n: number): number => {
        if (n === 0) return 1;
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    },

    fibonacci: (n: number): number => {
        let a = 0,
            b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    },

    fibonacciSeries: (n: number, returnType: 'Str' | 'Arr' = 'Str'): string | number[] => {
        const series: number[] = Array.from({ length: n }, (_, i) => math.fibonacci(i));
        return returnType === 'Str' ? series.join(', ') : series;
    },

    /*
        Random Number Functions
    */

    random: (a: number, b: number): number => Math.floor(Math.random() * (b - a + 1)) + a,

    /*
        Advanced Arithmetic Functions
    */

    log: (n: number, b?: number): number => {
        if (b !== undefined) {
            const log = Math.log(n) / Math.log(b);
            return +log.toFixed(2);
        }
        const log = Math.log(n);
        return +log.toFixed(2);
    },

    logBase2: (n: number): number => Math.log2(n),

    logBase5: (n: number): number => Math.log(n) / Math.log(5),

    logBase10: (n: number): number => Math.log10(n),

    square: (n: number): number => n ** 2,

    cube: (n: number): number => n ** 3,

    power: (n: number, e: number): number => n ** e,

    root: (n: number, e: number): number => n ** (1 / e),

    round: (n: number): number => Math.round(n),

    roundUp: (n: number): number => Math.ceil(n),

    roundDown: (n: number): number => Math.floor(n),

    absolute: (n: number): number => Math.abs(n),

    sqrt: (n: number): number => Math.sqrt(n),

    cbrt: (n: number): number => Math.cbrt(n),

    hypotenuse: (a: number, b: number): number => Math.hypot(a, b),

    factorsOf: (n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] => {
        const factors: number[] = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                factors.push(i);
            }
        }
        return returnType === 'Str' ? factors.join(', ') : factors;
    },

    primeFactorsOf: (n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] => {
        const primeFactors: number[] = [];
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

    primeFactorizationOf: (n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] => {
        const factors: number[] = [];
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

    greatestCommonDivisor: (...n: number[]): number => {
        const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));
        return n.reduce((a, b) => gcd(a, b));
    },

    GCD: (...n: number[]): number => math.greatestCommonDivisor(...n),

    highestCommonFactor: (...n: number[]): number => math.greatestCommonDivisor(...n),

    HCF: (...n: number[]): number => math.greatestCommonDivisor(...n),

    leastCommonMultiple: (...n: number[]): number => {
        const hcf = (x: number, y: number): number => (!y ? x : hcf(y, x % y));
        const lcm = (x: number, y: number): number => (x * y) / n.reduce((a, b) => hcf(a, b));
        return n.reduce((a, b) => lcm(a, b));
    },

    LCM: (...n: number[]): number => math.leastCommonMultiple(...n),

    /*
        Trigonometric Functions
    */

    sin: (n: string): number => {
        const angle = convertToRadians(n);
        const sine = Math.sin(angle);
        return +sine.toFixed(2);
    },

    cos: (n: string): number => {
        const angle = convertToRadians(n);
        const cosine = Math.cos(angle);
        return +cosine.toFixed(2);
    },

    tan: (n: string): number => {
        const angle = validateAngle(convertToRadians(n), 'tan');
        const tangent = Math.tan(angle);
        return +tangent.toFixed(2);
    },

    cot: (n: string): number => {
        const angle = validateAngle(convertToRadians(n), 'cot');
        const cotangent = 1 / Math.tan(angle);
        return +cotangent.toFixed(2);
    },

    sec: (n: string): number => {
        const angle = validateAngle(convertToRadians(n), 'sec');
        const secant = 1 / Math.cos(angle);
        return +secant.toFixed(2);
    },

    csc: (n: string): number => {
        const angle = validateAngle(convertToRadians(n), 'csc');
        const cosecant = 1 / Math.sin(angle);
        return +cosecant.toFixed(2);
    },

    /*
        Evaluate Function
    */

    evaluate: (expression: string, variables: { [key: string]: number }) => {
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
                .replace(/\bpi\b/gi, 'PI')
                .replace(/\btau\b/gi, 'TAU');
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
        } catch (error) {
            throw new Error('Error occurred while evaluating the expression: ' + error);
        }
    },

    /*
        Chain Handler
    */

    chain: (initialValue: number = 0): { [key: string]: Function } => {
        let result: number = initialValue;
        const chained: { [key: string]: Function } = {};
        for (const method in math) {
            if (typeof math[method as keyof typeof math] === 'function' && method !== 'chain') {
                chained[method] = (...args: number[]) => {
                    try {
                        if (typeof result === 'number') {
                            result = (math[method as keyof typeof math] as (...args: number[]) => number)(result, ...args);
                        }
                    } catch (error) {
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
        } else {
            throw new Error('Initial value must be a number');
        }
    }
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
