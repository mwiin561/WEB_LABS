import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ backgroundColor: 'blue', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>Counter: {count}</h1>
      <button
        style={{ fontSize: '1.5em', padding: '10px 20px', backgroundColor: 'red', color: 'white', marginRight: '10px' }}
        onClick={increment}
      >
        Increment
      </button>
      <button
        style={{ fontSize: '1.5em', padding: '10px 20px', backgroundColor: 'red', color: 'white' }}
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterComponent;


