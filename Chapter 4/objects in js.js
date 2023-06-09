// ex : we have a user

// properties : email. username, gender
// methods : login, logout

// ex we have a blog

// properties : title, content, author
// methods : publish, unpublish, delete

// object literals 

let user = {
    name: "Cezar",
    age: 26,
    town: "Cluj"
}; // this is an object and is similar to JSON files

console.log(user.age); // calling from an object

const key = 'name'
user[key] = "Sebi"; // change the name key 
console.log(user.name);

console.log(typeof(user)); // type of variable