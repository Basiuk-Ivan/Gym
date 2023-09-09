import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px="20px"
  >
    <NavLink to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: '48px', height: '48px', margin: '0px 20px' }}
      />
    </NavLink>
    <Stack
      id="sidebar"
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
        style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/exercise"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
        style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}
      >
        Exercises
      </NavLink>
    </Stack>
  </Stack>
);

export default Navbar;
