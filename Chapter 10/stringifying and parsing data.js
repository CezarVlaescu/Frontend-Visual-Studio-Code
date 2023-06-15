const todos = [
    {text:'play mariokart', author: 'shaun'},
    {text:'play mari', author: 'mario'},
    {text:'play kart', author: 'luigi'}
];


localStorage.setItem('todos', JSON.stringify(todos)); // storing a json in the local storage

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored)); // we parse the json 