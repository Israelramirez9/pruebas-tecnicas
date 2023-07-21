import React, { useContext } from 'react'
import '../styles/Header.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { PiMagnifyingGlassPlusBold } from 'react-icons/pi'
import { BookCategoryContext } from '../auth/CategoryBookContext'
function Header() {
    const { booksProperty, setBooksProperty } = useContext(BookCategoryContext);
    /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} event 
     */
    const handleInputSearchAuthor = (event,) => {
        console.log(event.target.value);
        setBooksProperty({
            category: "author",
            dataCategory: event.target.value.toLowerCase()
        })
    }
    return (
        <header>
            <div id="logo-container" >
                <div id="img-container">
                    <img src="./images/react-logo.png" alt="img-logo"></img>
                </div>
                <p> Book editorial</p>
            </div>
            <div id="search-container" >
                <label for="input-search-by-author">
                    <i ><PiMagnifyingGlassPlusBold /></i>
                </label>
                <input type="text" placeholder="enter author..." onChange={handleInputSearchAuthor} id="input-search-by-author"></input>
            </div>
            <nav >
                <i className='icon-facebook'> <FaFacebook /></i>
                <i className='icon-twitter'><FaTwitter /></i>
                <i className='icon-instagram'><FaInstagram /></i>
            </nav>
        </header>
    )
}

export default Header