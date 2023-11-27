// Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const activeLinkClass = (path: string): string => {
    return router.pathname === path ? `${styles.activeLink}` : styles.link;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/" passHref>
          <Button className={`${styles.navLink}  ${activeLinkClass('/')}`}>Accueil</Button>
        </Link>

        <Link href="/cours" passHref>
          <Button className={`${styles.navLink} ${activeLinkClass('/cours')}`}>Cours</Button>
        </Link>

      </Stack>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar className={styles.transparentAppBar} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 'auto' }}>
            <Link href="/" passHref >

            <IconButton className={`${styles.icon} ${router.pathname === '/' ? styles.iconActive : ''}`}>
              <MapsHomeWorkTwoToneIcon  className={router.pathname === "/" ? styles['icon-active'] : styles.icon} />
            </IconButton>

              <Button className={`${styles.navLink} ${activeLinkClass('/')}`}>Accueil</Button>
            </Link>
            <Link href="/cours" passHref >
              <IconButton className={styles.icon}>
                <AssignmentTwoToneIcon />
              </IconButton>
              <Button className={`${styles.navLink} ${activeLinkClass('/cours')}`}>Cours</Button>
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: styles.drawerPaper }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
