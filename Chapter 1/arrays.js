let ninjas = ['cezar', 'sebi', 'andrei'];

ninjas[1] = 'budus'
console.log(ninjas[1]);

let ages = [20, 25, 30];

// methods

let result = ages.join(','); // put a char between things in array
let result1 = ages.indexOf(20); // get the index of the specific value
let result2 = ninjas.concat(['cezar', 'starwalker']) // join things togheter
let result3 = ninjas.push('sebi'); // adding a new value to array and read the array with that value so change the length
let result4 = ninjas.pop(); // return the value from the bottom of array and read the array without that value so change the length

console.log(result3);