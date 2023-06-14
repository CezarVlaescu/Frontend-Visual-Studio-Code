
const getTodos = (resource) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
          if(request.readyState === 4 & request.status === 200){ 
            const data = JSON.parse(request.responseText);
            resolve(data);
          } else if(request.readyState === 4){ 
            reject('error');           
          }
        });
        request.open('GET', resource); 
        request.send(); 
    });    

};

getTodos('todos/todos.json').then(data=>{
    console.log('promise resolved: ', data);
    return getTodos('todos/no.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/yes.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log('promise rejected: ', err);
});

// promises

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something 
//         resolve('some data');
//         reject('this error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data); // this is for resolve
// }, (err) => {
//     console.error(err); // this is for reject
// })

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })