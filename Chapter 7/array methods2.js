// reduce method -> returns a number of the elements matched the condition

const scores = [10, 20, 50, 60, 70, 90];

const reducing = scores.reduce((accumulater, current) => {
    if(current > 50){
        accumulater++;
    }
    return accumulater;
}, 0);

console.log(reducing);

const players = [
    {name : 'cezar', score : 20},
    {name : 'sebi', score : 50},
    {name: 'cezar', score: 90},
    {name: 'andrei', score: 30},
    {name : 'cezar', score : 20},
    {name : 'sebi', score : 50},
    {name: 'cezar', score: 90},
    {name: 'andrei', score: 30},
];

const playersScores = players.reduce((acc, curr) => { // current represent the object from the array
    if(curr.name === 'cezar'){
        acc += curr.score;
    };
    return acc;
}, 0);

console.log(playersScores);

// find method -> return the first element inside the array that pass a test from the arrow function

const numbers = [10, 5, 0, 40, 60, 10, 20, 70];

const finding  = numbers.find((number) => number > 50); // stops at the first element that match the true in this condition


console.log(finding);

// sort method -> sorting alphabetical the elements ... the opposite method is reverse 

const names = ['cezar', 'andrei', 'sebi', 'budus', 'cosmi'];
const pizzas = [10, 20, 2, 5, 45, 25];

// const sorting = names.sort();
// const reversing = names.reverse();
// const pizzasSort = pizzas.sort();
// console.log(reversing);
// console.log(sorting);
// console.log(pizzasSort);

// sorting 3 obj

const player = [
    {name : 'cezar', score : 20},
    {name : 'sebi', score : 50},
    {name: 'budus', score: 90},
    {name: 'andrei', score: 30},
    {name : 'paul', score : 20},
    {name : 'spanu', score : 50},
    {name: 'cosmi', score: 90},
    {name: 'zuzu', score: 30},
];

player.sort((a,b) => { // a,b are consecutive for each elements from the array 
    if(a.score > b.score){ // we check if the current score a is greater that the next score b
        return -1; // if true, will put the a score first 
    } else if (b.score > a.score){
        return 1; // if true, will put the b score first
    } else {
        return 0; // else they are equal, no changes
    }
});

player.score((a, b) => b.score - a.score); // the shortes version