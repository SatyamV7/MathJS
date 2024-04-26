declare function getUnts(str: string): string;
declare function getNumericalValue(str: string): number;
declare function convertToRadians(n: string): number;
declare const math: {
    e: number;
    PI: number;
    LN2: number;
    LN10: number;
    TAU: number;
    LOG2E: number;
    LOG10E: number;
    EPSILON: number;
    PHI: number;
    add(...n: number[]): number;
    sum(...n: number[]): number;
    subtract(...n: number[]): number;
    difference(...n: number[]): number;
    multiply(...n: number[]): number;
    product(...n: number[]): number;
    divide(...n: number[]): number;
    quotient(...n: number[]): number;
    remainder(n: number, d: number): number;
    max(...n: number[]): number;
    min(...n: number[]): number;
    average(...n: number[]): number;
    mean(...n: number[]): number;
    median(...n: number[]): number;
    mode(...n: (number | 'Str' | 'Arr')[]): string | number[];
    range(...n: (number | 'Str' | 'Arr')[]): string | number[];
    variance(...n: number[]): number;
    standardDeviation(...n: number[]): number;
    isEqual(a: number, b: number): boolean;
    isEven(n: number): boolean;
    isOdd(n: number): boolean;
    isPositive(n: number): boolean;
    isNegative(n: number): boolean;
    isZero(n: number): boolean;
    isInteger(n: number): boolean;
    isFloat(n: number): boolean;
    isPrime(n: number): boolean;
    isComposite(n: number): boolean;
    isDivisible(n: number, d: number): boolean;
    isPowerOf(n: number, e: number): boolean;
    isPerfectSquare(n: number): boolean;
    isPerfectCube(n: number): boolean;
    isPerfectPower(n: number, b: number): boolean;
    isMultiple(n: number, m: number): boolean;
    isFactor(n: number, f: number): boolean;
    isArmstrong(n: number): boolean;
    isPalindrome(n: number): boolean;
    isFinite(n: number): boolean;
    isInfinite(n: number): boolean;
    factorial(n: number): number;
    fibonacci(n: number): number;
    fibonacciSeries(n: number, returnType?: 'Str' | 'Arr'): string | number[];
    random(a: number, b: number): number;
    log(n: number, b?: number): number;
    logBase2(n: number): number;
    logBase5(n: number): number;
    logBase10(n: number): number;
    square(n: number): number;
    cube(n: number): number;
    power(n: number, e: number): number;
    nthPower(n: number, e: number): number;
    root(n: number, e: number): number;
    nthRoot(n: number, e: number): number;
    round(n: number): number;
    roundUp(n: number): number;
    roundDown(n: number): number;
    absolute(n: number): number;
    sqrt(n: number): number;
    cbrt(n: number): number;
    hypotenuse(a: number, b: number): number;
    factorsOf(n: number, returnType?: 'Str' | 'Arr'): string | number[];
    primeFactorsOf(n: number, returnType?: 'Str' | 'Arr'): string | number[];
    primeFactorizationOf(n: number, returnType?: 'Str' | 'Arr'): string | number[];
    greatestCommonDivisor(...n: number[]): number;
    GCD(...n: number[]): number;
    highestCommonFactor(...n: number[]): number;
    HCF(...n: number[]): number;
    leastCommonMultiple(...n: number[]): number;
    LCM(...n: number[]): number;
    sin(n: string): number;
    cos(n: string): number;
    tan(n: string): number;
    cot(n: string): number;
    sec(n: string): number;
    csc(n: string): number;
    asin(n: number): number;
    acos(n: number): number;
    atan(n: number): number;
    acot(n: number): number;
    asec(n: number): number;
    acsc(n: number): number;
    sinh(n: number): number;
    cosh(n: number): number;
    tanh(n: number): number;
    coth(n: number): number;
    sech(n: number): number;
    csch(n: number): number;
    asinh(n: number): number;
    acosh(n: number): number;
    atanh(n: number): number;
    acoth(n: number): number;
    asech(n: number): number;
    acsch(n: number): number;
    evaluateExpression(expression: string, variables: {
        [key: string]: number;
    }): any;
    evaluate(expression: string, variables: {
        [key: string]: number;
    }): any;
    chain(initialValue: number): {
        [key: string]: Function;
    };
};
declare var module: any;
declare var exports: any;
declare var define: {
    (id: string[], factory: () => any): void;
    amd: any;
};
//# sourceMappingURL=math.d.ts.map