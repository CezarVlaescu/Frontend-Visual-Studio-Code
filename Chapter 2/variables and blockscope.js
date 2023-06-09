// variables & block scope

let age = 30; // global scope -> accessed anywhere 


if(true){
    age = 40; // we can changed the global variable inside a block (only for let, not for const)
    let name = 'cezar'; // block scope -> accessed only at the block level
    console.log('inside code block: ', age, name); // print 40, cezar

    if(true){
        let age = 50; // a change only for the current block
        console.log('inside 2nd code block: ', age); // print 50
    }
}

console.log('outside code block: ', age); // print 40