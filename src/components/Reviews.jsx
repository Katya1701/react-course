import ReviewForm from './ReviewForm';

function Reviews({ reviews }) {
  const hasReviews = reviews && reviews.length > 0;

  return (
    <div>
      <h3>Отзывы</h3>

      {hasReviews ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      ) : (
        <p>Отзывов пока нет.</p>
      )}

      <ReviewForm />
    </div>
  );
}

export default Reviews;
