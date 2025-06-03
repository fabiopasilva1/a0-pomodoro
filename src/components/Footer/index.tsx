import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Endenda como funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pmodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
