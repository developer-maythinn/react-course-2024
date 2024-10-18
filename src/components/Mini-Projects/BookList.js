import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BookContext } from "../../context/BookContext";
import BookDetail from "./BookDetail";

function BookList() {
  const themeContext = useContext(ThemeContext); // access context
  const { isLightTheme, light, dark } = themeContext;
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;
  console.log(books);
  return (
    <>
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          {books?.length > 0 ? (
            books.map((book, index) => {
              return (
                <React.Fragment key={index}>
                  <BookDetail book={book} theme={theme}></BookDetail>
                </React.Fragment>
              );
            })
          ) : (
            <div>No books</div>
          )}
        </ul>
      </div>
    </>
  );
}

export default BookList;
