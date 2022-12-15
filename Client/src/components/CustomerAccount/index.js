//customer account page with form to create a new account
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Field from '../LoginForm/Field';

import { signUpUser } from 'src/actions/user';

import './style.scss';

function CustomerAccount() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  const logged = useSelector((state) => state.user.logged);
  const loading = useSelector((state) => state.user.loading);
  const password = useSelector((state) => state.user.password );
  const passwordConfirmation = useSelector((state) => state.user.passwordConfirmation);

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log("SUBMIT DONE");
       
    if (password !== passwordConfirmation){
      alert("Mot de passe incorrect")
      return
    } else {
       dispatch(signUpUser());
      
     
    } 
  
    // const form = evt.target;
    // const data = new FormData(form);
    // const user = {
    //   firstname: data.get('Prénom'),
    //   lastname: data.get('Nom'),
    //   password: data.get('Mot de passe'),
    //   passwordConfirm: data.get('Confirmation du mot de passe'),
    //   email: data.get('Email'),
    //   address: data.get('Adresse de livraison'),
    //   postalCode: data.get('Code postal'),
    //   city: data.get('Ville'),
    //   country: data.get('Country'),
    //   phone: data.get('Téléphone'),
    // };


  };  

  return (

    <><h2 className="customerAccount__title">Création de compte</h2>
    <div className="customerAccount">

      <form className="customerAccount__form" onSubmit={handleSubmit}>



        <div className="box__container">

          <div className="box__container--left">
            <Field
              name="civility"
              type="text"
              placeholder="civilité" />
            <Field
              name="first_name"
              type="text"
              placeholder="Prénom" />
            <Field
              name="last_name"
              type="text"
              placeholder="Nom" />
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe" />
            <Field
              name="passwordConfirmation"
              type="password"
              placeholder="Confirmation du mot de passe" />
            <Field
              name="email"
              type="email"
              placeholder="Email" />
          </div>

          <div className="box__container--right">
            <Field
              name="address"
              type="text"
              placeholder="Adresse de livraison" />
            <Field
              name="zip_code"
              type="text"
              placeholder="Code postal" />
            <Field
              name="city"
              type="text"
              placeholder="Ville" />
            <Field
              name="country"
              type="text"
              placeholder="Pays" />
            <Field
              name="phone_number"
              type="tel"
              placeholder="Téléphone" />
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
    </div></>
    
  );
}

export default CustomerAccount;
