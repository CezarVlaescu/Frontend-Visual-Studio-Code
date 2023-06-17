// JS is an sync language

// Single thread -> a thread is like an order of sequence and statements, an only a statement can run at a time (takes time for every statement to get data request for exemple)

// Statement 1 -> Statement 2 -> Statement 3 -> Callback
//                                  database (takes time) ------->

// Async -> start something now & finish it later, we have a callback at the final of statements

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback'); // callback function will be called after the async code has finished running
},2000);

console.log(3);
console.log(4);