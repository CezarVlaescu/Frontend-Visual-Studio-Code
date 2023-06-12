// regular expressions - RegEx

const username = '123cezare';
const pattern = /[a-z]{6,}/; // verify the letters and if is 6 char longer

let result = pattern.test(username); // bool return 

if(result){
    console.log("Test passed");
}
else{
    console.log("Test failed");
}

let result1 = username.search(pattern); // oposite of pattern.test , return an int 
console.log(result1); // match the first letter of the match
