import { React, useState, useEffect, useContext } from 'react'
import '../styles/Main.css'
import BooksStore from './BooksStore'
import axios from 'axios'
import MyBooks from './MyBooks'
import ShowMyBookSection from './ShowMyBookSection'
import { BookCategoryContext } from '../auth/CategoryBookContext'
import Footer from './Footer'
import Filter from './Filter'



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
        let data = localStorage.getItem("books");
        
        if (!data) {
            const booksFromStorage = JSON.parse(data);
            setBooks(booksFromStorage);
            const categoryObject = [];
            booksFromStorage.forEach((obj) => {
                categoryObject[obj.book.genre] = "";
            })

            setBooksCategoryNav(Object.keys(categoryObject));
            setBooksProperty(JSON.parse(localStorage.getItem("booksProperty")));
        } else {
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
                    localStorage.setItem("books", JSON.stringify(response.data.library.map((obj) => {
                        obj.book.isSelected = false;
                        return obj;
                    })))
                }
                )
                .catch(e => console.log(e));

        }

    }, [])

    useEffect(() => {

        localStorage.setItem("books", JSON.stringify(books))
        localStorage.setItem("booksProperty", JSON.stringify(booksProperty))
    }, [booksProperty])

    const handleCategory = (value, property) => {

        setBooksProperty({
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
                <Filter booksCategoryNav={booksCategoryNav} booksFiltered={booksFiltered} handleCategory={handleCategory} handleSlider={handleSlider} deletefilters={deletefilters} />


                <div id="sections-container" className='row'>
                    <section id="mybooks-section" className="md-col-4 col-5">
                        <MyBooks books={books.filter((obj) => obj.book.isSelected)} deleteBookOfMyCart={deleteBookOfMyCart} />
                    </section>
                    <ShowMyBookSection books={books.filter((obj) => obj.book.isSelected)} />
                    <section id="books-container" className='md-col-8 col-7'>
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