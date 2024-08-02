'use strict';

const operand1 = parseFloat(prompt("Введите первое число"));
const operand2 = parseFloat(prompt("Введите второе число"));

const subtractionResult = operand1 - operand2;
console.log(`Результат: ${operand1} - ${operand2} = ${subtractionResult}`);

const additionResult = operand1 + operand2;
console.log(`Результат: ${operand1} + ${operand2} = ${additionResult}`);

const multiplicationResult = operand1 * operand2;
console.log(`Результат: ${operand1} * ${operand2} = ${multiplicationResult}`);

const divisionResult = operand1 / operand2;
console.log(`Результат: ${operand1} / ${operand2} = ${divisionResult}`);