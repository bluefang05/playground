import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import './Header.css';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

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
    <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
      >
        
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
          <li>
            <Link to="/RenderRequest">RenderRequest</Link> 
          </li>
        </ul>
      </nav>
    </Toolbar>
  </AppBar>
  );
}

export default Header;
