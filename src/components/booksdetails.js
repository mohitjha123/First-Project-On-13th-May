import React from 'react'

const img ='./img/91bYsX41DVL._AC_UL600_SR600,400_.jpg';
const title = "Atomic Habits: the life-changing million-copy #1 bestseller";
const author = "James Clear";

const Book = () =>{
    return <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
    </article>
  }


export default Book
