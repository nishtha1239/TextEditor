import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const handleAbout = () => {
  //   props.func(false);
  // };
  // const handleHome = () => {
  //   props.func(true);
  // };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                ContactUs
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
          {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          {/* </form> */}
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Change Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// fix the prop type like if in title i send number error will come
Navbar.prototype = {
  title: PropTypes.string.isRequired, //proptypes.string.isRequired agar default prop nahi use kara and koi prop nahi bheja then error
  about: PropTypes.string.isRequired,
};

// agar koi prop pass nahi kara toh yeh display
Navbar.defaultProps = {
  title: "set title here",
  about: "write about here",
};
