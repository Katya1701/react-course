import { useUser } from '../contexts/UserContext';
import ReviewForm from './ReviewForm';
import styles from './Reviews.module.css';

function Reviews({ reviews }) {
  const { user } = useUser();
  const hasReviews = reviews && reviews.length > 0;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Отзывы</h3>

      {hasReviews ? (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              {review.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>Отзывов пока нет.</p>
      )}

      {user && <ReviewForm />}
    </div>
  );
}

export default Reviews;
