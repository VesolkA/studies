// Создаем конструктор объектов Contact
function Contact(firstName, lastName, age, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phone = phone;
    this.email = email;
}

// Создаем объект для хранения контактов
let contacts = [];

// Функция для добавления нового контакта
function addContact(firstName, lastName, age, phone, email) {
    // Проверка введенной информации
    if (typeof firstName !== 'string' ||
        typeof lastName !== 'string' ||
        typeof age !== 'number' ||
        typeof phone !== 'string' ||
        typeof email !== 'string' ||
        age < 0 ||
        !Number.isInteger(age) ||
        age <= 18) {
        console.log("Некорректная информация. Проверьте введенные данные.");
        return;
    }

    // Создаем новый объект Contact
    let newContact = new Contact(firstName, lastName, age, phone, email);
    
    // Добавляем новый контакт в массив
    contacts.push(newContact);
    console.log("Контакт успешно добавлен.");
}

// Функция для вывода информации о конкретном контакте
function displayContact(index) {
    if (index >= 0 && index < contacts.length) {
        let contact = contacts[index];
        console.log("Имя:", contact.firstName);
        console.log("Фамилия:", contact.lastName);
        console.log("Возраст:", contact.age);
        console.log("Телефон:", contact.phone);
        console.log("Email:", contact.email);
    } else {
        console.log("Контакт с таким индексом не найден.");
    }
}

// Функция для вывода всех контактов
function displayAllContacts() {
    if (contacts.length === 0) {
        console.log("Список контактов пуст.");
    } else {
        console.log("Список контактов:");
        contacts.forEach(function(contact, index) {
            console.log("Контакт", index + 1);
            console.log("Имя:", contact.firstName);
            console.log("Фамилия:", contact.lastName);
            console.log("Возраст:", contact.age);
            console.log("Телефон:", contact.phone);
            console.log("Email:", contact.email);
            console.log("---------------------");
        });
    }
}

// Пример использования
addContact("Иван", "Иванов", 25, "123-456-7890", "ivan@example.com");
addContact("Петр", "Петров", 20, "987-654-3210", "petr@example.com");
addContact("Анна", "Сидорова", 30, "555-555-5555", "anna@example.com");

displayAllContacts();
