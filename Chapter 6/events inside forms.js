// form events -> capture data or information from a user ( user or password for exemple )

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-z]{6,12}$/; 

//const username = document.querySelector('#username'); // for id

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default action of an event ( like refreshing the page )
    //console.log(username.value);

    //console.log(form.username.value);// fields from form
    // console.log(form.password.value);

    //validation
    const username = form.username.value;
    
    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'Username valid';
    }else{
        // feedback help info
        feedback.textContent = 'Invalid username';
    }
});

form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){ // if is true
        form.username.setAttribute('class', 'success'); // use the class success from index (css)
    }else{
        form.username.setAttribute('class', 'error'); // use the class error from index (css)
    }
});



