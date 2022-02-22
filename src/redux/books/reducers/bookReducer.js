const data = {
  item1: [
    {
      title: "The Handmaid's Tale",
      category: 'Fiction',
    },
  ],
  item2: [
    {
      title: 'Great Expectations',
      category: 'Classics',
    },
  ],
};

const bookReducer = (state = data, action) => {
  switch (action.type) {
    case 'add':
      return state + action.payload;
    case 'delete':
      return state - action.payload;
    default:
      return state;
  }
};

export default bookReducer;
