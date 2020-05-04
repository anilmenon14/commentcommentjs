import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="link-text">One</span>
            <i class="fas fa-at"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="link-text">Two</span>
            <i class="fas fa-at"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="link-text">Three</span>
            <i class="fas fa-at"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
