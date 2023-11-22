// Header.tsx
import Link from 'next/link';
import styles from './Header.module.css'; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <header className={styles.header}>
     <nav className={styles.navbar}>
     <Link href="/">

     <img src="/logoTpf.svg" alt="Logo" className={styles.logo} />

 
          </Link>
      <Link href="/">
        <p className={styles.link}>Accueil</p>
      </Link>
      <Link href="/cours">
        <p className={styles.link}>Cours</p>
      </Link>
      <Link href="/tuto">
        <p className={styles.link}>Tuto</p>
      </Link>
      <Link href="/tarif">
        <p className={styles.link}>Tarif</p>
      </Link>
      {/* Ajoutez d'autres liens ici au besoin */}
    </nav>
    </header>
  );
};

export default Header;