'use strict';

// function to create elements
const createElements = () => {
    //create input
    const inputText = document.createElement('input');
    inputText.id = 'textField';
    inputText.type = 'text';
    inputText.placeholder = 'click on me <3';

    // create a div that will be displayed
    const displayDiv = document.createElement('div');
    displayDiv.id = 'appear';
    displayDiv.style.display = 'none';

    // create an img that will be inside the div
    const img = document.createElement('img');
    img.src =
        'https://i.pinimg.com/564x/8b/c6/ee/8bc6ee2d03c78490b6decec75c7e5662.jpg';
    img.alt = 'Hello, I`m spider-man!';
    displayDiv.appendChild(img);
    return { inputText, displayDiv };
};

// function for inserting elements on the page
const insertElements = ({ inputText, displayDiv }) => {
    document.body.appendChild(inputText);
    document.body.appendChild(displayDiv);
};

// function to add event handlers
const addEventListeners = (inputText, displayDiv) => {
    inputText.addEventListener('focusin', () => {
        displayDiv.style.display = 'block';
    });
    inputText.addEventListener('focusout', () => {
        displayDiv.style.display = 'none';
    });
};

// call functions to create, insert and add event handlers
const elements = createElements();
insertElements(elements);
addEventListeners(elements.inputText, elements.displayDiv);
