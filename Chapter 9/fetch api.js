// fetch api 

fetch('todos/todos.json').then((response) =>{
    console.log('resolved', response); // we get the response
    return response.json(); // returns a promise
}).then(data =>{
    console.log(data); // access to data
}).catch((err) => {
    console.log('rejected', err); // we print an error at the end if not
});

// async and await -> will not block the rest of the code, will get some time and tasks

const getTodos = async () => { // returns a promise (takes some time to do the async)
    const response = await fetch('todos/todos.json'); // stops until the promise is resolved

    if(response.status !== 200){
        throw new Error(`Error: ${response.status}`);
    }; // catching errors 

    const data = await response.json(); // its like the top approch but with less code and new keywords
    return data;
};

getTodos().then(data => console.log('resolved', data)).catch(err => console.log('rejected', err.message));