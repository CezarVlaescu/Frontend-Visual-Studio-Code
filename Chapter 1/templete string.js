const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concat way 

let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
console.log(result);

// template string way

let result1 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result1);

// creating html temp 

let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`
console.log(html);