'use strict';


// task #1
const name = prompt('Как вас зовут?');
const age = prompt('Сколько вам лет?');
const likesProgramming = confirm('Нравиться ли вам програмирование?');


// task #2
console.log('Name:', name);
console.log('Age:', age);
console.log('Likes Programming:', likesProgramming);

console.log('name', typeof name);
console.log('age', typeof age);
console.log('likesProgramming', typeof likesProgramming);


//task #3
const greeting = (`Hello, ${name}`);
alert(greeting);


//task #4
const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log =(nextAge);


//task #5
function isAdult(age) {
    if (age >=18) {
        return 'True';
    }
    else {
        return 'False';
    }
}
console.log = (isAdult(numericAge));