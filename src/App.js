import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/books";
import Bookshelf from "./components/bookShelf";

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
        );
        setBooks(response.data.results.books);
      } catch (error) {
        console.error("Error fetching the books: ", error);
      }
    };
    fetchBooks();
  }, []);

  const addToBookshelf = (book) => {
    setBookshelf((prev) => [...prev, book]);
  };

  return (
    <div>
      <h1>Bookshelf Application</h1>
      <BookList books={books} addToBookshelf={addToBookshelf} />
      <Bookshelf bookshelf={bookshelf} />
    </div>
  );
};

export default App;
