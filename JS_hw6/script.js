/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */
document.write('<br>' + 'Задание 1:' + '<br>');

let str0 = 'aaa@bbb@ccc';
let replacedStr = str0.replace(/@/g, '!');
document.write(replacedStr);

function replace(str) {
    return str.replaceAll('@', '!');
}
document.write(replace('aaa@bbb@ccc'));

/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025. */
document.write('<br>' + 'Задание 2:' + '<br>');

let dateString = '2025-12-31';
let dateParts = dateString.split('-');
let formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
document.write(formattedDate);
///
let date2 = '2025-12-31';
let rez = date2.split('-').reverse().join('/');

document.write(rez);

/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice). */
document.write('<br>' + 'Задание 3:' + '<br>');

let str = 'Я учу javascript!';
// Используя substr
let cut1 = str.substr(2, 3); 
let cut2 = str.substr(6, 10); 
document.write(cut1  + ' ' + cut2 + '<br>');

// Используя substring
let cut3 = str.substring(2, 5);  
let cut4 = str.substring(6, 16); 
document.write(cut3 + ' ' + cut4 + '<br>'); 

// Используя slice
let cut5 = str.slice(2, 5);  
let cut6 = str.slice(6, 16); 
document.write(cut5 + ' ' + cut6 + '<br>'); 

/* 4.Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

document.write('<br>' + 'Задание 4:' + '<br>');

let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 3);
}
let squareArr = Math.sqrt(sum);
document.write(squareArr);

/* 5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */

// document.write('<br>' + 'Задание 5:' + '<br>');

function calc(a, b) {
    c = Math.abs(a-b);
    return c;
}
console.log(calc(3, 5));
console.log(calc(6, 1));

/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */

document.write('Задание 6' + '<br>');

let date = new Date();
let resDate = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
let numbers = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
document.write(numbers + ' ' + resDate + '<br>');

function addZero (num) {
    if (num <=9) {
        return num = '0' + num;
    } else {
        return num;
    }
}

document.write('<br>');


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */

function getStr(str) {
    let regExp = /ab+a/g;
    let rez = str.match(regExp);
    return rez;
}

document.write(getStr('aa aba abba abbba abca abea') + '<br>');
document.write('<br>');

/* 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.
*/

function validTel (tel) {
    let phonTel = /[+]*[0-9]{0,3}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/gi;
    //let rightTel = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    console.log(phonTel.test(tel));
}
validTel('+375(29)025-54-59');
validTel('(143) 445-7890')

document.write('<br>');
/* 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные
выражения.
*/
console.log('Задание 9');
/**
 * 
 * @param {string} mail 
 * @returns boolean
 */

const email = (mail) => {
    const regExp = /^[a-z]{1}[a-z0-9_\.\-]{1,}@[a-z]{1}[a-z0-9_\.\-]{1,10}\.[a-z]{2,11}$/gi;
    return regExp.test(mail);
}

document.write(email('ящик@почта.бел') + '<br>');
document.write(email('user_top@mail.com') + '<br>');
document.write(email('1yser1@mail.ru') + '<br>');

document.write('<br>');

/* 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.
*/

document.write('Задание 10' + '<br>');

/**
 * 
 * @param {string} url 
 */

const adress = (url) => {
    const regExp = /(https?:\/\/[a-z][a-z0-9]+(?:.[a-z0-9]+)*.[a-z]{2,11})(\/(?:[^#?\s])+)?(\?[^#]+)?(#\w+)?/gi;
    let group = regExp.exec(url) || [];

    return [...group].filter((item, index) => index !== 0 ? item : null);

    /**
     * function(item, index) {
     * if (index !== 0) {
     *  return item;
     * } else {
     *  return null;
     * }
     * }
     */
}

document.write(adress('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));
