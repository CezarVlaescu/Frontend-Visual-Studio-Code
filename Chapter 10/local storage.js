// application data - set up a database to store data
//                  - use local storage to store

// site -> data -> local storage (in browser) -> data -> site refreshes

// store data in local storage

localStorage.setItem('name', 'cezar');
localStorage.setItem('age', 26);

// get data from local storage

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

// update data

name = localStorage.setItem('name', 'luigi');
localStorage.age = '40';
console.log(name);

// delete data from local storage

localStorage.removeItem('name'); // removes just one item
localStorage.clear(); // removes all
name = localStorage.getItem('name');
console.log(name);