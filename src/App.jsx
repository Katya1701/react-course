import { restaurants } from './materials/mock.js';
import { useState } from 'react';
import Restaurant from './components/Restaurant';
import Layout from './components/Layout.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { UserProvider } from './contexts/UserContext.jsx';
import styles from './App.module.css';

function App() {
  const [activeId, setActiveId] = useState(restaurants[0]?.id);
  const activeRestaurant = restaurants.find((item) => item.id === activeId);

  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <div className={styles.container}>
            <div className={styles.tabs}>
              {restaurants.map((restaurant) => {
                const isActive = restaurant.id === activeId;

                return (
                  <button
                    key={restaurant.id}
                    className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
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
          </div>
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
