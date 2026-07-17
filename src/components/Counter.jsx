function Counter({ value, onIncrement, onDecrement, min = 0, max = 5 }) {
  return (
    <>
      <button onClick={onDecrement} disabled={value <= min}>
        -
      </button>
      <span> {value} </span>
      <button onClick={onIncrement} disabled={value >= max}>
        +
      </button>
    </>
  );
}

export default Counter;
