// for loops

for(let i = 0; i<5; i++){
    console.log(i);
}

const names = ['cezar', 'mario', 'luigi'];

for(let i = 0; i< names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`
    console.log(html);
}

// while loop

/*let i = 0;
while(i < 5){
    console.log(i);
    i++;
}*/

// do-while loop

let i = 0;
do{
   i++; // 1, 2, 3, 4, 5
   console.log(i);
   i++; // 0, 1, 2, 3, 4
}while(i<5)