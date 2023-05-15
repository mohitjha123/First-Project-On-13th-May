import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './components/booksdetails'

const BookList = () => {
  return <section className='booklist'>
    <Book></Book>
    <Book></Book>
    <Book></Book>
  </section>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);