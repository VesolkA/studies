let Calc = function(){
    this.get = function() {
        
        if (confirm('Включить калькулятор?')) {
            this.a = +prompt('Введите число a');
            this.b = +prompt('Введите число b');
            this.oper = prompt('Введите операцию: +, -, *, /')
        } else {
            this.a = false;
            this.b = false;
            this.oper = false;
        };
        this.operation();
    };
   
    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;    
        }
        this.show();
    }

    this.show = function(){
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();
calc.get();