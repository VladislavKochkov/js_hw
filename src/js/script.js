'use strict';

function exponentiation(base, exponent) {
    const result = Math.pow(base, exponent);
    alert(`Результат: ${base} в степени ${exponent} = ${result}`);
}

function mainFunction(callback) {
    const base = parseFloat(
        prompt('Введите число для поднесения его в степень:')
    );
    const exponent = parseFloat(prompt('Введите степень:'));
    callback(base, exponent);
}

mainFunction(exponentiation);

function multiplay(a, b) {
    const result = a * b;
    alert(`Результат умножения: ${a} * ${b} = ${result}`);
}

function mainFunction1(callback) {
    const a = parseFloat(prompt('Введите первое число:'));
    const b = parseFloat(prompt('Введите второе число:'));
    callback(a, b);
}

mainFunction1(multiplay);

function division(a, b) {
    const result = a / b;
    alert(`Результат деления: ${a} / ${b} = ${result}`);
}

function mainFunction2(callback) {
    const a = parseFloat(prompt('Введите первое число:'));
    const b = parseFloat(prompt('Введите второе число:'));
    callback(a, b);
}

mainFunction2(division);

function modulo(a, b) {
    const result = a % b;
    alert(`Результат остатка от деления: ${a} % ${b} = ${result}`);
}

function mainFunction3(callback) {
    const a = parseFloat(prompt('Введите первое число:'));
    const b = parseFloat(prompt('Введите второе число:'));
    callback(a, b);
}

mainFunction3(modulo);
