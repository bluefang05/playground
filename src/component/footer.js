import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return(
        <footer>
            
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
            <div>
                <SocialIcon url="https://www.youtube.com/"/>
                <SocialIcon url="https://twitter.com/?lang=en"/>
                <SocialIcon url="https://web.facebook.com/?_rdc=1&_rdr"/>
                <SocialIcon url="https://www.instagram.com/"/>
            </div>
        </footer>
    )
}