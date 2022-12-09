//customer account page with form to create a new account
import { useDispatch, useSelector } from 'react-redux';

import Field from '../LoginForm/Field';

import { USER_SAVE } from 'src/actions/user';

import './style.scss';

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

    <div className="customerAccount">

    <form className="customerAccount__form" onSubmit={handleSubmit}>

    <h1 className="customerAccount__title">Création de compte</h1>

    <div className="box__container">

    <div className="box__container--left">
    
    <div className="civility">
        <input  type="checkbox" name="civilité"  />
        <label for="civilité">M.</label>
        <input  type="checkbox" name="civilité"  />
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
          placeholder="Confirmation du mot de passe"
        />  
      </div>

      <div className="box__container--right">
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
          placeholder="Téléphone"
        />  
      </div>
    </div>
        <button
          className="customerAccount__button"
          type="submit"
          disabled={loading}
        >
          {loading ? 'En cours...' : 'Valider'}
        </button>
      </form>
    </div>
    
  );
}

export default CustomerAccount;
