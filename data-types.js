// primitive have one single type value
/*
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol

*/
let a = 45;
// console.log(typeof a);

a = "Samiul Islam";
// console.log(typeof a);

// non-primitive have different type value
// 1. object

let x = { role: 'Web Developer' };
let y = x;
x.role = 'Back End developer';
console.log(x, y);

y.role = 'Front End developer';
console.log(x, y);