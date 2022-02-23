import React from 'react';
import './styles/book.css';
import Form from './Form';
import BookList from './BookList';

const Book = () => (
  <section>
    <BookList />
    <hr className="divider" />
    <Form />
  </section>
);

export default Book;
