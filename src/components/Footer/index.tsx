import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>Endenda como funciona a técnica pomodoro</Link>
      <Link to='#'>
        Chronos Pmodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </Link>
    </footer>
  );
}
