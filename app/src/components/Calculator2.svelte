<style>
.calculator {
  width: 270px;
  margin: 0 auto;
  padding: 30px;
  border: 2px solid #ccc;
  border-radius: 5px;
  position: absolute;
}

.display {
  width: 240px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: right;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  position: relative;
}

button {
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  background-color: #eee;
  cursor: pointer;
}

.operator {
  background-color: #ff704d;
  color: white;
}

.equals {
  background-color: #4CAF50;
  color: white;
}

.number {
  background-color: #f5f5f5;
}

.number.zero {
  width: 110px;
}

button:hover {
  background-color: #ddd;
}

button:active {
  background-color: #bbb;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}
</style>

<div class="calculator">
    <input class="display" type="text" value={displayValue} readonly>
    
    <button class="operator" on:click={() => handleClearClick()}>C</button>
    <button class="operator" on:click={() => handleOperatorClick('/')}>/</button>
    <button class="operator" on:click={() => handleOperatorClick('*')}>*</button>
    <button class="operator" on:click={() => handleOperatorClick('+')}>+</button>
    <button class="number" on:click={() => handleNumberClick('7')}>7</button>
    <button class="number" on:click={() => handleNumberClick('8')}>8</button>
    <button class="number" on:click={() => handleNumberClick('9')}>9</button>
    <button class="operator" on:click={() => handleOperatorClick('-')}>-</button>
    <button class="number" on:click={() => handleNumberClick('4')}>4</button>
    <button class="number" on:click={() => handleNumberClick('5')}>5</button>
    <button class="number" on:click={() => handleNumberClick('6')}>6</button>
    <button class="equals" on:click={() => handleEqualClick()}>=</button>
    <button class="number" on:click={() => handleNumberClick('1')}>1</button>
    <button class="number" on:click={() => handleNumberClick('2')}>2</button>
    <button class="number" on:click={() => handleNumberClick('3')}>3</button>
    <button class="number zero" on:click={() => handleNumberClick('0')}>0</button>
  </div>

<script>
  let result = 0;
  let inputValue = '';
  let currentOperator = '';

  function handleNumberClick(num) {
    inputValue += num;
  }

  function handleOperatorClick(operator) {
    if (inputValue !== '') {
      if (currentOperator === '+') {
        result += parseFloat(inputValue);
      } else if (currentOperator === '-') {
        result -= parseFloat(inputValue);
      } else if (currentOperator === '*') {
        result *= parseFloat(inputValue);
      } else if (currentOperator === '/') {
        result /= parseFloat(inputValue);
      } else {
        result = parseFloat(inputValue);
      }
      currentOperator = operator;
      inputValue = '';
    }
  }

  function handleEqualClick() {
    if (inputValue !== '') {
      if (currentOperator === '+') {
        result += parseFloat(inputValue);
      } else if (currentOperator === '-') {
        result -= parseFloat(inputValue);
      } else if (currentOperator === '*') {
        result *= parseFloat(inputValue);
      } else if (currentOperator === '/') {
        result /= parseFloat(inputValue);
      } else {
        result = parseFloat(inputValue);
      }
      inputValue = '';
      currentOperator = '';
    }
  }

  function handleClearClick() {
    result = 0;
    inputValue = '';
    currentOperator = '';
  }

  $: displayValue = inputValue ? inputValue : result;
</script>