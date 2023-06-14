// date & times

const before = new Date('February 1 2023 7:30:09');
const now = new Date(); // an object
console.log(typeof(now));

// year, months, day, times

console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getTime: ', now.getHours(), now.getMinutes(), now.getSeconds());

// timestamps

console.log('timestamp', now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
const mins = Math.round(diff / 1000 / 60); // convert the milisecond 
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`The blog was written ${days} days ago`)

// converting timestamps into date objects

const timestamp = 1675938474990;
const d = new Date(timestamp)
console.log(d);


// date string 

console.log(now.toDateString());
console.log(now.toTimeString());
