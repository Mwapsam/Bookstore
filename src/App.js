import { Routes, Route } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import Book from './components/Book';
import Category from './components/Category';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </>
);

export default App;
