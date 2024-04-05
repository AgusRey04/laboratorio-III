import React from 'react';
import BookItem from '../booksItem/BookItem';

import 'bootstrap/dist/css/bootstrap.min.css';
function Books({books,index}) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {
        books.map((book) =><BookItem  
        key={book.bookTitle}
        title={book.bookTitle}
        author={book.bookAuthor}
        rating={book.bookRating}
        pageCount={book.pageCount}
        imageUrl={book.imageUrl}/>)
      }
    </div>
  )
}

export default Books
