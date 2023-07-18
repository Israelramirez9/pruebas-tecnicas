import React from 'react'
import '../styles/Main.css'
import BooksStore from './BooksStore'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Main() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("./books.json")
            .then(response => setBooks(response.data.library))
            .catch(e => console.log(e));
    }, [])

    return (
        <main>            
            <div id="filter-search-container">
                
                <nav>
                    <ul>
                        <li><a href="#">Filtrar por:</a></li>
                        <li><a href="#">Género</a>
                            <ul>
                                <li><a href="#">Fantasía</a></li>
                                <li><a href="#">Illustrator</a></li>
                                <li><a href="#">Web Design</a>
                                    <ul>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Articles</a>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">User Experience</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>

            </div>
            {/* {/*SECCIONES(MI LISTA DE LIBROS/LIBROS DISPONIBLES)*/}

            <div id="sections-container" className='row'>
                <section id="mybooks-section" className="col-4">
                    <div id="mybooks-container">
                        <h4>My Books</h4>
                        <div id="mybooks"></div>
                        <h5>Total:</h5>
                    </div>
                </section>
                <section id="books-container" className='col-8'>
                    <div className='books-main-container'>
                        <BooksStore books={books} />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main