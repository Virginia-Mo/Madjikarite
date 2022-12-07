//customer account page with form to create a new account
import { useDispatch, useSelector } from 'react-redux';

import Field from '../LoginForm/Field';

import { USER_SAVE } from 'src/actions/user';

import './style.scss';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';

function CustomerAccount() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = new FormData(form);
    const user = {
      firstname: data.get('Prénom'),
      lastname: data.get('Nom'),
      password: data.get('Mot de passe'),
      passwordConfirm: data.get('Confirmation du mot de passe'),
      email: data.get('Email'),
      address: data.get('Adresse de livraison'),
      postalCode: data.get('Code postal'),
      city: data.get('Ville'),
      phone: data.get('Téléphone'),
    };

    dispatch({
      type: USER_SAVE,
      payload: { user },
    });
  };  

  return (
    <>
    <Header />
    <NavBar />
    <div className="customerAccount">

      <h1 className="customerAccount__title">Création de compte</h1>

      <form className="customerAccount__form" onSubmit={handleSubmit}>

        <div>
          <input type="checkbox" name="civilité" />
          <label for="civilité">M.</label>
          <input type="checkbox" name="civilité" />
          <label for="civilité">Mme</label>
        </div>

        <Field
          name="Prénom"
          type="text"
          placeholder="Prénom" />
        <Field
          name="Nom"
          type="text"
          placeholder="Nom" />
        <Field
          name="Mot de passe"
          type="password"
          placeholder="Mot de passe" />
        <Field
          name="Confirmation du mot de passe"
          type="password"
          placeholder="Confirmation du mot de passe" />
        <Field
          name="Email"
          type="email"
          placeholder="Email" />
        <Field
          name="Adresse de livraison"
          type="text"
          placeholder="Adresse de livraison" />
        <Field
          name="Code postal"
          type="text"
          placeholder="Code postal" />
        <Field
          name="Ville"
          type="text"
          placeholder="Ville" />
        <Field
          name="Téléphone"
          type="text "
          placeholder="Téléphone" />
        <button
          className="customerAccount__form__button"
          type="submit"
          disabled={loading}
        >
          {loading ? 'En cours...' : 'Valider'}
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default CustomerAccount;
