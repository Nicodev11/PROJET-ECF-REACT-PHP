import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Utilisation de react-hook-form pour gerer les données du formulaire

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (datas) => {
    axios({
      method: "POST",
      url: "http://localhost:8888/api/addUser.php",
      data: datas,
    })
    .then((res) => {
      if (res.status === 200) {
        navigate("/nouvel-utilisateur")
      }
    })
    .catch((errors) => {
      if (errors.response.status === 404) {
        navigate('/se-connecter')
      }
    });
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 text-start">
                  <h6 className="fs-5">Créer un compte</h6>
                </div>
                <div className="mb-3 text-start">
                  <label for="firstname" className="form-label">
                    Nom :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    placeholder="Entrez votre nom"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <p className="text-danger">Champs obligatoire</p>
                  )}
                </div>
                <div className="mb-3 text-start">
                  <label for="lastname" className="form-label">
                    Prénom :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    placeholder="Entrez votre prénom"
                    {...register("lastname", { required: true })}
                  />
                  {errors.lastname && (
                    <p className="text-danger">Champs obligatoire</p>
                  )}
                </div>
                <div className="mb-3 text-start">
                  <label for="phone" className="form-label">
                    Téléphone :
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Entrez votre numéro de téléphone"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <p className="text-danger">Champs obligatoire</p>
                  )}
                </div>
                <div className="mb-3 text-start">
                  <label for="email" className="form-label">
                    Adresse mail :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Entrez votre email"
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger">Adresse email non valide</p>
                  )}
                </div>
                <div className="mb-3 text-start">
                  <label for="password" className="form-label">
                    Mot de passe :
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger">
                      Votre mot de passe doit contenir au moins 8 caractères
                      dont :<li>Une majuscule</li>
                      <li>Une minuscule</li>
                      <li>Un chiffre</li>
                      <li>un caractère spécial</li>
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-warning"
                  data-bs-dismiss="modal"
                >
                  Continuer
                </button>
              </form>
              
            </div>
            <div className="modal-footer w-100 text-center">
              <div className="mb-3">
                <p>
                  Vous avez dèja un compte ?{" "}
                  <a href="/se-connecter">Identifiez vous !</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
