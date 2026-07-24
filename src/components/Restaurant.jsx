import Menu from './Menu';
import Reviews from './Reviews';
import styles from './Restaurant.module.css';

function Restaurant({ restaurant }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{restaurant.name}</h2>

      <Menu menu={restaurant.menu} />

      <Reviews reviews={restaurant.reviews} />

      <hr className={styles.divider} />
    </div>
  );
}

export default Restaurant;
