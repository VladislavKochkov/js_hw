'use strict';

const hours = +prompt("Введите количество часов:");

const minutes= hours * 60;

const seconds = hours * 3600;

if (hours === 0) {
    alert("Error: значення не может быть 0.");
} else {
    alert("В " + hours + " часов находятся " + minutes + " минут и " + seconds + " секунд.");
}

