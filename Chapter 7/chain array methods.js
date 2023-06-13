
const products = [
    {name : 'gold star', price : 20},
    {name : 'silver star', price : 10},
    {name: 'green shells', price: 30},
    {name: 'green apple', price: 50},
];

// const filtredArray = products.filter(product => product.price > 20);
// const promos = filtredArray.map((product) => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

// console.log(promos);

// method chaining -> multiple array methods in one single lane

const promos = products.
    filter(product => product.price > 20)
    .map(product => { return `the ${product.name} is ${product.price / 2} pounds`; });