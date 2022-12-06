// Login page
import { useDispatch, useSelector } from 'react-redux';

import { login } from 'src/actions/user';
import Field from './Field';

import logo from '../../assets/imgs/logo-header.png';
import './style.scss';

function LoginForm() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <div className="login">

    <img src={logo} alt="logo" className="login__logo" />

    <form className="login__form" onSubmit={handleSubmit}>
    
    <h1 className="login__title">Bienvenue chez Madjikarité</h1>
    
      <Field
        name="email"
        placeholder="Email"
        type="email" />
      <Field
        name="password"
        placeholder="Mot de passe"
        type="password" />

      <button
        type="submit"
        className="login__button"
      >
        {loading ? 'Chargement...' : 'Connexion'}
      </button>
    </form>
    </div>
  );
}

export default LoginForm;
