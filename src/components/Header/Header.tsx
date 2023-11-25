// // Header.tsx



import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

 import { MinusSquare, CreditCard, Codesandbox, Box, Menu } from 'react-feather'; // Importez l'icône Menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClassName = (path: string): string => {
    return router.pathname === path ? styles.activeLink : styles.link;
  };

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.responsiveMenu}>
          <Link href="/">
            <div className='containerLogo'>
            <img src="/logoTpf.svg" alt="Logo" className={styles.logoResponsive} />
            </div>
          </Link>
          <button className={styles.burgerMenu} onClick={toggleMenu}></button>
        </div>

        {/* Menu déroulant pour le mode responsive */}
        {isMenuOpen && (
          <nav className={styles.navResponsive}>
            {/* Ajoutez ici vos liens pour le menu responsive */}
            <p>YOo</p>
            {/* Vous pouvez réutiliser getLinkClassName pour les liens */}
          </nav>
        )}

        {/* Barre de navigation principale pour le mode desktop */}
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






