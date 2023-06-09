const speak = function(name = 'luigi'){
    console.log(`good day ${name}`);
}

speak();
speak('cezar');

// returning values

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
    // or
    //return 3.14 * radius**2;
}

const result = calcArea(5);
console.log(result);




