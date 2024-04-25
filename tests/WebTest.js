function Test() {

    const startTime = performance.now()

    console.log(math.add(1, 2, 3)); // 6
    console.log(math.subtract(1, 2, 3)); // -4
    console.log(math.multiply(1, 2, 3)); // 6
    console.log(math.divide(1, 2, 3)); // 0.16666666666666666
    console.log(math.square(2)); // 4
    console.log(math.cube(2)); // 8
    console.log(math.power(2, 3)); // 8
    console.log(math.root(8, 3)); // 2
    console.log(math.round(2.5)); // 3
    console.log(math.roundUp(2.1)); // 3
    console.log(math.roundDown(2.9)); // 2
    console.log(math.absolute(-2)); // 2
    console.log(math.max(1, 2, 3)); // 3
    console.log(math.min(1, 2, 3)); // 1
    console.log(math.sqrt(4)); // 2
    console.log(math.cbrt(8)); // 2
    console.log(math.hypotenuse(3, 4)); // 5
    console.log(math.average(1, 2, 3)); // 2
    console.log(math.mean(1, 2, 3)); // 2
    console.log(math.median(1, 2, 3)); // 2
    console.log(math.mode(1, 1, 2, 2, 3, 'Arr')); // 1, 2
    console.log(math.range(1, 2, 3, 'Arr')); // 1, 3
    console.log(math.factors(12, 'Arr')); // 1, 2, 3, 4, 6, 12
    console.log(math.factorsOf(12, 'Str')); // 1, 2, 3, 4, 6, 12
    console.log(math.primeFactors(12, 'Arr')); // 2, 3
    console.log(math.primeFactorsOf(12, 'Str')); // 2, 3
    console.log(math.primeFactorizationOf(12, 'Str')); // 2^2, 3
    console.log(math.greatestCommonDivisor(14, 21)); // 7
    console.log(math.GCD(14, 21)); // 7
    console.log(math.highestCommonFactor(14, 21)); // 7
    console.log(math.HCF(14, 21)); // 7
    console.log(math.leastCommonMultiple(14, 21)); // 42
    console.log(math.LCM(14, 21)); // 42
    console.log(math.isEven(2)); // true
    console.log(math.isOdd(3)); // true
    console.log(math.isPositive(1)); // true
    console.log(math.isNegative(-1)); // true
    console.log(math.isInteger(1)); // true
    console.log(math.isFloat(1.1)); // true
    console.log(math.isPrime(2)); // true
    console.log(math.isComposite(4)); // true
    console.log(math.isDivisible(4, 2)); // true
    console.log(math.isPowerOf(8, 2)); // true
    console.log(math.isPerfectSquare(4)); // true
    console.log(math.isPerfectCube(8)); // true
    console.log(math.isPerfectPower(8, 2)); // true
    console.log(math.isMultiple(4, 2)); // true
    console.log(math.isFactor(2, 4)); // true
    console.log(math.isArmstrong(153)); // true
    console.log(math.isPalindrome(121)); // true
    console.log(math.isFinite(28)); // true
    console.log(math.factorial(5)); // 120
    console.log(math.fibonacci(5)); // 5
    console.log(math.fibonacciSeries(5, 'Arr')); // 3
    console.log(math.log(2, 8)); // 3
    console.log(math.logBase2(8)); // 3
    console.log(math.logBase5(25)); // 2
    console.log(math.logBase10(100)); // 2
    console.log(math.sin(90)); // 1
    console.log(math.cos(0)); // 1
    console.log(math.tan(45)); // 1
    console.log(math.cot(45)); // 1
    console.log(math.sec(0)); // 1
    console.log(math.csc(90)); // 1
    console.log(math.evaluate('(2 * tan(45) + 3) * 4 ^ x', { x: 2 })); // 80
    console.log(math.chain(10).add(5).subtract(3).multiply(2).divide(4).result()); // 6
    console.log(math.chain(2).result()); // 2

    const endTime = performance.now()

    console.log(`Time taken to execute: ${endTime - startTime}ms`);

    console.log('All tests passed!');

    console.log('Exit code:', 0);

    const Time = endTime - startTime

    document.head.title = 'MathJS Web Testing'

    document.body.innerText = `Exit code: 0 \n All tests passed! \n Time taken to execute: ${+Time.toFixed(2)}ms \n See Console for detailed results.`

    document.body.style.cssText = 'font-size: 28px;font-family: system-ui;display: flex;justify-content: center;align-items: center;'

}

Test();