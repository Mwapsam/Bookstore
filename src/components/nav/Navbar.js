import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';
import { ImUser } from 'react-icons/im';
import { MdClose } from 'react-icons/md';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav className="nav-menu">
      {(toggleMenu || screenWidth > 500) && (
        <div className="bg">
          <MdClose className="close" onClick={toggleNav} />
          <ul className="list">
            <span className="Bookstore-CMS">Bookstore CMS</span>
            <li className="menu">
              <Link onClick={toggleNav} to="/" className="items">
                Books
              </Link>
              <Link onClick={toggleNav} to="/category" className="items">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="avatar">
        <ImUser className="user-icon" />
      </div>

      <button type="button" onClick={toggleNav} className="btn">
        <i className="fa fa-bars" />
      </button>
      <Outlet />
    </nav>
  );
}
