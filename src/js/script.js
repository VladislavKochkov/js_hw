'use strict';

function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    return result;
}
const characters = 'afcieubnicnsIFDVD342JVNEW34kfdkp';
const key = generateKey(16, characters);
console.log(key);
