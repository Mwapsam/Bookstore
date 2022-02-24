import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/book.css';
import Form from './Form';
import BookList from './BookList';
import { fetchData } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section>
      {books.map((book) => (
        <BookList key={book.item_id} book={book} />
      ))}
      <hr className="divider" />
      <Form />
    </section>
  );
};

export default Book;
