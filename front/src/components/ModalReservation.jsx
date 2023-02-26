import React from "react";
import FormSignUp from "./FormSignUp";

const ModalReservation = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-warning me-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Reserver une table
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-4 text-warning"
                id="exampleModalLabel"
              >
                Réserver une table
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <FormSignUp />
            </div>
            <div className="modal-footer w-100 text-center">
              <div className="mb-3">
                <p>
                  Vous avez dèja un compte ? <a href="/">Identifiez vous !</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReservation;
