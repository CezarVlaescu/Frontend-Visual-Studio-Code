// constructor functions 

function User(name, email) {
    this.name = name;
    this.email = email;
};

// prototype method -> every object in JS has a prototype, contain all the methods for that object type, create the access to all methods of that type of prototype

// ex : Date prototype has getDay(), getMonth()
//      array prototype has filter, sort
//      new Array , __proto__

User.prototype.login = function(){
    console.log(`${this.name} has logged in`);
    return this;
}

const user = new User('cezar', 'cezar@yahoo.com');
user.login();
