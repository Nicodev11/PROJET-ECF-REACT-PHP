import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

// Utilisation de react-hook-form pour gerer les données du formulaire

const SignUp = () => {
  
  const {handleSubmit, register, formState : {errors}} = useForm()
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
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
            {...register('firstname', {required : true})}
            
          />{errors.firstname && <p>Champs obligatoire</p>}
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
            {...register('lastname', {required : true})}
          />{errors.lastname && <p>Champs obligatoire</p>}
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
            {...register('phone', {required : true})}
          />{errors.phone && <p>Champs obligatoire</p>}
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
            {...register('email', {required : true, pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
          />{errors.email && <p>Adresse email non valide</p>}
        </div>
        <div className="mb-3 text-start">
          <label for="password" className="form-label">
            Mot de passe :
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            {...register('password', {required : true})}
          />{errors.password && <p>Champs obligatoire</p>}
        </div>
        <button type="submit" className="btn btn-warning">
          Continuer
        </button>
      </form>
    </div>
  );
};

export default SignUp;
