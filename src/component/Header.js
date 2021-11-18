import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from "../router/Routes";
import {BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import './Header.css';

function Header() {
  return (
    <div>
      <div id="header" class="topnav">
          
        <img id="logo" src={logo} alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/UseEffectUpdate">UseEffectUpdate</Link>
        <Link to="/RenderCondicional">Render Condicional</Link> 
        <Link to="/RenderLista">Render Lista</Link> 
        <Link to="/RenderSinLista">Render sin Lista</Link> 
      </div>
    </div>
  );
}

export default Header;
