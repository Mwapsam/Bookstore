export const addBook = (number) => (dispatch) => {
  dispatch({
    type: 'add',
    payload: number,
  });
};

export const removeBook = (number) => (dispatch) => {
  dispatch({
    type: 'delete',
    payload: number,
  });
};
