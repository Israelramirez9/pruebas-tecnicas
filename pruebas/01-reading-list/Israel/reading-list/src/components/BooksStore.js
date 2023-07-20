import React from 'react'
import '../styles/BooksStore.css'
import { FaShoppingCart } from 'react-icons/fa';

function BooksStore({ books, addToShoppingCart }) {
   
    return (
        <>
            {
                books.map((obj) => (
                    <div className="book-container" key={obj.book.title}>
                        <div className='all-data-container'>
                            <div className='img-data-container'>
                                <div className='img-container'>
                                    <img src={obj.book.cover} alt="img-book" />
                                </div>
                                <div className='data-book-container'>
                                    <h5>{obj.book.title}</h5>
                                    <h6>genero:{obj.book.genre}</h6>
                                    <h6>año:{obj.book.year}</h6>
                                    <h6>Autor:{obj.book.author.name}</h6>
                                    <h6>páginas: {obj.book.pages}</h6>
                                </div>
                            </div>
                            <div className='sinopsis'>{obj.book.synopsis}</div>
                            <div className='button-container'>
                            
                                <button onClick={()=>addToShoppingCart(obj.book.title)}>Agregar al carrito<i><FaShoppingCart /></i></button>

                            </div>
                        </div>
                    </div>
                ))


            }

        </>
    )
}

export default BooksStore