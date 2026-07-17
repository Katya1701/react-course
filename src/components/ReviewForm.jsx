import Counter from './Counter';
import { useReviewForm } from '../hooks/useReviewForm';

function ReviewForm() {
  const {
    state,
    handleNameChange,
    handleTextChange,
    handleRatingIncrement,
    handleRatingDecrement,
    handleClear,
  } = useReviewForm();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h4>Оставить отзыв</h4>

      <div>
        <label>Имя:</label>
        <input type="text" value={state.name} onChange={handleNameChange} />
      </div>

      <div>
        <label>Текст :</label>
        <textarea value={state.text} onChange={handleTextChange} />
      </div>

      <div>
        <label>Рейтинг (1-5): </label>
        <Counter
          value={state.rating}
          onIncrement={handleRatingIncrement}
          onDecrement={handleRatingDecrement}
          min={1}
          max={5}
        />
      </div>

      <button onClick={handleClear}>Clear</button>
    </form>
  );
}

export default ReviewForm;
