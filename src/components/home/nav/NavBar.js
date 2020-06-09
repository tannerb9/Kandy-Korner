import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="company-title">Kandy Korner</h1>
      <h2 className="slogan">~slogan~</h2>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/locations">
              Locations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
