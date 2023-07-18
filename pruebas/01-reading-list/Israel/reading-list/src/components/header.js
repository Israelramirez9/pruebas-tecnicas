import React from 'react'
import '../styles/Header.css'
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa'
import {PiMagnifyingGlassPlusBold} from 'react-icons/pi'
function Header() {
    return (
        <header>
            <div id="logo-container" >
                <div id="img-container">
                    <img src="./images/logo-editorial.png" alt="img-logo"></img>
                </div>
                <p> Book editorial</p>
            </div>
            <div id="search-container" >
                <i><PiMagnifyingGlassPlusBold/></i>
                <input type="text" placeholder="enter author..."></input>
            </div>
            <nav >
                <i> <FaFacebook /></i>
                <i><FaTwitter/></i>
                <i><FaInstagram/></i>
            </nav>
        </header>
    )
}

export default Header