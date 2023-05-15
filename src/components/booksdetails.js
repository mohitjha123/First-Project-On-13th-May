import React from 'react'

const Book = () =>{
    const title = "Atomic Habits: the life-changing million-copy #1 bestseller";
    const author = "James Clear";
    return <article className='book'>
      <img src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg" alt="Atomic Habits" />
      <h2>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
    </article>
  }


export default Book
