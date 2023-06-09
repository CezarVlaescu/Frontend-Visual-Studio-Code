//const blogs = [
    //{title: 'mac and cheese', likes: 30},
    //{title: 'yes yes', likes: 100}
//];

let user ={
    name: 'cezar',
    age: 30,
    blogs: [{title: 'mac and cheese', likes: 30},
           {title: 'yes yes', likes: 100}],
    login(){
        console.log('the user is log in');
    },
    logout(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog=>{ // refering to the object itself from the object (in our case blogs)
            console.log(blog.title, blog.likes); // accessing the datas from an object from arrays
        });
    } 
};

user.logout();
console.log(this);