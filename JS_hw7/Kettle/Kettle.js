
let Kettle = function(){
    this.get = function(){
        this.power = +prompt('Введите мощность чайника в Ваттах');
        this.water = +prompt('Введите количество воды в литрах');
        this.temMin = 20; // начальная температура воды
        this.temBoiling = 100; //конечная температура воды
        this.capacity = 4200; //удельная теплоемкость воды

        this.operation();
        
    }

    this.operation = function(){
        if(confirm('Чайник включен?')){
            this.result = Math.round((this.capacity * this.water * (this.temBoiling - this.temMin)) / this.power / 60);
        } else {
            this.result = 0;            
        };
        this.show();
    };
    this.show = function(){
        if (this.result == 0 || this.result === undefined) {
            alert('Чайник не включен');
        } else {
            alert('Время закипания - ' + this.result + 'мин');
        }
    };
};

let kettle = new Kettle();
kettle.get();