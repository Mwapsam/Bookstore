import * as api from '../../api/api';

const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'BookStore/books/GET_BOOKS';

const handleData = (data) => {
  const books = [];
  const keys = Object.keys(data);

  keys.forEach((key, index) => {
    const book = data[keys[index]];
    book[0].item_id = key;

    books.push(book[0]);
  });
  return books;
};

// ACTION CREATORS
export const fetchData = () => async (dispatch) => api
  .fetchBooks()
  .then((data) => dispatch({ type: GET_BOOKS, payload: handleData(data) }));
export const addBook = (book) => async (dispatch) => {
  try {
    await api.postBook(book);

    dispatch({ type: ADD_BOOK, payload: book });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getBooks = (payload) => ({ type: GET_BOOKS, payload });

export const removeBook = (bookId) => async (dispatch) => {
  try {
    await api.deleteBook(bookId);

    dispatch({ type: REMOVE_BOOK, payload: bookId });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleBook = (payload) => ({ type: REMOVE_BOOK, payload });

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};
// export default reducer;
export default reducer;
