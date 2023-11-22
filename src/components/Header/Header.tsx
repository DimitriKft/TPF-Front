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
      {/* Ajoutez d'autres liens ici au besoin */}
    </nav>
    </header>
  );
};

export default Header;