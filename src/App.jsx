import { restaurants } from './materials/mock.js';
import { useState } from 'react';
import Restaurant from './components/Restaurant';
import Layout from './components/Layout.jsx';

function App() {
  const [activeId, setActiveId] = useState(restaurants[0]?.id);
  const activeRestaurant = restaurants.find((item) => item.id === activeId);

  return (
    <Layout>
      <div>
        {restaurants.map((restaurant) => {
          const isActive = restaurants.id === activeId;

          return (
            <button
              key={restaurant.id}
              onClick={() => {
                if (!isActive) {
                  setActiveId(restaurant.id);
                }
              }}
            >
              {restaurant.name}
            </button>
          );
        })}
      </div>

      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
}

export default App;
