import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      author: "AA",
      title: "AA Title",
    },
    {
      id: 2,
      author: "BB",
      title: "BB Title",
    },
    {
      id: 3,
      author: "CC",
      title: "CC Title",
    },
  ]);
  const addBook = (author, title) => {
    setBooks([...books, { id: Date.now(), author, title }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <>
      <BookContext.Provider value={{ books, addBook, removeBook }}>
        {children}
      </BookContext.Provider>
    </>
  );
}

export default BookContextProvider;
