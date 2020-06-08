import { Singleton } from './singleton.js';

const single1 = new Singleton();
const single2 = new Singleton();

console.log(single1, single2);
console.log(single1 === single2);
