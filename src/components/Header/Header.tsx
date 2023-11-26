// Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Assurez-vous que ce fichier CSS existe et est correctement configuré
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Image from 'next/image';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="/" passHref>
        <Button sx={{ my: 2 }}>Accueil</Button>
      </Link>
      <Link href="/cours" passHref>
        <Button sx={{ my: 2 }}>Cours</Button>
      </Link>
      {/* ... autres liens ... */}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo et liens seront visibles seulement en vue large (sm et plus) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 'auto' }}>
            <Link href="/" passHref>
              <Image src="/logoTpf.svg" alt="Logo" width={120} height={60} />
            </Link>
            {/* ... autres liens ... */}
          </Box>
          {/* IconButton pour le menu burger, maintenant à droite */}
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
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Meilleure performance d'ouverture sur mobile.
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
