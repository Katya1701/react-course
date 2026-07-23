import Counter from './Counter';
import { useReviewForm } from '../hooks/useReviewForm';
import Button from './Button/Button';
import styles from './ReviewForm.module.css';

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
    <form className={styles.card} onSubmit={(e) => e.preventDefault()}>
      <h4 className={styles.title}>Оставить отзыв</h4>

      <div className={styles.field}>
        <label className={styles.label}>Имя</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Ваше имя"
          value={state.name}
          onChange={handleNameChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Ваш отзыв</label>
        <textarea
          className={styles.textarea}
          placeholder="Поделитесь впечатлениями о блюдах..."
          value={state.text}
          onChange={handleTextChange}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Оценка (1–5)</label>
        <Counter
          value={state.rating}
          onIncrement={handleRatingIncrement}
          onDecrement={handleRatingDecrement}
          min={1}
          max={5}
        />
      </div>

      <div className={styles.actions}>
        <Button onClick={handleClear}>Очистить форму</Button>
      </div>
    </form>
  );
}

export default ReviewForm;
