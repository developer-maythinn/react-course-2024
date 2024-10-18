import React from "react";

function BookDetail({ book, theme }) {
  return (
    <>
      <li style={{ background: theme.ui }}>
        <h2>{book.title}</h2>
        <h4>author: {book.author}</h4>
      </li>
    </>
  );
}

export default BookDetail;
