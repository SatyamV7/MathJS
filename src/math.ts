/*
    MathJS v1.2.0
    Last Modified: 25/04/2024 <DD/MM/YYYY>
    Author: Satyam Verma <github.com/SatyamV7>
    Description: A JavaScript library for basic and advanced arithmetic operations, Satistical functions, logical functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
    Note: The author is not resposible fo accuracy of the results
    Repository: github.com/SatyamV7/MathJS
    License: MIT License
*/

/*
    Helper Functions
*/

function getUnts(str: string): string { //Extract the units from the parameter
    str = str.toString();
    const units = str.match(/[a-zA-Z]+/g);
    return units ? units.join('') : '';
}

function getNumericalValue(str: string): number { //Extract the numerical value from the parameter
    str = str.toString();
    const numericalValue = str.match(/\d+/);
    return numericalValue ? +numericalValue[0] : 0;
}

function convertToRadians(n: string): number { //Convert the parameter to radians
    let num = getNumericalValue(n);
    if (getUnts(n) == 'deg' || getUnts(n) == '') {
        return num * Math.PI / 180;
    } else if (getUnts(n) == 'grad') {
        return num * Math.PI / 200;
    } else if (getUnts(n) == 'rad') {
        return num;
    } else {
        throw new Error('Invalid Unit');
    }
}

