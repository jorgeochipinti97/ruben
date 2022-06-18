import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import { Button, Link } from '@mui/material';

export const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{color:'white', mr: 2, display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Ruben Ochipinti
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                       <NextLink href='#' passHref>
                        <Link>
                        <Button variant='outlined' sx={{color:'white', display:{xs:'none', md:'block',lg:'block',xl:'block'}}}>Documentación</Button>
                        </Link>
                       </NextLink>
                       <NextLink href='#' passHref>
                        <Link>
                        <Button variant='outlined' sx={{color:'white', display:{xs:'none', md:'block',lg:'block',xl:'block'}}}>Carrera</Button>
                        </Link>
                       </NextLink>
                       <NextLink href='#' passHref>
                        <Link>
                        <Button variant='outlined' sx={{color:'white', display:{xs:'none', md:'block',lg:'block',xl:'block'}}}>Docencia</Button>
                        </Link>
                       </NextLink>
                       <NextLink href='#' passHref>
                        <Link>
                        <Button variant='outlined' sx={{color:'white', display:{xs:'none', md:'block',lg:'block',xl:'block'}}}>Contacto</Button>
                        </Link>
                       </NextLink>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}