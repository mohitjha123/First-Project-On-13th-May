import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const img ='./img/91bYsX41DVL._AC_UL600_SR600,400_.jpg';
const title = "Atomic Habits: the life-changing million-copy #1 bestseller";
const author = "James Clear";

const BookList = () => {
  return <section className='booklist'>
    <Book author={author} title={title} img={img} />
    <Book author={author} title={title} img={img} />
    <Book author={author} title={title} img={img} />
  </section>
}
const Book = (props) =>{
  console.log(props)
  return <article className='book'>
    <img src={props.img} alt={props.title} />
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
  </article>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList></BookList>);