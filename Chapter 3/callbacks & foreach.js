// callbacks and foreach

const myFunct = (callbackFunct) => {
    let value = 50;
    callbackFunct(value);
};

myFunct(value => {
    console.log(value);
}); // callback funct


let people = ['cezar', 'sebi', 'andrei'];

people.forEach(function(person){
    console.log(person); // cezar, sebi, andrei
}); // the smallest version of for loop, and the foreach from C# but without define a special variable to itareate over the array

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`) // index is foreach the index of the element of array
};

people.forEach(logPerson); // callback function 