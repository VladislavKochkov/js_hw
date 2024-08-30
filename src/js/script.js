'use strict';

//Task 1

function calculateAverage(array) {
    let sum = 0;
    let count = 0;
    array.forEach((item) => {
        if (typeof item === 'number') {
            sum += item;
            count++;
        }
    });
    return count > 0 ? sum / count : 0;
}
const array = [1, 'f', 3, null, 5, 6, 7, 'c', 8, true];
const average = calculateAverage(array);
console.log(average);

//Task 2

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return 'Неизвестный оператор';
    }
}

const x = parseFloat(prompt('Введите первое число:'));
const znak = prompt('Введите математический оператор (+, -, *, /, %, ^):');
const y = parseFloat(prompt('Введите второе число:'));

const result = doMath(x, znak, y);
console.log('Результат:', result);

//Task 3

function create2DArray() {
    const mainArrayLength = parseFloat(
        prompt('Введите длину основного масива:')
    );
    const array = [];
    for (let i = 0; i < mainArrayLength; i++) {
        const innerArrayLenght = parseFloat(
            prompt(`Введите длину внутренего масива для елмента ${i + +1}:`)
        );
        const innerArray = [];
        for (let j = 0; j < innerArrayLenght; j++) {
            const value = prompt(`[${i + 1}][${j + 1}];`);
            innerArray.push(value);
        }
        array.push(innerArray);
    }
    return array;
}
const arrayResult = create2DArray();
console.log('Двухмерный масив:', arrayResult);

//Task 4

function removeCharacters(str, charsToRemove) {
    for (const char of charsToRemove) {
        const regex = new RegExp(char, 'g');
        str = str.replace(regex, '');
    }
    return str;
}
const inpusString = prompt('Введите строку:');
const chars = prompt(
    'Введите символы для удаления, розделенные запятой:'
).split(',');
const removeCharactersresult = removeCharacters(inpusString, chars);
console.log('Результат:', removeCharactersresult);
