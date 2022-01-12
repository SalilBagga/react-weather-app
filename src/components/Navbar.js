import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <h3>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </h3>
          </li>
          <li className="nav-item">
            <h3>
              <Link className="nav-link" to="/map">
                Map
              </Link>
            </h3>
          </li>
        </ul>
      </div>
    </nav>
  );
}
