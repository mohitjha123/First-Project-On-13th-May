import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Image from './components/Image'
import Author from './components/Author';
import Title from './components/Title';

const BookList = () => {
  return <section className='booklist'>
    <Book></Book>
    <Book></Book>
    <Book></Book>
  </section>
}
const Book = () =>{
  return <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);