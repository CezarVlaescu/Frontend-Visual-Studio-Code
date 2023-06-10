const para = document.querySelector('p'); // store that p in a constant

console.log(para.innerText); // getting in the text from that p 

para.innerText = 'ninjas is awesome!'; // override the text from p

const p = document.querySelectorAll('p');

p.forEach(paras =>{
    console.log(paras.innerText);
    paras.innerText += 'new text'; // take all p and add this text in plus
});

const content = document.querySelector('content'); 
console.log(content.innerHTML); // select the html inside a div, span

content.innerHTML = '<h2>This is a new h2</h2>'; // replace the html one with this one (if we want to append, we are using += inside of =)

// database exemple

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>` // for each person from people, select query content and append person as a paragraph
})