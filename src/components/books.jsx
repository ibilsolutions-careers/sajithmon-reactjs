import React from "react";

const BookList = ({ books, addToBookshelf }) => {
  return (
    <div>
      <h2>Hi</h2>
      <ul>
        {books.map((book) => (
          <li key={book.primary_isbn13}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
