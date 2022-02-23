import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './styles/form.css';

const Form = () => {
  const dispatch = useDispatch();

  const bookStore = () => ({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  const [bookSetup, setBookSetup] = useState('');
  const { title, author, category } = bookSetup;

  const changeHandler = (event) => {
    setBookSetup((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(addBook(bookSetup));
      setBookSetup(bookStore());
    }
  };

  return (
    <section className="form">
      <form onSubmit={formSubmitHandler}>
        <h2 className="new-book">ADD NEW BOOK</h2>
        <div className="form-inputs">
          <input
            type="text"
            className="text"
            name="title"
            placeholder="Title"
            value={title}
            required
            onChange={changeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="Book Author"
            className="author"
            value={author}
            required
            onChange={changeHandler}
          />
          <select
            name="category"
            className="category-select"
            defaultValue=""
            value={category}
            required
            onChange={changeHandler}
          >
            <option value="" hidden>
              Category
            </option>
            <option value="business">Business</option>
            <option value="fiction">Fiction</option>
            <option value="programming">Programming</option>
          </select>
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
