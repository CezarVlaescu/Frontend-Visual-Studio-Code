// DOM - Document Object Model

// It's created by the browser, it's a 'document' object

// Describe it like a tree of nodes

//                   html (root node)
//                  /    \
//                head   body
//                /      /  \
// (text node)  title   h1   div
//                             \
//                              p (text node)


// The queryies

const paragraph = document.querySelector('p'); // the first p from html document
const para = document.querySelector('.error'); // select specific p with that class from html document
const par = document.querySelector('div.error'); // select specific div with that class from html 
const h1 = document.querySelector('body > h1'); // looking for body and select the h1 from html document

const paras = document.querySelectorAll('p'); // grab all p tags from the html document -> nodelist

paras.forEach(paragr => {
    console.log(paragr);
});

console.log(paragraph);
console.log(para);
console.log(par);
console.log(h1);
console.log(paras);
console.log(paras[0]);