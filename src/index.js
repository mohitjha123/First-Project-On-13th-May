import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './components/booksdetails';

const firstBook = {
  author: 'James Clear',
  img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  title: 'Atomic Habits: the life-changing million-copy #1 bestseller',
};
const secBook = {
  author: ' Anthony Doerr',
  img: './img/1501173219.01.S001.LXXXXXXX.jpg',
  title: 'All the Light we Cannot See',
};
const thirdBook = {
  author: ' Morgan Housel',
  img: 'https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'The Psychology of Money',
};


const BookList = () => {
  return <section className='booklist'>
    <Book
      author={firstBook.author}
      title={firstBook.title}
      img={firstBook.img} />
    <Book
      author={secBook.author}
      title={secBook.title}
      img={secBook.img} />
    <Book
      author={thirdBook.author}
      title={thirdBook.title}
      img={thirdBook.img} />
  </section>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);