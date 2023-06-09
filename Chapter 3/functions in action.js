const ul = document.querySelector('.people'); // from html index

const people = ['cezar', 'andrei', 'budus'];

let html = ``;

people.forEach(person => {
    // create html template for each person
    html += `<li style="color: purple">${person}</li>`
});

console.log(html);

ul.innerHTML = html;