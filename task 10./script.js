import { one, two, three, four, five } from "./numbers.js";
import { multiplication, substraction, composition, division } from "./math.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
