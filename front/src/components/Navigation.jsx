import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components/macro';

const Navigation = () => {

  return (
    <Nav>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className=" d-flex align-items-center justify-content-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img className="img-fluid logo w-50" src="./img/logoTexte.svg" alt="" />
        </a>
        <ul className="nav col-12 col-md-auto mb-3 justify-content-center mb-md-0">
          <li>
            <NavLink to='/' 
            className="nav-link pb-0 link-warning fs-5" 
            >
              Accueil
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/restaurant"
            className="nav-link pb-0 link-warning fs-5" 
          >
            Le restaurant
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/menu"
            className="nav-link pb-0 link-warning fs-5" 
          >
            La carte
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/contact"
            className="nav-link pb-0 link-warning fs-5"
          >
            Contact
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
    </Nav>
  );
};

const Nav = styled.div `

  .active {
    position: relative;
    color: #f7b900 !important;
  }

  .active::after {

        content: "";
        height: 3px;
        width: 0;
        background: #f7b900;
        position: absolute;
        border-radius: 10px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        -webkit-animation: anim 0.3s ease forwards;
        animation: anim 0.6s ease forwards;

        @-webkit-keyframes anim {
          to {
            width: 100%;
          }
        }
        @keyframes anim {
          to {
            width: 100%;
          }
        }
  }
`

export default Navigation;
