import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand p-3 " href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="p-3 fs-1" to="/home">
              Home
            </Link>
            <Link className="p-3 fs-1" to="/order">
              Order
            </Link>
            <Link className="p-3 fs-1" to="/admin">
              Admin
            </Link>
            <Link className="p-3 fs-1" to="/deals">
              Deals
            </Link>
            <Link className="p-3 fs-1" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
