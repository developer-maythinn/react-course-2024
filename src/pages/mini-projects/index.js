import React from "react";
import BookList from "../../components/Mini-Projects/BookList";
import BookContextProvider from "../../context/BookContext";
import BookForm from "../../components/Mini-Projects/BookForm";

function MiniProjects() {
  return (
    <>
      <BookContextProvider>
        <BookList />
        <BookForm />
      </BookContextProvider>
    </>
  );
}

export default MiniProjects;
