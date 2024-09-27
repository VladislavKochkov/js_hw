'use strict';

const createTable = document.getElementById('generateTable');
let counter = 1;
for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = counter;

        counter++;

        row.appendChild(cell);
    }
    createTable.appendChild(row);
}
