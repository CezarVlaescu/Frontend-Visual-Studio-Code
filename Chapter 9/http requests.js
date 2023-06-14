// http requests -> make requests to get data from another server ( to API endpoints )

// Site -> Http Request -> Some other server -> Response(data) -> Site (datas are coming as a JSON file, like an object in JS)

const getTodos = (resource, callback) => {
    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState); // Steps : 0 - 1 - 2 - 3 - 4 the last
       if(request.readyState === 4 & request.status === 200){ // success
           const data = JSON.parse(request.responseText);
           callback(undefined, data);
           //const response = request.responseText;
           //console.log(request, response); // returning data at the last step (json data)
        } else if(request.readyState === 4){ // not success ( other than 200 response )
           //console.log('could not fetch the data');
           callback('could not fetch data', undefined); // getTodos arguments from bottom for logic 
        }
    });

    request.open('GET', resource); // type and from where (usually we have an http site)
    request.send(); // send the request
};

console.log(1);
console.log(2);

getTodos('todos/todos.json', (err, data) => {
    console.log(data);
    //if(err){
        //return alert(`Error: ${err}`);
    //}
    //else{
       // console.log(data);
    //}
    getTodos('todos/no.json', (err,data)=>{
        console.log(data);
        getTodos('todos/yes.json', (err, data)=>{
            console.log(data);
        }); // nested callbacks
    });
});

console.log(3);
console.log(4); // async, will execute the code and after will call back and execute the blocks, output : 1, 2, 3, 4, the request


// Responses : 100 (Information responses) -> 200 (Successful responses) -> 300 (Redirection responsess) -> 400 (Client error responses) -> 500 (Server error responses)
// Requests : GET (retrive data), HEAD (like GET but not response body), POST (submits an entity to the specified resource), PUT (replaces all current representations)
// ,CONNECT (a tunnel to the server to identify the target resource), DELETE (delete the resource), PATCH (patch to a resource), OPTIONS (communication options for target)