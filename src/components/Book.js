import React from 'react';
import { useSelector } from 'react-redux';
import './styles/book.css';
import Form from './Form';
import BookList from './BookList';
// import { getBooks } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);

  // useEffect(() => {
  //   getBooks();
  // }, []);

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
