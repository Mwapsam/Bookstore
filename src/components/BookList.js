import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles/booklist.css';

const BookList = () => (
  <div className="book-card">
    <div className="details">
      <span className="category">ScienceFiction</span>
      <h3 className="title">My Goldfish</h3>
      <p className="author">suzane collns</p>
      <div className="actions">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
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

export default BookList;
