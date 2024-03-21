
let car = {
    brand: "",
    number: "",
    engineOn: false,
    gear: "нейтральная",
    speed: 0,
    distance: 0,

    toggleEngine: function() {
        this.engineOn = !this.engineOn;
        if (this.engineOn) {
            console.log("Двигатель запущен.");
        } else {
            console.log("Двигатель заглушен.");
        }
    },

    shiftGear: function(gear) {
        if (this.engineOn) {
            this.gear = gear;
            console.log("Передача переключена на " + gear + ".");
        } else {
            console.log("Сначала нужно запустить двигатель.");
        }
    },

    setSpeed: function(speed) {
        if (this.engineOn) {
            if (this.gear !== "нейтральная") {
                this.speed = speed;
                console.log("Скорость установлена на " + speed + " км/ч.");
            } else {
                console.log("Сначала нужно выбрать передачу.");
            }
        } else {
            console.log("Сначала нужно запустить двигатель.");
        }
    },

    move: function() {
        if (this.engineOn && this.speed > 0) {
            console.log("Автомобиль движется вперед со скоростью " + this.speed + " км/ч.");
            this.distance += this.speed;
        } else if (this.engineOn && this.speed < 0) {
            console.log("Автомобиль движется назад со скоростью " + Math.abs(this.speed) + " км/ч.");
            this.distance += Math.abs(this.speed);
        } else {
            console.log("Сначала нужно запустить двигатель и установить скорость.");
        }
    },

    // Метод для расчета пройденного расстояния
    calculateDistance: function() {
        console.log("Пройденное расстояние: " + this.distance + " км.");
    }
};

// Пример использования объекта автомобиля
car.brand = "Toyota";
car.number = "A123BC";
car.toggleEngine(); // Запустить двигатель
car.shiftGear("вперед"); // Переключить передачу вперед
car.setSpeed(60); // Установить скорость 60 км/ч
car.move(); // Двигаться вперед
car.calculateDistance(); // Расчет пройденного расстояния
