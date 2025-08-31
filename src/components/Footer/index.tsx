import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Endenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='/'>
        A0 Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink>
    </footer>
  );
}
