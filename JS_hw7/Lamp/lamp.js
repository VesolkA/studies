let Lamp = function() {
    this.get = function() {
        this.power = +prompt('Ведите мощность лампочки в вватах');
        this.costEnergy = 0.1333;
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени включена лампочка (в часах)?');
        } else {
            this.workTime = 0;
        };
        this.operation();
    };

    this.operation = function() {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;

        this.show();
    };

    this.show = function() {
        if (this.workTime == 0 || this.workTime === undefined) {
            alert('Лампочка не включена');
        } else {
            alert('Лампочка проработала - ' + this.workTime + 'ч, стоимость потраченной электроэнергии = ' + this.result + 'руб.');
        }
    };
};

let lamp = new Lamp();
lamp.get();
