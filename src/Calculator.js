import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumber = (number) => {
    if (currentNumber === '0' && number !== '.') {
      setCurrentNumber(String(number));
    } else if (number === '.' && currentNumber.includes('.')) {
      return;
    } else {
      setCurrentNumber(currentNumber + number);
    }
  };

  const handleOperator = (op) => {
    if (previousNumber && currentNumber && operation) {
      calculate();
    } else {
      setPreviousNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    }
  };

  const calculate = () => {
    let result = 0;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        if (current === 0) {
          alert("Cannot divide by zero!");
          handleClear();
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setPreviousNumber('');
    setOperation('');
  };

  const handleEqual = () => {
    if (previousNumber && currentNumber && operation) {
      calculate();
    }
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setPreviousNumber('');
    setOperation('');
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="equation">
          {previousNumber} {operation} {currentNumber !== '0' ? currentNumber : ''}
        </div>
        <div className="result">{currentNumber}</div>
      </div>
      <div className="calculator-buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleNumber(7)}>7</button>
        <button onClick={() => handleNumber(8)}>8</button>
        <button onClick={() => handleNumber(9)}>9</button>
        <button onClick={() => handleOperator('/')} className="operator">/</button>
        <button onClick={() => handleNumber(4)}>4</button>
        <button onClick={() => handleNumber(5)}>5</button>
        <button onClick={() => handleNumber(6)}>6</button>
        <button onClick={() => handleOperator('*')} className="operator">×</button>
        <button onClick={() => handleNumber(1)}>1</button>
        <button onClick={() => handleNumber(2)}>2</button>
        <button onClick={() => handleNumber(3)}>3</button>
        <button onClick={() => handleOperator('-')} className="operator">-</button>
        <button onClick={() => handleNumber(0)}>0</button>
        <button onClick={() => handleNumber('.')}>.</button>
        <button onClick={handleEqual} className="equals">=</button>
        <button onClick={() => handleOperator('+')} className="operator">+</button>
      </div>
    </div>
  );
}

export default Calculator;