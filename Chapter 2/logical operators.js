// logical 

const password = 'cezar@'

if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
}
else if (password.length >= 8 || password.includes('@')){
    console.log('password is strong enough');
}
else{
    console.log('password not strong enough');
}