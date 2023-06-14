// JS is an sync language

// Single thread -> Statement 1 -> Statement 2 -> Statement 3 -> Callback
//                                  database (takes time) ------->

// Async -> start something now & finish it later

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback'); // callback function will be called after the async code has finished running
},2000);

console.log(3);
console.log(4);