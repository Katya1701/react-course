function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>Отзывов пока нет</p>;
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
