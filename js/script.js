'use strict'

function getUserData() {
const yearOfBirth = prompt("Введите свой год рождения:");
const currentYear = new Date().getFullYear();
const age= currentYear - yearOfBirth;
if (yearOfBirth === null) {
    alert('Очень жаль, что Вы не захотели ввести свой год рождения!');
    return;
}

const city = prompt("Введите в каком городе живете:");
if (city === null) {
    alert('Очень жаль, что Вы не захотели ввести свой город!');
    return;
}

const favoriteSport = prompt("Ваш любимый вид спорта:");
if (favoriteSport === null) {
    alert ('Очень жаль, что Вы не захотели ввести свой любимый спорт!');
    return;
}

let cityMessage;
if (city.toLowerCase() === "киев") {
    cityMessage = "Ты живешь в столице Украины.";
} else if (city.toLowerCase() === "вашингтон") {
    cityMessage = "Ты живешь в столице США.";
} else if (city.toLowerCase() === "лондон") {
    cityMessage = "Ты живешь в столице Великобритании.";
} else {
    cityMessage = `Ты живешь в городе ${city}.`;
}

let sportMessage;
if (favoriteSport.toLowerCase() === "футбол") {
    sportMessage = "Круто! Ты хочешь быть как Неймар?";
} else if (favoriteSport.toLowerCase() === "баскетбол") {
    sportMessage = "Круто! Ты хочешь быть как Джордан?";
} else if (favoriteSport.toLowerCase() === "гольф") {
    sportMessage = "Круто! Ты хочешь быть как Дастин Джонсон?";
}

const message = `Ваш возраст: ${age} лет.\n${cityMessage}\n ${sportMessage}`;
alert(message);
}

getUserData();