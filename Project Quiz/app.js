const correctAnswer = ['A', 'A', 'B', 'C'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers 

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 25;
        }
    });

    // show result on page
    
    window.scrollTo(0,0);
    
    result.classList.remove('d-none'); // remove the hiding of the class

    let output = 0;
    const timer = setInterval(() =>{
       result.querySelector('span').textContent = `${output}%`; // override the span
       if(output === score){
          clearInterval(timer);
       }else{
          output++;
       }
    }, 10);
});

// window object ( global obhect )

// console.log(window.document.querySelector('form'));

// window.setTimeout(() => {
//     alert('Hello');
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i==5){
//        clearInterval(timer);
//     }
// }, 1000);
