import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import './Header.css';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';

import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    // <div>
    //   <div id="header" class="topnav">
          
    //     <img id="logo" src={logo} alt="Logo" />
    //     
    //     
    //     
    //     
    //     
    //     <Button variant="text">Text</Button>
    //   </div>
    // </div>
    <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <img id="logo" src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/UseEffectUpdate">UseEffectUpdate</Link>
          </li>
          <li>
            <Link to="/RenderCondicional">Condicional Render</Link> 
          </li>
          <li>
            <Link to="/RenderLista">List Render</Link> 
          </li>
          <li>
            <Link to="/RenderSinLista">Listless Render</Link> 
          </li>
        </ul>
      </nav>
      <Button color="inherit">
        Signup
      </Button>
    </Toolbar>
  </AppBar>
  );
}

export default Header;
