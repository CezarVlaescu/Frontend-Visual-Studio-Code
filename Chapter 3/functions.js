// function declaration -> HOISTING only for function declaration 

function greet(){
    console.log("Hello World");
}

// function expression

const speak = function() {
    console.log("Good day");
};


speak();
greet(); // invoking the function