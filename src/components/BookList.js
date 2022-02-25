import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/booklist.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookList = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(book.item_id));
  };

  const percentage = Math.floor(Math.random() * 99);

  return (
    <div className="book-card">
      <div className="details">
        <span className="category">{book.category}</span>
        <h3 className="title">{book.title}</h3>
        <p className="author">{book.author}</p>
        <div className="actions">
          <button type="button">Comments</button>
          <i className="small-line" />
          <button type="button" onClick={handleClick}>
            Remove
          </button>
          <i className="small-line" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-bar">
        <div className="round-bar" style={{ width: 60, height: 60 }}>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: 'var(--accent-color)',
            })}
          />
        </div>
        <div className="count">
          <p>
            {percentage}
            %
          </p>
          <span>Completed</span>
        </div>
        <i className="bg-ling" />
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
