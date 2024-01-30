/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром. */

document.write('</br> Задание 1: </br>');
function calculate(a, b, c) {
    // Проверяем, не равно ли третье число нулю, чтобы избежать деления на ноль
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && c !== 0) {
        return (a - b) / c;
    } else {
    // Если какой-то из параметров не является числом или третье число равно 0, выводим сообщение об ошибке
        return 'Ошибка: Пожалуйста, введите корректные числовые значения и убедитесь, что третье число не равно 0.';
    }
}
var result = calculate(45, 6, 3);
document.write('a - b / c = ', result  + '</br>'); 

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром. */
document.write('</br> Задание 2: </br>');
function cubeSquare(number) {
    // Проверка, что переданный параметр - число
    if (typeof number === 'number') {
        var square = Math.pow(number, 2);
        var cube = Math.pow(number, 3);  // Возвращаем объект с квадратом и кубом
        return {
            square: square,
            cube: cube,
        };
    } else {
        // Если переданный параметр не является числом, выводим сообщение об ошибке
        return 'Ошибка: Пожалуйста, введите число.';
    }
}
var number = 5;
var result = cubeSquare(number);
document.write(`Для числа ${number}: Квадрат = ${result.square}, Куб = ${result.cube}`  + '</br>');

/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b. */

document.write('</br> Задание 3: </br>');
// Функция, возвращающая меньшее из двух чисел
function min(a, b) {
    return a < b ? a : b;
}
// Функция, возвращающая большее из двух чисел
function max(a, b) {
    return a > b ? a : b;
}
// Пример:
var number1 = 35;
var number2 = 74;
var minimum = min(number1, number2);
var maximum = max(number1, number2);

document.write('Минимальное число:', minimum  + '</br>'); 
document.write('Максимальное число:', maximum  + '</br>'); 

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив. */

document.write('</br> Задание 4: </br>');

// Функция для создания массива с числовыми значениями в заданном диапазоне
function createArray() {
    var minimum = parseInt(prompt('Введите минимальное значение диапазона:'));
    var maximum = parseInt(prompt('Введите максимальное значение диапазона:'));
    // Проверка корректности введенных значений
    if (isNaN(minimum) || isNaN(maximum)) {
        document.write('Ошибка: Пожалуйста, введите числовые значения.');
        return [];
    } 
    var result  = [];
    for (var i = minimum; i <= maximum; i++) {
        result.push(i);
    }
    return result;
}
// Функция для вывода массива
function displayArray(array) {
    document.write('Полученный массив: ', array);
}
var numericArray = createArray();
displayArray(numericArray + '</br>');

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false. */

document.write('</br> Задание 5: </br>');

function isEven(number) {
    return number % 2 === 0; // Используем оператор остатка от деления на 2 для проверки четности
}
var number1 = 8;
var number2 = 15;

document.write(`${number1} четное: ${isEven(number1)}  </br>`); 
document.write(`${number2} нечетное: ${isEven(number2)} </br>`); 

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */

document.write('</br> Задание 6: </br>');

function filterEvenNumbers(array) {
    var evenNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i])) {
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbersArray = filterEvenNumbers(numbersArray);

document.write('Исходный массив:', numbersArray + '</br>');
document.write('Только четные числа:', evenNumbersArray + '</br>');

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например: */

document.write('</br> Задание 7 - первый вариант: </br>');
//  Первый вариант: 
function drawPyramid(rows) {
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write('<br>');
    }
}
drawPyramid(9); // Вызываем функцию и кол-во строк пирамиды

// Второй вариант: 
document.write('</br> Второй вариант: </br>');
function drawPyramid1(rows) {
    for (var i = 1; i <= rows; i++) {
        // Используем метод repeat для повторения числа i раз
        var row = String(i).repeat(i);
        document.write(row + '<br>');
    }
}
drawPyramid1(9);

document.write('</br> Задание 7: решение с символами: </br>');

function drawPyramid2(rows, symbol = '*') {
    if (symbol.length !== 1 || symbol === ' ') {
        document.write('Пожалуйста, введите один символ, кроме пробела.');
        return;
    }
    for (var i = 1; i <= rows; i++) {
        var row = symbol.repeat(i);
        document.write(row);
        document.write('<br>');
    }
}

