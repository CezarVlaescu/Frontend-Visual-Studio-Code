// add todos

const addForm = document.querySelector('.add');

const list = document.querySelector('.todos'); // the ul

const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash"></i>
    </li>`;

    list.innerHTML += html;
};

addForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim - to avoid all the spaces when user reading
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }    
});


// detele todos
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){ // if the class list of the target we are looking has a delete 
        e.target.parentElement.remove(); // remove the element of the parent element (li)
    }
});

// search todos

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
};

search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
});
