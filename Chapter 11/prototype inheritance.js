function User(name, email) {
    this.name = name;
    this.email = email;
};

User.prototype.login = function(){
    console.log('user logged in');
    return this;
}

function Admin(name, email, title){
    User.call(this, name, email); // its like super 
    this.title = title;
};

Admin.prototype = Object.create(User.prototype); // creates a new object based by the user prototype
Admin.prototype.deleteUser = function() {
    
}

const user = new Admin('cezar', 'cezar@yahoo.com', 'black');


// everything inheritance from object proto