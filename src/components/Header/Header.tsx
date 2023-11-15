// Header.tsx
import Link from 'next/link';
import styles from './Header.module.css'; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Accueil
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cours" className={styles.navLink}>
              Cours
            </Link>
          </li>
          {/* Autres liens */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;