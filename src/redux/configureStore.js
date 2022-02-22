import { createStore } from 'redux';
import reducers from './books/reducers/index';

const store = createStore(reducers, {});

export default store;
