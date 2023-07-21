import { React, useState, useEffect, useContext } from 'react'
import '../styles/Main.css'
import BooksStore from './BooksStore'
import axios from 'axios'
import MyBooks from './MyBooks'
import ShowMyBookSection from './ShowMyBookSection'
import { BookCategoryContext } from '../auth/CategoryBookContext'
import { FaFilter } from 'react-icons/fa'
import Footer from './Footer'

function Main() {


    const { booksProperty, setBooksProperty } = useContext(BookCategoryContext);
    const [booksCategoryNav, setBooksCategoryNav] = useState([]);
    const [books, setBooks] = useState([]);

    const filterByCategory = (booksProperty, book) => {
        switch (booksProperty.category) {
            case 'genre':

                return booksProperty.dataCategory === book.book[booksProperty.category]
            case 'pages':
                const range = document.getElementById("range");

                return book.book[booksProperty.category] < range.value;
            case 'author':
                return book.book[booksProperty.category].name.toLowerCase().includes(booksProperty.dataCategory);
        }
    }

    const booksFiltered = books.filter((book) => (
        booksProperty.category
            ? filterByCategory(booksProperty, book)
            : true
    ))



    useEffect(() => {
        axios.get("./books.json")
            .then(response => {

                const categoryObject = [];

                response.data.library.forEach((obj) => {
                    categoryObject[obj.book.genre] = "";
                })

                setBooksCategoryNav(Object.keys(categoryObject));

                setBooks(response.data.library.map((obj) => {
                    obj.book.isSelected = false;
                    return obj;
                }))
            })
            .catch(e => console.log(e));
    }, [])

    const handleCategory = (value, property) => {

        setBooksProperty({
            ...BookCategoryContext,
            category: property,
            dataCategory: value
        })

    }

    const addToShoppingCart = (title) => {
        console.log(title);
        const updateBooks = books.map((obj) => {
            if (obj.book.title === title) {
                obj.book.isSelected = true;
            }
            return obj;
        })
        setBooks(updateBooks);
    }
    const deleteBookOfMyCart = (title) => {
        const updateBooks = books.map((obj) => {
            if (obj.book.title === title) {
                obj.book.isSelected = false;
            }
            return obj;
        })
        setBooks(updateBooks);
    }
    const deletefilters = () => {
        setBooksProperty({
            ...BookCategoryContext,
            category: null,
            dataCategory: null
        })
    }
    const handleSlider = () => {
        const slider = document.getElementById("range")
        const value = document.querySelector(".value");
        value.textContent = slider.value;
        handleCategory(slider.value, "pages");

    }
    return (
        <>
            <main>

                <div id="filter-search-container">

                    <nav>
                        <ul>
                            <li id="text-filtrar-por">
                                <a href="#">Filtrar por:</a>
                            </li>
                            <li>
                                <a href="#">Género</a>
                                <ul>
                                    {
                                        booksCategoryNav.map((value) =>
                                            <li key={value}>
                                                <button
                                                    className="category-button"
                                                    onClick={() => handleCategory(value, "genre")}>
                                                    {value}
                                                </button>
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                            <li><a id="text-paginas">Páginas</a>
                                <ul>
                                    <li>
                                        <div className='box'>
                                            <div className='slider'>
                                                <input id="range" type="range" min="0" max="2000" step="50" onChange={handleSlider} />
                                            </div>
                                            <div className='value'>
                                                100
                                            </div>
                                        </div>

                                    </li>

                                </ul>
                            </li>


                        </ul>
                    </nav>
                    <div id="container-filter-amount-books">
                        <div id="delete-filters-button">
                            <button onClick={deletefilters}>Eliminar Filtros</button>
                            <i><FaFilter /></i>
                        </div>
                        <div id="text-found-books">
                            Libros encontrados:{booksFiltered.filter((obj) => obj.book.isSelected === false).length}
                        </div>
                    </div>
                </div>

                <div id="sections-container" className='row'>
                    <section id="mybooks-section" className="col-4">
                        <MyBooks books={books.filter((obj) => obj.book.isSelected)} deleteBookOfMyCart={deleteBookOfMyCart} />
                    </section>
                    <ShowMyBookSection books={books.filter((obj) => obj.book.isSelected)} />
                    <section id="books-container" className='col-8'>
                        <div className='books-main-container'>
                            <BooksStore books={booksFiltered.filter((obj) => obj.book.isSelected === false)} addToShoppingCart={addToShoppingCart} />
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Main