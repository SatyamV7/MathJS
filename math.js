'use strict';
//MathJS v1.0.6
//Last Modified: 14/04/2024 <DD/MM/YYYY>
//Author: Satyam Verma <github.com/SatyamV7>
//Description: A JavaScript library for basic and advanced arithmetic operations, comparison functions, factorial and fibonacci functions, random number functions, and trigonometric functions.
//Note: The author is not resposible fo accuracy of the results
//Repository: github.com/MTSOSS/MathJS
//License: MIT License
//Helper Functions
function getUnts(str) {
    str = str.toString();
    var units = str.match(/[a-zA-Z]+/g);
    return units ? units.join('') : '';
}
function getNumericalValue(str) {
    str = str.toString();
    return parseInt(str.match(/\d+/)[0]);
}
var math = {
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
    add: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return n.reduce(function (a, b) { return a + b; }, 0);
    },
    subtract: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return n.reduce(function (a, b) { return a - b; });
    },
    multiply: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return n.reduce(function (a, b) { return a * b; });
    },
    divide: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return n.reduce(function (a, b) { return a / b; });
    },
    square: function (n) {
        return n * n;
    },
    cube: function (n) {
        return n * n * n;
    },
    power: function (n, e) {
        return Math.pow(n, e);
    },
    root: function (n, e) {
        return Math.pow(n, 1 / e);
    },
    round: function (n) {
        return Math.round(n);
    },
    roundUp: function (n) {
        return Math.ceil(n);
    },
    roundDown: function (n) {
        return Math.floor(n);
    },
    absolute: function (n) {
        return Math.abs(n);
    },
    remainder: function (n, d) {
        return n % d;
    },
    max: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return Math.max.apply(Math, n);
    },
    min: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return Math.min.apply(Math, n);
    },
    sqrt: function (n) {
        return Math.sqrt(n);
    },
    cbrt: function (n) {
        return Math.cbrt(n);
    },
    hypotenuse: function (a, b) {
        return Math.hypot(a, b);
    },
    average: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return n.reduce(function (a, b) { return a + b; }, 0) / n.length;
    },
    //Note: Dependent Function (Dependent on: average)
    mean: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return this.average.apply(this, n);
    },
    median: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        n.sort(function (a, b) { return a - b; });
        var mid = Math.floor(n.length / 2);
        return n.length % 2 !== 0 ? n[mid] : (n[mid - 1] + n[mid]) / 2;
    },
    mode: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        var count = {};
        n.forEach(function (e) { return count[e] = (count[e] || 0) + 1; });
        var max = 0, modes = [];
        for (var e in count) {
            if (count[e] > max) {
                modes = [parseInt(e)];
                max = count[e];
            }
            else if (count[e] === max) {
                modes.push(parseInt(e));
            }
        }
        return modes.toString();
    },
    range: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        n.sort(function (a, b) { return a - b; });
        return [n[0], n[n.length - 1]].toString();
    },
    greatestCommonDivisor: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        var gcd = function (x, y) { return !y ? x : gcd(y, x % y); };
        return n.reduce(function (a, b) { return gcd(a, b); });
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    GCD: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return this.greatestCommonDivisor.apply(this, n);
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    highestCommonFactor: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return this.greatestCommonDivisor.apply(this, n);
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    HCF: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return this.greatestCommonDivisor.apply(this, n);
    },
    leastCommonMultiple: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        var hcf = function (x, y) { return !y ? x : hcf(y, x % y); };
        var lcm = function (x, y) { return (x * y) / n.reduce(function (a, b) { return hcf(a, b); }); };
        ;
        return n.reduce(function (a, b) { return lcm(a, b); });
    },
    //Note: Dependent Function (Dependent on: greatestCommonDivisor)
    LCM: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return this.leastCommonMultiple.apply(this, n);
    },
    //Comparison Functions
    isEven: function (n) {
        return n % 2 === 0;
    },
    isOdd: function (n) {
        return n % 2 !== 0;
    },
    isPositive: function (n) {
        return n > 0;
    },
    isNegative: function (n) {
        return n < 0;
    },
    isInteger: function (n) {
        return Number.isInteger(n);
    },
    isFloat: function (n) {
        return Number(n) === n && n % 1 !== 0;
    },
    isPrime: function (n) {
        if (n == 1) {
            return false;
        }
        if (n < 2) {
            return false;
        }
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    },
    isComposite: function (n) {
        if (n == 1) {
            return false;
        }
        return !this.isPrime(n);
    },
    isDivisible: function (n, d) {
        return n % d === 0;
    },
    isPowerOf: function (n, e) {
        return Math.log(n) / Math.log(e) % 1 === 0;
    },
    isPerfectSquare: function (n) {
        return Math.sqrt(n) % 1 === 0;
    },
    isPerfectCube: function (n) {
        return Math.cbrt(n) % 1 === 0;
    },
    isPerfectPower: function (n, b) {
        return Math.log(n) / Math.log(b) % 1 === 0;
    },
    isMultiple: function (n, m) {
        return n % m === 0;
    },
    isFactor: function (n, f) {
        return f % n === 0;
    },
    isArmstrong: function (n) {
        return n === n.toString().split('').reduce(function (a, b) { return a + Math.pow(parseInt(b), n.toString().length); }, 0);
    },
    isPalindrome: function (n) {
        return n.toString() === n.toString().split('').reverse().join('');
    },
    isFinite: function (n) {
        return Number.isFinite(n);
    },
    //Factorial and Fibonacci Functions
    factorial: function (n) {
        var ans = 1;
        if (n === 0)
            return 1;
        for (var i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    },
    fibonacci: function (n) {
        var a = 1, b = 0, temp;
        while (n >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            n--;
        }
        return b;
    },
    //Random Number Functions
    random: function (a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    },
    //Advanced Arithmetic Functions
    log: function (n, b) {
        if (b !== undefined) {
            var log_1 = Math.log(n) / Math.log(b);
            return +log_1.toFixed(2);
        }
        var log = Math.log(n);
        return +log.toFixed(2);
    },
    logBase2: function (n) {
        return Math.log2(n);
    },
    logBase5: function (n) {
        return Math.log(n) / Math.log(5);
    },
    logBase10: function (n) {
        return Math.log10(n);
    },
    //Trigonometric Functions
    sin: function (n) {
        var sine;
        var num = getNumericalValue(n);
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
    cos: function (n) {
        var cosine;
        var num = getNumericalValue(n);
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
    tan: function (n) {
        var tangent;
        var num = getNumericalValue(n);
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
    cot: function (n) {
        var cotangent;
        var num = getNumericalValue(n);
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
    sec: function (n) {
        var secant;
        var num = getNumericalValue(n);
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
    csc: function (n) {
        var cosecant;
        var num = getNumericalValue(n);
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
    evaluateExpression: function (e) {
        return Function("'use strict'; return (".concat(e, ")"))();
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
