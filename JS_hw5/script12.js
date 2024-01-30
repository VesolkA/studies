/* 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.*/

document.write('</br> Задание 12: </br>');

function f4(str, l){
    for (let i = str.length; i < l; i++){
        str += ' ';
    }
    str = '* ' + str + ' *';
    return str;
}

function f12(name, suraname, lastName, groupNum){
    let title = 'Домашняя работа: «Функции»';
    let subTitle = `Выполнил: студент гр. ${groupNum}`;
    let nameText = `${lastName} ${name} ${suraname}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;  

    title = f4(title, maxStr);
    subTitle = f4(subTitle, maxStr);
    nameText = f4(nameText, maxStr);

    
    let ramka = '*';

    for (let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }

    console.log(`${ramka}\n${title}\n${subTitle}\n${nameText}\n${ramka}`);
}


document.write('<br>');
document.write('<br>');
