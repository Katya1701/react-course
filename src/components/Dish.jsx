import { useState } from 'react';

function Dish({ dish }) {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const increment = () => {
    if (count >= 5) return;
    setCount(count + 1);
  };

  return (
    <li>
      <span>{dish.name}</span>

      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
      <span> {count} </span>
      <button onClick={increment} disabled={count === 5}>
        +
      </button>
    </li>
  );
}

export default Dish;
