import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container">
        <span className=" Bookstore-CMS fs-4">
          Bookstore CMS
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                CATEGORIES
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/cart" className="btn btn-outline-info btn-circle ms-2">
              <i className="fa fa-user me-1" />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  </div>
);

export default Navbar;
