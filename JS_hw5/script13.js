/* 13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п. b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку; c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.*/

document.write('</br> Задание 13: </br>');


function isValidEmail(email) {
    // Проверка на наличие символа '@' и его позиции
    var atIndex = email.indexOf('@');
    if (atIndex <= 0 || atIndex === email.length - 1) {
        return false;
    }

    // Разделение адреса на имя и домен
    var username = email.slice(0, atIndex);
    var domain = email.slice(atIndex + 1);

    // Проверка имени
    if (username.length < 3 || !/^[a-zA-Z0-9]+$/.test(username) || /^[0-9]+$/.test(username[0]) || /\.\.|\@\@|\-\-|\.\@|\@\./.test(username)) {
        return false;
    }

    // Проверка домена
    var lastDotIndex = domain.lastIndexOf('.');
    if (lastDotIndex <= 0 || lastDotIndex === domain.length - 1 || domain.length - lastDotIndex - 1 < 2 || domain.length - lastDotIndex - 1 > 11) {
        return false;
    }

    // Проверка на наличие русских букв и спецсимволов в адресе
    if (/[^a-zA-Z0-9@_.-]/.test(email)) {
        return false;
    }

    return true;
}

// Пример использования
var email = prompt("Введите адрес электронной почты:");
if (isValidEmail(email)) {
    console.log("Адрес электронной почты верен.");
} else {
    console.log("Адрес электронной почты неверен.");
}
