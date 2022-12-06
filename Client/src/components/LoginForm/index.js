import { useDispatch, useSelector } from 'react-redux';

import { login } from 'src/actions/user';
import Field from './Field';

import './style.scss';

function LoginForm() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <Field
        name="email"
        placeholder="Email"
        type="email"
      />
      <Field
        name="password"
        placeholder="Mot de passe"
        type="password"
      />

      <button
        type="submit"
        className="login__button"
      >
        {loading ? 'Chargement...' : 'Connexion'}
      </button>
    </form>
  );
}

export default LoginForm;
