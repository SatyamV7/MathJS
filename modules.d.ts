// This file is used to declare modules that are not written in TypeScript.
// It is used to declare the module name and the module's shape.

declare module 'arithmetic-core.js' {
    export const e: number;
    export const PI: number;
    export const LN2: number;
    export const LN10: number;
    export const i: number;
    export const TAU: number;
    export const LOG2E: number;
    export const LOG10E: number;
    export const EPSILON: any;
    export const PHI: number;
    export function add(...n: any[]): any;
    export function subtract(...n: any[]): any;
    export function multiply(...n: any[]): any;
    export function divide(...n: any[]): any;
    export function square(n: any): number;
    export function cube(n: any): number;
    export function power(n: any, e: any): number;
    export function root(n: any, e: any): number;
    export function round(n: any): number;
    export function roundUp(n: any): number;
    export function roundDown(n: any): number;
    export function absolute(n: any): number;
    export function remainder(n: any, d: any): number;
    export function max(...n: any[]): number;
    export function min(...n: any[]): number;
    export function sqrt(n: any): number;
    export function cbrt(n: any): any;
    export function hypotenuse(a: any, b: any): any;
    export function average(...n: any[]): number;
    export function mean(...n: any[]): number;
    export function median(...n: any[]): any;
    export function mode(...n: any[]): any[];
    export function range(...n: any[]): any[];
    export function greatestCommonDivisor(...n: any[]): any;
    export function highestCommonFactor(...n: any[]): any;
    export function leastCommonMultiple(...n: any[]): any;
    export function isEven(n: any): boolean;
    export function isOdd(n: any): boolean;
    export function isPrime(n: any): boolean;
    export function isComposite(n: any): boolean;
    export function isFinite(n: any): any;
    export function factorial(n: any): number;
    export function fibonacci(n: any): number;
    export function random(a: any, b: any): any;
    export function log(n: any, b: any): string;
    export function logBase2(n: any): any;
    export function logBase5(n: any): number;
    export function logBase10(n: any): any;
    export function sin(n: any): string;
    export function cos(n: any): string;
    export function tan(n: any): string;
    export function cot(n: any): string;
    export function sec(n: any): string;
    export function csc(n: any): string;
}