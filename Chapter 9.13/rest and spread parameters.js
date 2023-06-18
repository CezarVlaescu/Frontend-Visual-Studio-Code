// rest parameter 

const double = (...nums) => {
    // do something
    // console.log(nums);
    return nums.map(num => num * 2)
}
const result = double(1,3,4,5,6,8,9);
console.log(result);

// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crysal'];
console.log(...people); // the opposite of rest, when we need the elements from an array 

const members = ['mario', 'sebi', ...people];
console.log(members);

// spread syntax (objects)

const persons = {name:'shaun', age:30, job:'net ninja'}
const personClone = {...persons, location: 'Manchester'};
console.log(personClone);

// symbols

const symbol = new Symbol('a generic name');
console.log(symbol === symbol); // false because it's a unique value for each instance

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja[symbol] = 'cezar';

console.log(ninja);
