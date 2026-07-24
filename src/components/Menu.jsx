import Dish from './Dish';
import styles from './Menu.module.css';

function Menu({ menu }) {
  if (!menu || menu.length === 0) {
    return <p>Меню пока недоступно</p>;
  }

  return (
    <div>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
