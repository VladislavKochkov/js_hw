'use strict';

// Масив з назвами зображень
const img = [
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
const nineImg = () => {
    document.getElementById('img').src =
        `images/${img[~~(Math.random() * img.length)]}`;
};
nineImg();
