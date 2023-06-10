const article = document.querySelector('article'); // index2

console.log(article.children);

console.log(Array.from(article.children)); // transform the html collection to an array to iterate thru them 

Array.from(article.children).forEach((child) => {
    child.classList.add('article-element'); // adding the class name to class for each child inside a parrent (article)
});

const title = document.querySelector('h2');

console.log(title.parentElement); // the parent of h2 is article
console.log(title.parentElement.parentElement); // the parent of the article is body 
console.log(title.nextElementSibling); // the sibling is p (the next after)
