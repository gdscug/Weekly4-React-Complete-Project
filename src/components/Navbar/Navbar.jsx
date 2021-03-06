import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import logo from '../../assets/logo.png'
import useStyles from './style';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Fade>
                    <Toolbar>
                        <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="Nike" height="25px" className={classes.image}/>
                        </Typography>

                        <div className={classes.grow}/>
                        {location.pathname === '/' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to="/cart" color="inherit">
                                    <Badge badgeContent={totalItems} color="error">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </div>
                        )}
                    </Toolbar>
                </Fade>
            </AppBar>
        </>
    )
}

export default Navbar