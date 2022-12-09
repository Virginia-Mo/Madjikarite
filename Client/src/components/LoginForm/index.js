// Login page
import { useDispatch, useSelector } from 'react-redux';

import { login } from 'src/actions/user';
import Field from './Field';

import logo from '../../assets/imgs/logo-header.png';
import img from '../../assets/imgs/sheaCream.jpeg'
import './style.scss';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';

function LoginForm() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <><Header /><NavBar /><div className="login">

      <div className="left__box">
        <form className="login__form" onSubmit={handleSubmit}>

          <img src={logo} alt="logo" className="login__logo" />


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

      <div className="right__box">
        <div className='right__box--imgContainer'>

          <img src={img} alt="sheaCream" className="login__img" />
        </div>
      </div>
    </div></>
  );
}

export default LoginForm;
