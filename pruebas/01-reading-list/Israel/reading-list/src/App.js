import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { BookCategoryContext } from './auth/CategoryBookContext';
import { useState } from 'react';

function App() {
  const [booksProperty, setBooksProperty] = useState({
    category: null,
    dataCategory: null
  })
  return (
    <div className="App">
      <BookCategoryContext.Provider value={{ booksProperty, setBooksProperty }}>
        <Header></Header>
        <Main></Main>
      </BookCategoryContext.Provider>
    </div>
  );
}

export default App;
