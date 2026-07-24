import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import Counter from './Counter';
import styles from './Dish.module.css';

function Dish({ dish }) {
  const [count, setCount] = useState(0);
  const { user } = useUser();

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const increment = () => {
    if (count >= 5) return;
    setCount(count + 1);
  };

  return (
    <li className={styles.dish}>
      <span className={styles.name}>
        {dish.name} - <strong>{dish.price} руб.</strong>
      </span>

      {user && (
        <Counter
          value={count}
          onIncrement={increment}
          onDecrement={decrement}
          min={0}
          max={5}
        />
      )}
    </li>
  );
}

export default Dish;
