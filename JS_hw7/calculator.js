
  function Calculator() {
    this.isOn = true;
    this.expression = '';
    this.toggle = function() {
      this.isOn = !this.isOn;
      document.getElementById('expressionInput').disabled = !this.isOn;
      document.getElementById('result').innerHTML = '';
    };
    this.getExpression = function() {
      this.expression = document.getElementById('expressionInput').value;
    };
    this.calculate = function() {
      if (this.isOn) {
        this.getExpression();
        try {
          eval(this.expression);
        } catch (error) {
          document.getElementById('result').innerHTML = 'Error';
        }
      } else {
        document.getElementById('result').innerHTML = 'Calculator is off';
      }
    };

    this.getResult = function() {
      document.getElementById('result').innerHTML = eval(this.expression);
    };
  }
  const calculator = new Calculator();