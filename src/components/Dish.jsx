import { useState } from 'react';
import Counter from './Counter';

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
      <Counter
        value={count}
        onIncrement={increment}
        onDecrement={decrement}
        min={0}
        max={5}
      />
    </li>
  );
}

export default Dish;
