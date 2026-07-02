import { restaurants } from './materials/mock.js';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default App;
