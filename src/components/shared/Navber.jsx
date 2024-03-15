"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { Avatar, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const navItems = [
  {
  route: 'Home',
  path : '/'
},
{
  route: 'All Foods',
  path : '/allfoods'
},
{
  route: 'All Restaurants',
  path : '/allrestaurants'
},
{
  route: 'Blog',
  path : '/Blog'
}
];

function Navber() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isScrolled, setIsScrolled] = React.useState(false);

  // this is for scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <AppBar   className={` hover:bg-white fixed w-full z-50 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow text-black' : 'bg-transparent text-red-600'
  }`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            PANDASFOOD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                   <Link  href={item.path}>
                <Button className='text-black'>
                  {
                    item.route
                  }
                </Button>
              </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Link key={item.route} href={item.path}> 
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {item.route}
              </Button>
              </Link>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={2}>
                <ShoppingCartIcon fontSize='large'/>
                 <Avatar src="/broken-image.jpg" />
                <Link href="/login"><Button variant="outlined">Login</Button></Link>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navber;