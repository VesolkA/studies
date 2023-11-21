
// Задача 1.
document.write('Задача 1: </br>');

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ", ");
};
document.write('</br>');


// Задача 2.
document.write('</br> Задача 2: </br>');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr2.length; i++){
    if (arr2[i] > -10 && arr2[i] < -3){
        document.write(arr2[i] + " ");
        
    }
};
document.write('</br>');


// Задача 3.
document.write('</br> Задача 3: </br>');
document.write('</br> Решение задачи через цикл for: </br>');

// Создание массива с использованием цикла for
let arr3 = [];
let rez = 0;
for (let i = 23; i <= 57; i++){
    arr3.push(i);
    rez += i;
}
document.write(arr3); 
document.write('</br>');   
document.write(`</br> Сумма всех чисел равна:  ${rez}`);
document.write('</br>');
document.write(' </br> Задача 3: решение через цикл while </br>');
// Создание массива с использованием цикла while
let arr3p1 = [];
let i = 23;
while (i <= 57) {
    arr3p1.push(i);
    i++;
}

document.write(arr3p1 + '<br>');

// Задача 4.
document.write(' </br> Задача 4: </br>');

let arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr4.length; i++){
    currentElement = arr4[i];

    // Проверяем, начинается ли текущий элемент с цифры 1, 2 или 5
    if (currentElement[0] === '1' || currentElement[0] === '2' || currentElement[0] === '5'){
        document.write(currentElement + ", ");
    }
}
document.write('<br>');

// Задача 5.

document.write(' </br> Задача 5: </br>');

let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(let i = 0; i < arr5.length; i++){   

    // Проверяем, является ли текущий день выходным (СБ или ВС)
    if(arr5[i] == 'СБ' || arr5[i] == 'ВС'){
       document.write('<b>' + arr5[i] + '</b>' + " ");
    } else {
        document.write(arr5[i] + " ");
    }  
}

// Задача 6.
document.write('<br>');
document.write(' </br> Задача 6: </br>');

let arr6 = ['apple', 42, 123, 'home'];

// Добавляем новый элемент в конец массива
arr6.push('doggy');

// Получаем последний элемент, используя свойство длины
let lastElement = arr6[arr6.length - 1];
document.write(lastElement); // Выыводим последний элемент

// Задача 7.
document.write('<br>');
document.write(' </br> Задача 7: </br>');

var numberArray = [];

while (true) {
    var userInput = prompt('Введите числовое значение (для завершения введите пустое значение):');

    if (userInput === '' || userInput === null) {
        break;  // Выходим из цикла, если введено пустое значение
    }
    // Преобразуем введенное значение в число и добавляем его в массив
    var numberValue = parseFloat(userInput);
    
    if (!isNaN(numberValue)) {
        numberArray.push(numberValue);
    } else {
        alert('Введите корректное числовое значение.');
    }
}
document.write('Исходный массив чисел:',' ' + numberArray + ' ' + '<br>'); // Выводим исходный массив

// Сортируем массив чисел
numberArray.sort(function(a, b) {
    return a - b;
}); 

// Выводим отсортированный массив
document.write('Отсортированный массив чисел:',' ' + numberArray + '<br>');

// Задача 8.
document.write(' </br> Задача 8: </br>');

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
// Используем цикл while для переворачивания массива
let reversedArr8 = [];
let j = arr8.length - 1;

while (j >= 0) {
    reversedArr8.push(arr8[j]);
    j--;
}
// Выводим результат
document.write('Перевернутый массив с использованием цикла while:', ' ' + reversedArr8 + '</br>');

// Используем метод reverse для переворачивания массива
var reversedArrayMethod = arr8.slice().reverse();

document.write('Перевернутый массив с использованием метода reverse:',' ' + reversedArrayMethod + '</br>');

// Задача 9.
document.write(' </br> Задача 9: </br>');

var arr9 = [5, 9, 21, , , 9, 78, , , , 6];
var zeroArr9 = 0;

for (var l = 0; l < arr9.length; l++) {
    // Проверяем, является ли текущий элемент нулевым (undefined)
    if (arr9[l] === undefined) {
        zeroArr9++;
    }
}
document.write('Количество нулевых элементов в массиве:', ' ' + zeroArr9);

// Задача 10.
document.write('<br>');
document.write(' </br> Задача 10: </br>');

let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];

let findex = arr10.indexOf(0);
let lindex = arr10.lastIndexOf(0);
let rez2 = 0;

if (findex === -1 || lindex === -1) {
    rez2 = 'Нулей нет';
} else if (findex === lindex) {
    rez2 = 'Только один 0';
} else {
    let s = arr10.slice(findex, lindex);
    while (s.length) {
        rez2 += s.pop();
    }
}
document.write(rez2);

// Задача 11.
document.write('<br>');
document.write(' </br> Задача 11: </br>');
let h = +prompt('Введите высоты пирамиды');
for(let i = 1; i <= h; i++){
    /* let sp = '';//пробелы
    let p = '';//птички
    for(let j = 0; j < h - i; j++){
        sp = sp + ' ';
    }
    for(let j = 0; j < i * 2 -1; j++){
        p += '^'
    }
    document.write(`<pre>${sp + p}</pre>`)*/
    document.write(`<pre>${(' ').repeat(h -i) + ('^').repeat(i * 2 - 1)}</pre>`)
}