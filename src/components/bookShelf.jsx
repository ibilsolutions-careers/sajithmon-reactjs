import React from "react";

const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      <h2>My Bookshelf</h2>
      {bookshelf.length > 0 ? (
        <ul>
          {bookshelf.map((book) => (
            <li key={book.primary_isbn13}>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books added to the bookshelf yet.</p>
      )}
    </div>
  );
};

export default Bookshelf;
