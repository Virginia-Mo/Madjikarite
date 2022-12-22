//customer account page with form to create a new account
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Field from '../LoginForm/Field';
import { resetMessageError } from '../../actions/user';
import { signUpUser } from 'src/actions/user';
import { useEffect } from 'react';
import './style.scss';

function SignUp() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const messageError = useSelector((state)=> state.user.messageError)
  const logged = useSelector((state) => state.user.logged);
  const loading = useSelector((state) => state.user.loading);
  const password = useSelector((state) => state.user.password );
  const passwordConfirmation = useSelector((state) => state.user.passwordConfirmation);

  useEffect(() => {
    dispatch(resetMessageError())
  }, [])

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log("SUBMIT DONE");
       
    if (password !== passwordConfirmation){
      alert("Mot de passe incorrect")
      return
    } else {
       dispatch(signUpUser());
    } 

  };  

  return (

    <><h2 className="customerAccount__title">Création de compte</h2>
    <div className="customerAccount">

      <form className="customerAccount__form" onSubmit={handleSubmit}>



        <div className="box__container">

          <div className="box__container--left">
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
     <small>Votre mot de passe doit contenir : <br/> 
     -1 Majuscule, -1 Caractère spécial, -1 chiffre et 8 Caractères minimum.</small>
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
        { (messageError != " ") && (<div className="message animate__animated animate__zoomIn"><p>{messageError}</p></div>)}
      </form>
    </div></>
    
  );
}

export default SignUp;
