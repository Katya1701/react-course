import classNames from 'classnames';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Button.module.css';

function Button({ children, onClick, disabled, className, type = 'button' }) {
  const { theme } = useTheme();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, styles[theme], className)}
    >
      {children}
    </button>
  );
}

export default Button;
