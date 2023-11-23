// Header.tsx
import Link from 'next/link';
import styles from './Header.module.css'; // Assurez-vous que le chemin est correct
import { useRouter } from 'next/router'; // Ajoutez cette ligne
import { MinusSquare, CreditCard, Codesandbox, Box } from 'react-feather';

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
          <Link href="/" className={styles['link-container']}>
            <Box className={router.pathname === "/" ? styles['icon-active'] : styles.icon} />
            <p className={getLinkClassName("/")}>Accueil</p>
          </Link>
          <Link href="/cours" className={styles['link-container']}>
          <Codesandbox className={router.pathname === "/cours" ? styles['icon-active'] : styles.icon} />
            <p className={getLinkClassName("/cours")}>Cours</p>
          </Link>
          <Link href="/tuto" className={styles['link-container']}>
          <MinusSquare className={router.pathname === "/tarif" ? styles['icon-active'] : styles.icon} />
            <p className={getLinkClassName("/tuto")}>Tutoriels</p>
          </Link>
          <Link href="/tarif" className={styles['link-container']}>
          <CreditCard className={router.pathname === "/tarif" ? styles['icon-active'] : styles.icon} />
            <p className={getLinkClassName("/tarif")}>Tarif</p>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;