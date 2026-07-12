import Menu from './Menu';
import Reviews from './Reviews';

function Restaurant({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>

      <Menu menu={restaurant.menu} />

      <Reviews key={restaurant.id} reviews={restaurant.reviews} />

      <hr />
    </div>
  );
}

export default Restaurant;
