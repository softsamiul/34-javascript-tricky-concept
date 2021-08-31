/* 
=== Truethy & falsy ===
Truethy: 
    true
    more than 0 or less than 0 but not 0
    any string including value or white string
    array including empty array
    object including empty object

Falsy:
    false
    0
    empty string
    undefined
    null
    NaN
*/

let x = {};

console.log('Value of x is: ', x);

if (x) {
    console.log('variable is truthy');

} else {
    console.log('variable is falsy');

}