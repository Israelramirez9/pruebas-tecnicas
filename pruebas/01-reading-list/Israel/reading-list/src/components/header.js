import { React, useState, useContext } from 'react'
import '../styles/Header.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { PiMagnifyingGlassPlusBold } from 'react-icons/pi'
import { BookCategoryContext } from '../auth/CategoryBookContext'
function Header() {
    const {booksProperty, setBooksProperty} = useContext(BookCategoryContext);
    /**
     * 
     * @param {React.ChangeEvent} event 
     */
    const handleInputSearchAuthor = (event,) => {
        console.log(event.target.value);
        setBooksProperty({
            category:"author",
            dataCategory: event.target.value.toLowerCase()
        })
    }
    return (
        <header>
            <div id="logo-container" >
                <div id="img-container">
                    <img src="./images/logo-editorial.png" alt="img-logo"></img>
                </div>
                <p> Book editorial</p>
            </div>
            <div id="search-container" >
                <i><PiMagnifyingGlassPlusBold /></i>
                <input type="text" placeholder="enter author..." onChange={handleInputSearchAuthor}></input>
            </div>
            <nav >
                <i> <FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaInstagram /></i>
            </nav>
        </header>
    )
}

export default Header