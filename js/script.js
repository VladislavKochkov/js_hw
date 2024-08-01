'use strict';

let operand1 = parseFloat(prompt("Введите первое число"));
let operand2 = parseFloat(prompt("Введите второе число"));

let subtractionResult = operand1 - operand2;
console.log(`Результат: ${operand1} - ${operand2} = ${subtractionResult}`);

let additionResult = operand1 + operand2;
console.log(`Результат: ${operand1} + ${operand2} = ${additionResult}`);

let multiplicationResult = operand1 * operand2;
console.log(`Результат: ${operand1} * ${operand2} = ${multiplicationResult}`);

let divisionResult = operand1 / operand2;
console.log(`Результат: ${operand1} / ${operand2} = ${divisionResult}`);