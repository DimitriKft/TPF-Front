// Header.tsx
import Link from 'next/link';
import styles from './Header.module.css'; // Assurez-vous que le chemin est correct
import { useRouter } from 'next/router'; // Ajoutez cette ligne

const Header = () => {
  const router = useRouter();
  4
  const getLinkClassName = (path: string): string => {
    return router.pathname === path ? styles.activeLink : styles.link;
  };

  console.log('Chemin actuel:', router.pathname);
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <img src="/logoTpf.svg" alt="Logo" className={styles.logo} />
          </Link>
          <Link href="/">
            <p className={getLinkClassName("/")}>Accueil</p>
          </Link>
          <Link href="/cours">
            <p className={getLinkClassName("/cours")}>Cours</p>
          </Link>
          <Link href="/tuto">
            <p className={getLinkClassName("/tuto")}>Tutoriels</p>
          </Link>
          <Link href="/traif">
            <p className={getLinkClassName("/tarif")}>Tarif</p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;