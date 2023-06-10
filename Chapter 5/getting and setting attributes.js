const link = document.querySelector('a');

console.log(link.getAttribute('href')); // prints the link from href

link.setAttribute('href', 'https://www.domain.com'); // set a new attribute to the specific type 
link.innerText = 'TheNet'; // change the text of that attribute

const msg = document.querySelector('p');

console.log(msg.getAttribute('class')); // print the class attribute ('error')
msg.setAttribute('class', 'success');