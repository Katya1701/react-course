import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import Button from './Button/Button';
import styles from './Header.module.css';

function Header() {
  const { toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Наш ресторан</h2>

      <div className={styles.actions}>
        <Button onClick={toggleTheme}>Сменить тему</Button>
        {user ? (
          <>
            <span className={styles.userName}>Привет, {user.name}!</span>
            <Button onClick={logout}>Выйти</Button>
          </>
        ) : (
          <Button onClick={login}>Войти</Button>
        )}
      </div>
    </header>
  );
}

export default Header;
