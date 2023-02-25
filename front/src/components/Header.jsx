import React from "react";

const Header = () => {
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
            <a href="/" className="nav-link px-2 link-secondary">
              Accueil
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2 link-dark" spellcheck="false">
              La carte
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2 link-dark" spellcheck="false">
              Nous contacter
            </a>
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
