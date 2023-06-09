// arrow functions

const calcArea = (radius) => {
    return Math.PI * radius * radius;
};

const area = calcArea(2);
console.log(area);

const greet = () => 'Hello World'

console.log(greet());

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total
};

const result = bill([2, 3, 4, 5], 10);
console.log(result);