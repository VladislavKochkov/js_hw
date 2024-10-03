'use strict';

// function for generating the content of cells using a closed counter function
function createCellContentGenerator() {
    let count = 1;

    return function () {
        return count++;
    };
}

// function for creating a table with verification of argument types
function generateTable(rowCount, columnCount) {
    // Перевірка типів аргументів
    if (typeof rowCount !== 'number' || typeof columnCount !== 'number') {
        throw new Error('rowCount та columnCount мають бути числами');
    }

    const table = document.createElement('table');

    const generateCellContent = createCellContentGenerator();

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        const row = document.createElement('tr');

        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            const cell = document.createElement('td');
            cell.textContent = generateCellContent();
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

// function to insert a table into a page with argument type checking
function insertTableIntoDOM(tableElement) {
    // argument type check
    if (!(tableElement instanceof HTMLTableElement)) {
        throw new Error(
            'Аргумент має бути елементом таблиці (HTMLTableElement)'
        );
    }
    document.body.appendChild(tableElement);
}

// main function for creating and displaying a table
function createAndDisplayTable(rowCount, columnCount) {
    try {
        const table = generateTable(rowCount, columnCount);
        insertTableIntoDOM(table);
    } catch (error) {
        console.error(error.message);
    }
}

// we call the main function to create and display a 10x10 table
createAndDisplayTable(10, 10);
