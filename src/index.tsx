import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);

// const big = 100n;
//
// const fullName = 'Bob';
// const age = 10;
//
// `Hello, my name is ${fullName}.
//
// I'll be ${age + 1} years old next month.`;
//
// declare let maybe: unknown;
// maybe = 10;
// maybe = 'A';
// const aNumber: number = maybe;
// if (maybe === 'A') {
//   // TypeScript knows that maybe is a boolean now
//   const aBoolean: boolean = maybe;
//   // So, it cannot be a string
//   const aString: string = maybe;
// }
//
// declare function getValue(key: string): any;
//
// // OK, return value of 'getValue' is not checked
// let str: any = getValue('myString');
// str = false;
//
// const looselyTyped: any = {};
// const d = looselyTyped.a.b.c.d;
//
// const unusable: void = undefined;
// const u = undefined;
// const n = null;
//
// // Function returning never must not have a reachable end point
// function error(message: string): never {
//   throw new Error(message);
// }
//
// // Inferred return type is never
// function fail() {
//   return error('Something failed');
// }
//
// // Function returning never must not have a reachable end point
// function infiniteLoop(): never {
//   while (true) {}
// }
//
// interface LabeledValue {
//   label: string;
// }
//
// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label);
// }
//
// const myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);
//
// interface SquareConfig {
//   color?: string;
//   width?: number;
//
//   [propName: string]: any;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return { color: config.color || 'red', area: config.width || 20 };
// }
//
// const mySquare = createSquare({ color: 'black' });
// const mySquare2 = createSquare({ width: 100, opacity: 0.5 });
//
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }
//
// const p1: Point = { x: 10, y: 20 };
// p1.x = 5;
//
// let a: number[] = [1, 2, 3, 4];
// const ro: ReadonlyArray<number> = a;
//
// a = ro as number[];
//
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
//
// const mySearch: SearchFunc = function (
//   source: string,
//   subString: string,
// ): boolean {
//   const result = source.search(subString);
//   return result > -1;
// };
