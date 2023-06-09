// strings 

console.log('Hello'); 
const myString = 'World';
let string = 'Hello';

// string concat

console.log(string + " " + myString);

// getting chars from string

console.log(myString[0]);

// string length

console.log(string.length)

// string methods

console.log(myString.toUpperCase());
let result = string.toLowerCase();

console.log(result, string);

let index = string.indexOf('l'); // first l from string
let index1 = string.lastIndexOf('l'); // the last l from the string
let slice = string.slice(2, 4) // slice from one position to another
let substr = string.substring(0, 3); // substring from one position from another but with the last too
let replace = string.replace('o', 'a'); // replace one value to another

console.log(index);
console.log(slice);
console.log(substr);
console.log(replace);