import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

  const {handleSubmit, register, formState : {errors}} = useForm()

  const onSubmit = (datas) => {
  }

  return (
    <div className='position-relative d-flex justify-content-center p-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-75 p-5 rounded shadow border border-warning'>
      <div className="mb-3 text-start">
          <h6 className="fs-5">Connexion</h6>
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
            {...register('email', {required : true, pattern : { value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}
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
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;