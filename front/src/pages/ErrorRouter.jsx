import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorRouter = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src="./img/erreur404.png"
              alt="erreur404"
              className="img-fluid w-75"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              {" "}
              <span className="text-danger">Oups!</span> Page not found.
            </p>
            <p className="lead">La page que vous recherchez semble introuvable.</p>
            <div className="btn btn-warning">
              <NavLink to="/" className="nav-link px-2 link-dark fs-5" >Retour a l'accueil</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorRouter;