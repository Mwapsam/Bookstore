import React from 'react';
import { useSelector } from 'react-redux';
import './styles/book.css';
import Form from './Form';
import BookList from './BookList';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <section>
      {books.map((book) => (
        <BookList key={book.id} book={book} />
      ))}
      <hr className="divider" />
      <Form />
    </section>
  );
};

export default Book;
