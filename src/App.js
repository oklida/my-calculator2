import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {'1234567890+-*/'.split('').map((char) => (
          <button key={char} onClick={() => handleClick(char)}>{char}</button>
        ))}
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;