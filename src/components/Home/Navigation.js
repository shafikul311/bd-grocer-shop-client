import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand p-3 " href="#">
          <h1 style={{color:'blue'}}> BD GROCER SHOP</h1>
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
            <Link className="p-3 fs-1"  to="/home">
             <h3> Home </h3>
            </Link>
           
            <Link className="p-3 fs-1" to="/orders">
            <h3> Order </h3>
             
            </Link>
            <Link className="p-3 fs-1" to="/admin">
            <h3>Admin </h3>
              
            </Link>
            <Link className="p-3 fs-1" to="/deals">
            <h3> Deals </h3>
              
            </Link>
            <Link className="p-3 fs-1" to="/login">
            <h3>Login</h3>
              
            </Link>
            <Link className="p-3 fs-1" to="/checkout">
              {/* Checkout */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
