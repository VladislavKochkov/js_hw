'use strict';

function variableScope() {
    for (var i = 0; i < 3; i++) {
        console.log('всередині циклу:', i);
    }
    for (let j = 0; j < 3; j++) {
        console.log('всередині циклу:', j);
    }
    for (let k = 0; k < 1; k++) {
        const insideConst = 'inside const';
        console.log('всередині циклу:', insideConst);
    }
    console.log('поза циклом:', i);

    try {
        console.log('поза циклом:', j);
    } catch (e) {
        console.log('Помилка при доступі поза циклом:', e.message);
    }
    try {
        console.log('поза циклом:', insideConst);
    } catch (e) {
        console.log('Помилка при доступі поза циклом:', e.message);
    }
}
variableScope();