const math = {

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

    add(...n: number[]): number { //Add all parameters
        return n.reduce((a, b) => a + b, 0);
    },

    //Note: Dependent Function (Dependent on: add)
    sum(...n: number[]): number { //Sum all parameters
        return this.add(...n);
    },

    subtract(...n: number[]): number { //Subtract all parameters
        return n.reduce((a, b) => a - b);
    },

    //Note: Dependent Function (Dependent on: subtract)
    difference(...n: number[]): number { //Return the difference of all parameters
        return this.subtract(...n);
    },

    multiply(...n: number[]): number { //Multiply all parameters
        return n.reduce((a, b) => a * b);
    },

    //Note: Dependent Function (Dependent on: multiply)
    product(...n: number[]): number { //Return the product of all parameters
        return this.multiply(...n);
    },

    divide(...n: number[]): number { //Divide all parameters
        return n.reduce((a, b) => a / b);
    },

    //Note: Dependent Function (Dependent on: divide)
    quotient(...n: number[]): number { //Return the quotient of all parameters
        return this.divide(...n);
    },

    remainder(n: number, d: number): number { //Return the remainder of the parameter divided by the divisor
        return n % d;
    },

    /*
        Statistical Functions
    */

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

    mode(...n: (number | 'Str' | 'Arr')[]): string | number[] { //Return the mode of the parameters
        let returnType: 'Str' | 'Arr' = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1].toString())) {
            returnType = n.pop() as 'Str' | 'Arr';
        }
        const count: { [key: number]: number } = {};
        n.forEach(e => count[e as number] = (count[e as number] || 0) + 1);
        let max = 0, modes: number[] = [];
        for (const e in count) {
            if (count[e] > max) {
                modes = [parseInt(e)];
                max = count[e];
            } else if (count[e] === max) {
                modes.push(parseInt(e));
            }
        }
        return returnType === 'Str' ? modes.join(', ') : modes;
    },

    range(...n: (number | 'Str' | 'Arr')[]): string | number[] { //Return the range of the parameters
        let returnType: 'Str' | 'Arr' = 'Str';
        if (typeof n[n.length - 1] === 'string' && ['Str', 'Arr'].includes(n[n.length - 1] as string)) {
            returnType = n.pop() as 'Str' | 'Arr';
        }
        const numbers = n.filter((item): item is number => typeof item === 'number');
        numbers.sort((a, b) => a - b);
        const range: number[] = [numbers[0], numbers[numbers.length - 1]];
        return returnType === 'Str' ? range.join(', ') : range;
    },

    /*
        Logical Functions
    */

    isEqual(a: number, b: number): boolean { //Return true if the parameters are equal
        return a === b;
    },

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

    //Note: Dependent Function (Dependent on: isPrime)
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

    /*
        Factorial and Fibonacci Functions
    */

    factorial(n: number): number { //Return the factorial of the parameter
        let int = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            int = int * i;
        return int;
    },

    fibonacci(n: number): number { //Return the nth Fibonacci number
        let a = 1, b = 0, temp: number;
        for (; n >= 0; n--) {
            temp = a;
            a = a + b;
            b = temp;
        }
        return b;
    },

    //Note: Dependent Function (Dependent on: fibonacci)
    fibonacciSeries(n: number, returnType: 'Str' | 'Arr' = 'Str'): string | number[] { //Return the Fibonacci series upto the parameter
        let series: number[] = [];
        for (let i = 0; i < n; i++) {
            series.push(this.fibonacci(i));
        }
        return returnType === 'Str' ? series.join(', ') : series;
    },

    /*
        Random Number Functions
    */

    random(a: number, b: number): number { //Return a random number between a and b
        return Math.floor(Math.random() * (b - a + 1)) + a;
    },

    /*
        Advanced Arithmetic Functions
    */

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

    square(n: number): number { //Square the parameter
        return n * n;
    },

    cube(n: number): number { //Cube the parameter
        return n * n * n;
    },

    power(n: number, e: number): number { //Raise the parameter to the exponent
        return Math.pow(n, e);
    },

    nthPower(n: number, e: number): number { //Raise the parameter to the nth power
        return Math.pow(n, e);
    },

    root(n: number, e: number): number { //Return the nth root of the parameter
        return Math.pow(n, 1 / e);
    },

    nthRoot(n: number, e: number): number { //Return the nth root of the parameter
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

    factors(n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] { //Return the factors of the parameter
        const factors: number[] = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                factors.push(i);
            }
        }
        return returnType === 'Str' ? factors.join(', ') : factors;
    },

    //Note: Dependent Function (Dependent on: factors)
    factorsOf(n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] { //Return the factors of the parameter
        return this.factors(n, returnType);
    },

    primeFactors(n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] { //Return the prime factors of the parameter
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

    //Note: Dependent Function (Dependent on: primeFactors)
    primeFactorsOf(n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] { //Return the prime factors of the parameter
        return this.primeFactors(n, returnType);
    },

    primeFactorization(n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] { //Return the prime factorization tree of the parameter
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

    //Note: Dependent Function (Dependent on: primeFactorization)
    primeFactorizationOf(n: number, returnType: 'Str' | 'Arr' = 'Arr'): string | number[] { //Return the prime factorization tree of the parameter
        return this.primeFactorization(n, returnType);
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

    /*
        Trigonometric Functions
    */

    sin(n: string): number { //Return the sine of the parameter
        let sine = Math.sin(convertToRadians(n));
        return +sine.toFixed(2);
    },

    cos(n: string): number { //Return the cosine of the parameter
        let cosine = Math.cos(convertToRadians(n));
        return +cosine.toFixed(2);
    },

    tan(n: string): number { //Return the tangent of the parameter
        let tangent = Math.tan(convertToRadians(n));
        return +tangent.toFixed(2);
    },

    cot(n: string): number { //Return the cotangent of the parameter
        let cotangent = 1 / Math.tan(convertToRadians(n));
        return +cotangent.toFixed(2);
    },

    sec(n: string): number { //Return the secant of the parameter
        let secant = 1 / Math.cos(convertToRadians(n));
        return +secant.toFixed(2);
    },

    csc(n: string): number { //Return the cosecant of the parameter
        let cosecant = 1 / Math.sin(convertToRadians(n));
        return +cosecant.toFixed(2);
    },

    /*
        evaluateExpression Function
    */

    evaluateExpression(expression: string, variables: { [key: string]: number }) { //Evaluate the expression with the variables
        try {
            if (variables) {
                for (let variable in variables) {
                    const regex = new RegExp('\\b' + variable + '\\b', 'g');
                    expression = expression.replace(regex, variables[variable].toString());
                }
            }
            for (let method in math) {
                const regex = new RegExp(`\\b${method}\\b`, 'g');
                expression = expression.replace(regex, `math['${method}']`);
            }
            expression = expression
                .replace(/\^/g, '**')
                .replace(/÷/g, '/')
                .replace(/×/g, '*');
            return Function('math', `'use strict'; return (${expression})`)(math);
        } catch (error) {
            throw new Error('Error occurred while evaluating the expression: ' + error);
        }
    },

    //Note: Dependent Function (Dependent on: evaluateExpression)
    evaluate(expression: string, variables: { [key: string]: number }) { //Evaluate the expression with the variables
        return this.evaluateExpression(expression, variables);
    },

    /*
        Chain Handler
    */

    chain(initialValue: number): { [key: string]: Function } { //Chain the methods
        let result: number = initialValue;
        const chained: { [key: string]: Function } = {};
        // Iterate over properties of math object
        for (const method in math) {
            // Check if the property is a function and not the chain method itself
            if (typeof math[method as keyof typeof math] === 'function' && method !== 'chain') {
                // Dynamically generate a method for the property
                chained[method] = (...args: number[]) => {
                    if (typeof result === 'number') {
                        result = (math[method as keyof typeof math] as (...args: number[]) => number)(result, ...args);
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