drawPyramid2(9); // По умолчанию, используется символ '*'
drawPyramid2(8, '@'); 
drawPyramid2(5, 'JS'); // Выведет сообщение об ошибке

/* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек. Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник. */

document.write('</br> Задание 8: </br>');

document.write('</br> Равнобедренный треугольник: </br>');
function drawTriangle() {
    let h = +prompt('Введите высоты пирамиды');
    for(let i = 1; i <= h; i++){
        document.write(`<pre>${(' ').repeat(h - i) + ('*').repeat(i * 2 - 1)}</pre>`);
    }};

drawTriangle();

document.write('Перевернутый равнобедренный треугольник: </br>');
    function drawReversedTriangle() {
    let h = +prompt('Введите высоты пирамиды');
    for(let i = h; i >= 1; i--){
        document.write(`<pre>${(' ').repeat(h - i) + ('*').repeat(i * 2 - 1)}</pre>`);
    }};

    drawReversedTriangle();

/* 9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000. */

document.write('</br> Задание 9: </br>');

function fib(num){
    if(num <= 1) return num;//провека нужно ли вообще начинать рекурсию
    return fib(num - 1) + fib(num - 2);
}
//fib(3) -> (fib(2) + fib(1)) -> ()
let num = 0;
let array = [];
while(1){
    let buff = fib(num);
    num++;
    if(buff >= 1000) break;
    array.push(buff);

}
document.write(array + '</br>');
fib(2);

document.write('</br> Задание 9 - второй вариант: </br>');

function getFibArr() {
    var fibNumber = [0, 1];
    var nextNumber = 1;
    while (nextNumber <= 1000) {
        fibNumber.push(nextNumber);
        nextNumber = fibNumber[fibNumber.length - 1] + fibNumber[fibNumber.length - 2];
    }
    return fibNumber;
}

var fibNumber = getFibArr();
document.write(fibNumber + '</br>');

/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию. */

document.write('</br> Задание 10: </br>');

function sumNumberString(number) {
    let getString = String(number).split('').map(Number); // Преобразовать число в строку, чтобы получить доступ к цифрам
    let sum = getString.reduce((acc, curr) => acc + curr, 0); // Вычислить сумму цифр
    if (sum > 9) {
        return sumNumberString(sum);
    } // Если сумма больше 9, вызвать функцию рекурсивно
    return sum;  // В противном случае вернуть однозначную сумму
}

let inputNumber = 155456;
let result = sumNumberString(inputNumber);
document.write("Дана строка чисел: ", inputNumber, "</br>Cумма всех перечисленных чисел: ", result + '</br>');

document.write('</br> Задание 10 - второй вариант: </br>');
function sumNumbers(num){
    if(num <= 9) return num;
    let rez = 0;
    for(let n of num.toString()) {
        //преобразов в стрку
    rez += +n; //rez = rez + Number(n)
    }
        if(rez > 9){
        return sumNumbers(rez);
    } else {
        return rez;
    }
}
document.write("Дана строка 155456. Cумма всех перечисленных чисел: ", sumNumbers(155456) + '</br>');

/* 11. Дан массив с числами (передается параметром). Вы делаете постоянно его элементы, с помощью рекурсии и не с использованием цикла. */

document.write('</br> Задание 11: </br>');

function arrayRecursive(arr, index = 0) {
    // Базовый случай: если индекс выходит за пределы массива, завершаем рекурсию
    if (index >= arr.length) {
        return;
    }
    document.write(arr[index] + '<br>'); // Обработка текущего элемента массива
    arrayRecursive(arr, index + 1);    // Рекурсивный вызов для следующего элемента массива
}

var myArray = [1, 2, 3, 4, 5];
arrayRecursive(myArray);

document.write('</br> Задание 11 - второй вариант: </br>');
function functionArray(arr) {
    document.write(arr[i] + '<br>');
    i++;

    if (i < arr.length) functionArray(arr);
}
	
var i = 0;
functionArray([5, 8, 6, 11,15]);

document.write('<br>');