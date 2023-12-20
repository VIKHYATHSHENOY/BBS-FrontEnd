// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <hr style={{ borderTop: '2px solid black', borderBottom: '2px solid black', margin: '0' }} />
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            BAR BENDING SCHEDULE
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Suits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-dark" href="#" style={{ backgroundColor: 'black', color: 'white' }}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
