import Dish from './Dish';

function Menu({ menu }) {
  if (!menu || menu.length === 0) {
    return <p>Меню пока недоступно</p>;
  }

  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
