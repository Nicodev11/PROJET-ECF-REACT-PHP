import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";

  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className=" d-flex align-items-center justify-content-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img className="img-fluid logo w-50" src="./img/logo2.png" alt="" />
        </a>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to='/' 
            className="nav-link px-2 link-warning fs-5" 
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            >
              Accueil
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/menu"
            className="nav-link px-2 link-warning fs-5"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            La carte
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/contact"
            className="nav-link px-2 link-warning fs-5"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Nous contacter
          </NavLink>
          </li>
        </ul>
        <div className="col-md-3 me-3 text-end">
          <button
            type="button"
            className="btn btn-outline-warning me-2"
            spellcheck="false"
          >
            Reserver une table
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
