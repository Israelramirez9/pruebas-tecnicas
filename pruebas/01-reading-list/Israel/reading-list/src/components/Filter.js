import React from 'react'
import { FaFilter } from 'react-icons/fa'
function Filter({ booksCategoryNav, booksFiltered, handleCategory, handleSlider, deletefilters }) {
    return (
        <div id="filter-search-container">

            <nav>
                <ul>
                    <li id="text-filtrar-por">
                        <a href="1">Filtrar por:</a>
                    </li>
                    <li>
                        <a href="2">Género</a>
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
                    <li><a href="1" id="text-paginas">Páginas</a>
                        <ul>
                            <li>
                                <div className='box'>
                                    <div className='slider'>
                                        <input id="range" type="range" min="0" max="1500" step="50" onChange={handleSlider} />
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
                    <i><FaFilter id="icon-filter"/></i>
                </div>
                <div id="text-found-books">
                    Libros encontrados:{booksFiltered.filter((obj) => obj.book.isSelected === false).length}
                </div>
            </div>
        </div>
    )
}

export default Filter