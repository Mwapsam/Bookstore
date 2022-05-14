import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './styles/form.css';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const bookStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <section className="form">
      <form onSubmit={formSubmitHandler}>
        <h2 className="new-book">ADD NEW BOOK</h2>
        <div className="form-inputs">
          <input
            type="text"
            className="text"
            name={title}
            placeholder="Title"
            value={title}
            required
            onChange={(e) => titleChangeHandler(e)}
          />
          <input
            type="text"
            name={author}
            placeholder="Book Author"
            className="author"
            value={author}
            required
            onChange={(e) => authorChangeHandler(e)}
          />
          <select
            name={category}
            className="category-select"
            value={category}
            required
            onChange={(e) => categoryChangeHandler(e)}
          >
            <option value="" disabled>
              Category
            </option>
            <option value="business">Business</option>
            <option value="fiction">Fiction</option>
            <option value="programming">Programming</option>
            <option value="adventure">Adventure</option>
            <option value="science">Science</option>
          </select>
          <button
            disabled={!title && !author && !category}
            type="submit"
            onClick={bookStore}
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
