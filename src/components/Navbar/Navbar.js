import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import $ from 'jquery';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container-fluid">
        <Link className="fs-3 ubuntu navbar-brand" to="/">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx="true">
            {`
              button[aria-expanded='false'] > .closed {
                display: none;
                // border:1px solid black;
              }

              button[aria-expanded='true'] > .open {
                display: none;
              }
            `}
          </style>

          <i className="fa-solid fa-bars open text-dark"></i>
          <i className="fa-solid fa-xmark closed text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink className="nav-link ubuntu" to="/">
            {/* <NavLink to="/home" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Home</NavLink> */}
              Characters
            </NavLink>
            <NavLink className="nav-link ubuntu" to="/episodes">
              Episodes
            </NavLink>
            <NavLink className="nav-link ubuntu" to="/location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
