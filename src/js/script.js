'use strict';

function padString(str, length, char = ' ', padLeft = false) {
    if (
        typeof str !== 'string' ||
        typeof length !== 'number' ||
        typeof char !== 'string' ||
        typeof padLeft !== 'boolean'
    ) {
        return 'some error: invalid type of argument';
    }
    if (char.length !== 1) {
        return 'some error: char must be a single character';
    }
    if (length < 0) {
        return 'some error: length must be a non-negative number';
    }
    if (str.length > length) {
        return str.substr(0, length);
    }

    const paddingLength = length - str.length;
    const padding = char.repeat(paddingLength);

    if (padLeft) {
        return padding + str;
    }
    return str + padding;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2));
