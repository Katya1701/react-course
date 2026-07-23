import styles from './Counter.module.css';

function Counter({ value, onIncrement, onDecrement, min = 0, max = 5 }) {
  return (
    <div className={styles.counter}>
      <button
        type="button"
        className={styles.button}
        onClick={onDecrement}
        disabled={value <= min}
      >
        -
      </button>

      <span className={styles.value}>{value}</span>

      <button
        type="button"
        className={styles.button}
        onClick={onIncrement}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
