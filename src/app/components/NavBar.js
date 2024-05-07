'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import LoupeIcon from '@mui/icons-material/Loupe';
import ListIcon from '@mui/icons-material/List';
import GroupIcon from '@mui/icons-material/Group';
import Link from 'next/link';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="nav-bar"
    sx={{ bgcolor: 'secondary.main' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link href="/">
        <BottomNavigationAction label="Recents" icon={<LoupeIcon />} />
        </Link>
        <Link href="/social-select">
        <BottomNavigationAction label="Favorites" icon={<ListIcon />} />
        </Link>
        <Link href="/LandingPage">
        <BottomNavigationAction label="Nearby" icon={<GroupIcon />} />
        </Link>
        <Link href="/LandingPage">
        <BottomNavigationAction label="Nearby" icon={<MenuIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}

