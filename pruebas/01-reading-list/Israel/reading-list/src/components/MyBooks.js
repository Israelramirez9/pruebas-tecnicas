import React from 'react'
import '../styles/MyBooks.css'

function MyBooks({ books, deleteBookOfMyCart }) {  
  
  return (

    <div id="mybooks-container">
      <h4 id="title-mybokks" >My Books</h4>
      <div id="mybooks">

        {
          books.map((obj) =>
            <div key={obj.book.title} className='all-data-container'>
              <h5 id="title-mybooks">{obj.book.title}</h5>
              <div className='img-data-container-mybooks'>
                <div className='img-container-mybooks'>
                  <img src={obj.book.cover} alt="img-book" /></div>

              </div>              
              <div className='button-container'>
                <button id="delete-book" onClick={() => deleteBookOfMyCart(obj.book.title)}>eliminar</button>

              </div>
            </div>
          )}

      </div>
      <div id="container-counterBooks">
        <h5 id="total">Libros a llevar: {books.length}</h5>
        
      </div>
    </div>
  )
}

export default MyBooks