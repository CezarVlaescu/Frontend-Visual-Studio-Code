// continue/break 

const success = [50, 20, 0, 30, 100, 20, 10];

for(let i = 0; i<success.length; i++){

    if(success[i] === 0) { continue; }
    console.log(success[i]);

    if(success[i] === 100){
        console.log(`Your score is ${success[i]}`);
        console.log('End the game');
        break;
    }
}