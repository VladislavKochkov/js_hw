'use strict';

//  function to select and display a random image
function showRandomImage() {
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
    ];
    const randomImage = getRandomElement(images);
    displayImage(`./images/${randomImage}`);
}

// function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// function to create an HTML image element
function createImageElement(src, alt = 'Random Image') {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = alt;
    return imgElement;
}

// function to display the image on the page
function displayImage(imagePath) {
    const imgElement = createImageElement(imagePath);
    document.body.appendChild(imgElement);
}

showRandomImage();
