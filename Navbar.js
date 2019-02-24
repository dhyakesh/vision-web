import React from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wraper indigo ">
        <div className="container">
          <a href="#" className="brand-logo left">
            VISION
          </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Upload">Upload</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
          <ul className="sidenav" id="mobile-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Upload</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
