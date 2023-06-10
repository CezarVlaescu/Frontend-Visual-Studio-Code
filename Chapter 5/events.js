// clicking a button is an event

const ul = document.querySelector('ul')
// ul.remove(); remove something from the dom

const button = document.querySelector('button');

button.addEventListener('click', () =>{
    //console.log('button clicked');
    //ul.innerHTML += '<li>something new</li>'
    const li = document.createElement('li');
    li.textContent = 'something new';
    // ul.append(li); // put at the buttom of the parent
    ul.prepend(li); // put at the top
}); // will print in console of browser

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (e) => { // e is an event object
        //console.log('item clicked');
        //console.log(e); created by the browser
        //console.log(e.target); // we know what event is in console
        //e.target.style.textDecoration = 'line-through'; // add a line to the element selected 
        console.log('event in LI');
        e.stopPropagation(); // stop the event bubbling up 
        e.target.remove();
    });
});

// event bubbling and delegates 

ul.addEventListener('click', e =>{
    //console.log('event in UL');
    //console.log(e.target); doing the same as we have the foreach from above
    if(e.target.tagName === 'LI'){
        e.target.remove(); // looking for the tagname and remove it 
    }
})