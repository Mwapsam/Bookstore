import React from 'react';
import './styles/form.css';

const Form = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="form">
      <form>
        <h2 className="new-book">ADD NEW BOOK</h2>
        <div className="form-inputs">
          <input
            type="text"
            className="text"
            name="title"
            placeholder="Title"
            required
          />
          <select
            name="category"
            className="category-select"
            defaultValue=""
            required
          >
            <option value="" hidden>
              Category
            </option>
            <option value="business">Business</option>
            <option value="fiction">Fiction</option>
            <option value="programming">Programming</option>
          </select>
          <button type="submit" onClick={formSubmitHandler}>
            ADD BOOK
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
