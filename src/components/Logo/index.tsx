import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink href='/' className={styles.logoLink}>
        <img
          src='/images/favicon/favicon-96x96.png'
          alt='logo'
          width={48}
          height={48}
        />
  <span>A0 Pomodoro</span>
      </RouterLink>
    </div>
  );
}
