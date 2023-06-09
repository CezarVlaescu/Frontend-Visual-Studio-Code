let user ={
    name: 'cezar',
    age: 30,
    blogs: ['mac and cheese', 'yes yes'],
    login(){
        console.log('the user is log in');
    },
    logout(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog=>{ // refering to the object itself from the object (in our case blogs)
            console.log(blog);
        });
    } 
};

user.logout();
console.log(this);