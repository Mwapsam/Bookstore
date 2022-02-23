import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/booklist.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookList = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = (event, id) => {
    event.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book-card">
      <div className="details">
        <span className="category">{book.category}</span>
        <h3 className="title">{book.title}</h3>
        <p className="author">{book.author}</p>
        <div className="actions">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={(event) => handleClick(event, book.id)}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-bar">
        <div className="round-bar" style={{ width: 80, height: 80 }}>
          <CircularProgressbar
            value={64}
            styles={buildStyles({
              pathColor: 'var(--accent-color)',
            })}
          />
        </div>
        <div className="count">
          <p>50%</p>
          <span>Completed</span>
        </div>
      </div>

      <div className="chapter">
        <span>CURRENT CHAPTER</span>
        <p>Chapter 7</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookList.propTypes = {
  book: PropTypes.objectOf(PropTypes.any),
};

BookList.defaultProps = {
  book: {},
};

export default BookList;
