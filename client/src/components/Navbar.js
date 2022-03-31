import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid container">
        <NavLink
          className="navbar-brand fs-1 text-light"
          to="/"
          activeClassName="active"
          exact
        >
          Sandal Store
        </NavLink>
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
        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="navbar-brand"
                to="/"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navbar-brand"
                to="/products"
                activeClassName="active"
                exact
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="navbar-brand"
                to="/about"
                activeClassName="active"
                exact
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navbar-brand"
                to="/admin"
                activeClassName="active"
                exact
              >
                Admin
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          <div>
            <NavLink
              className="navbar-brand"
              to="/signin"
              activeClassName="active"
              exact
            >
              SignIn
            </NavLink>
            <NavLink
              className="navbar-brand"
              to="/signup"
              activeClassName="active"
              exact
            >
              SignUp
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
