import React from 'react';
import { NavLink } from 'react-router-dom';

const NewUser = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src="./img/newUser.png"
              alt="Nouvelle utilisateur"
              className="img-fluid w-75"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              <span className="text-danger">Félicitation!</span> Vous êtes enregistrer.
            </p>
            <p className="lead">Vous pouvez dès à présent vous connecter pour reserver une table.</p>
            <div className="btn btn-warning">
              <NavLink to="/se-connecter" className="nav-link px-2 link-dark fs-5" >Se connecter</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;