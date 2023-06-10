// get an element by ID

const title = document.getElementById('page-title'); // singular

// get elements by their class name 

const errors = document.getElementsByClassName('error'); // plural -> html collection (we can't use foreach)
console.log(errors[0]);

// get elements by their tag name

const paras = document.getElementsByTagName('p'); // html collection not nodelist
