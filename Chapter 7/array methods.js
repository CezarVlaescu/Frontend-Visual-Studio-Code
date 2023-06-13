// filter -> return only the elements that match with the condition

const scores = [10, 30, 15, 25, 50, 40];

const filt = scores.filter((score) => {
    return score > 20;
}); // filter the elements from array by a condition 

console.log(filt);

const users = [
    {name: 'cezar', premium: true},
    {name: 'sebi', premium:true},
    {name: 'andrei', premium:false}
];

const premiumUsers = users.filter((user) => user.premium ); // for one return we can have like this

console.log(premiumUsers);

// map -> editing the original value with the condition

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const mapping = prices.map((price) =>{
    return price / 2; // modify all the prices from the array with a specific operation
});

console.log(mapping);

const products = [
    {name : 'gold star', price : 20},
    {name : 'silver star', price : 10},
    {name: 'green shells', price: 30}
];

const saleProducts = products.map((product) => {
    if(product.price > 20){
        return {name: product.name, price:product.price / 2} // return a new object by the actual object that will modify the actual object based by a condition
    }
    else{
        return product;
    }
});

console.log(saleProducts);