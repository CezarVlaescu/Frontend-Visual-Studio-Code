const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('OI? my content is copyright')
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e)=>{
    console.log(e.offxetX, e.offxetY);
    box.textContent = `x pos - ${e.offxetX} y pos - ${e.offxetY}`;
})