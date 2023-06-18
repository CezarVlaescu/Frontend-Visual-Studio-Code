// Difference between primitive and objects 

// const name = 'cezar'; // primitive
// const name1 = new String('Cezar'); // object

const userOne = {
    username : 'cezar',
    email: 'cezar@yahoo.com',
    login(){
        console.log('user logged');
    },
    logout(){
        console.log('user logout');
    }
}; // object

// console.log(typeof(name));
// console.log(typeof(name1));
console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = new User('shaun@yahoo.com', 'shaun'); // new obj with new constructor

// class (prototype for object) -> prorieties (color, model, engine) -> functionality (drive, reverse, brake)

class UserClass {
    constructor(email, userName){ // construct our object and define proprieties
        // setup proprities 
        this._userName = userName; // this is a reference to the new object created
        this._email = email;
        this.score = 0;
    }
    login() {
        return `User ${this._userName} is logging in`;
    }
    logout() {
        return `User ${this._userName} is logging out`
    }
    incScore(){
        this.score++;
        console.log(`${this.userName} has a score of ${this.score}`);
        return this; // referece to the object instance
    }
}

const userThree = new UserClass('cezar@yahoo.com', 'cezar'); // instance 
console.log(userThree.login());
userThree.login().logout(); // return undefined
userThree.incScore().incScore(); // will work because we return this, and the method chaining working if we return this

// the new keyword -> creates an empty object
//                 -> binds the value of 'this' to the new empty object
//                 -> calls the constructor function to build the object