'use strict';

(function () {
    const ulElement = document.getElementById('ulId');

    // output each list item to the console
    const logItems = () => {
        const listItems = ulElement.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            console.log(listItems[i].textContent);
        }
    };

    // extract all attributes of the ul tag and display their values ​​and names
    const getAttributes = () => {
        const valueArr = [];
        const nameArr = [];
        const attributes = ulElement.attributes;

        for (const attr of attributes) {
            valueArr.push(attr.value); // Записуємо значення атрибутів
            nameArr.push(attr.name); // Записуємо імена атрибутів
        }

        console.log(valueArr);
        console.log(nameArr);
    };

    // change the text in the last li tag
    const lastLiChanges = (name) => {
        const listItems = ulElement.getElementsByTagName('li');
        listItems[listItems.length - 1].textContent =
            `Hello, my name is ${name}`;
    };

    // add the 'data-my-name' attribute to the first li element
    const addAttribute = (name) => {
        const listItems = ulElement.getElementsByTagName('li');
        listItems[0].setAttribute('data-my-name', name);
    };

    // remove the 'data-dog-tail' attribute from the ol tag

    const removeAttribute = () => {
        ulElement.removeAttribute('data-dog-tail');
    };

    // call the functions
    logItems();
    getAttributes();
    lastLiChanges('Vladislav');
    addAttribute('Vladislav');
    removeAttribute();
    logItems();
    getAttributes();
})();
