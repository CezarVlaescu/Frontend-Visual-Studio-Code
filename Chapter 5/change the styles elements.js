const title = document.querySelector('h1');

title.style.color = 'blue';
title.style.margin = '50px';

// adding or remove classes

content.classList.add('error');
content.classList.remove('error');

const paras = document.querySelectorAll('p');

paras.forEach(par =>{
    if(par.textContent.includes('error')) // if that paragraph contains the error class (that paraph itereating have error inside the text)
    {   
        par.classList.add('error');
    }
    if(par.innerText.includes('success')){ // same like below
        par.classList.add('success'); // add to the class success 
    }
});

// toggle method 

const title = document.querySelector('.title');

title.classList.toggle('text'); // another way to add to that class name (title text after the toggle)