function Menu({ menu }) {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
