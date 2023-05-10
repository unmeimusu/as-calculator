<script>
    let inputValue = '';
    let currentOperator = '';
    let result = 0;
  
    $: {
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
      }
    }
  
    function handleNumberClick(num) {
        inputValue = `${inputValue}${num}`;
    }
  
    function handleOperatorClick(operator) {
      currentOperator = operator;
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
      inputValue = '';
      currentOperator = '';
      result = 0;
    }
  </script>
  
  <div>
    <input type="text" bind:value={result} disabled>
  
    <div>
      <button on:click={() => handleNumberClick('1')}>1</button>
      <button on:click={() => handleNumberClick('2')}>2</button>
      <button on:click={() => handleNumberClick('3')}>3</button>
      <button on:click={() => handleOperatorClick('+')}>+</button>
    </div>
  
    <div>
      <button on:click={() => handleNumberClick('4')}>4</button>
      <button on:click={() => handleNumberClick('5')}>5</button>
      <button on:click={() => handleNumberClick('6')}>6</button>
      <button on:click={() => handleOperatorClick('-')}>-</button>
    </div>
  
    <div>
      <button on:click={() => handleNumberClick('7')}>7</button>
      <button on:click={() => handleNumberClick('8')}>8</button>
      <button on:click={() => handleNumberClick('9')}>9</button>
      <button on:click={() => handleOperatorClick('*')}>*</button>
    </div>
  
    <div>
      <button on:click={() => handleClearClick()}>C</button>
      <button on:click={() => handleNumberClick('0')}>0</button>
      <button on:click={() => handleEqualClick()}>=</button>
      <button on:click={() => handleOperatorClick('/')}>/</button>
    </div>
  </div>
  