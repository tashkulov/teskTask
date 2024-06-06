import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HomeIcon from '../assets/home.svg';
import MarketplaceIcon from '../assets/marketplace.svg';
import OrganizationIcon from '../assets/organization.svg';
import RatingIcon from '../assets/rating.svg';
import SparingIcon from '../assets/sparing.svg';
import login from '../assets/login.svg';
import LoginModal from "./Modals/LoginModal.jsx";
import RegisterModal from "./Modals/RegisterModal.jsx";

const pages = [
    { id: 1, text: 'Лента', icon: HomeIcon },
    { id: 2, text: 'Маркетплейс', icon: MarketplaceIcon },
    { id: 3, text: 'Рейтинги', icon: RatingIcon },
    { id: 4, text: 'Соревнования', icon: SparingIcon },
    { id: 5, text: 'Организации', icon: OrganizationIcon }
];

function ResponsiveAppBar() {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenLogin = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const handleOpenRegister = () => {
        setOpenRegister(true);
    };

    const handleCloseRegister = () => {
        setOpenRegister(false);
    };

    const handleSwitchToRegister = () => {
        setOpenLogin(false);
        setOpenRegister(true);
    };

    const handleSwitchToLogin = () => {
        setOpenRegister(false);
        setOpenLogin(true);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        SPORT<span style={{ color: "red" }}>REC</span>
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
                            <img src={login} alt="Menu" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
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
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Button
                                        startIcon={<img src={page.icon} alt={page.text} style={{ marginRight: '8px' }} />}
                                        sx={{
                                            color: 'grey',
                                            fontSize: '0.6rem',
                                            '&:hover': { color: 'black' },
                                        }}
                                    >
                                        {page.text}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '25px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.text}
                                startIcon={<img src={page.icon} alt={page.text} style={{ marginRight: '8px' }} />}
                                sx={{
                                    my: 2,
                                    color: 'grey',
                                    fontSize: '0.6rem',
                                    '&:hover': { color: 'black' },
                                }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenLogin} sx={{ p: 0 }}>
                                <img src={login} alt="Login" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>

            <LoginModal open={openLogin} onClose={handleCloseLogin} onRegister={handleSwitchToRegister} />
            <RegisterModal open={openRegister} onClose={handleCloseRegister} onLogin={handleSwitchToLogin} />
        </AppBar>
    );
}

export default ResponsiveAppBar;
