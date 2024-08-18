'use strict';

//task 1
let output = '';
for (let i = 20; i <= 30; i += 0.5) {
    output += i + ' ';
}
console.log(output);

//task 2
const exchangeRate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    const hryvnias = dollars * exchangeRate;
    console.log(`${dollars} доларов = ${hryvnias} гривен`);
}

//task 3
const N = 330;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    } else {
        break;
    }
}

//task 4
const Number = 2;
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(Number)) {
    console.log(`${Number} простое число`);
} else {
    console.log(`${Number} не является простым числом`);
}

//task 5
const Number1 = 27;
function isPowerOfThree(num) {
    if (num < 1) return false;
    while (num % 3 === 0) {
        num /= 3;
    }

    return num === 1;
}
if (isPowerOfThree(Number1)) {
    console.log(
        `${Number1} можно получить путем сведения числа 3 в некоторую степень`
    );
} else {
    console.log(
        `${Number1} нельзя получить путем свдение числа 3 в некоторую степень`
    );
}
