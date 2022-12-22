import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FieldAccount from '../CustomerAccount/FieldAccount';
import { updateAccount, getAccount } from 'src/actions/user';

import './style.scss';
import 'animate.css';
import NavBarCustomer from './NavBarCustomer/NavBarCustomer';
import NavBarAdmin from '../Admin/NavBarAdmin/NavBarAdmin';
import { resetMessageError } from '../../actions/user';

function CustomerAccount() {
  const dispatch = useDispatch();
  const formAccount = useRef()
  const messageAccount = useRef()
  const messageError = useSelector((state)=> state.user.messageError)
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAccount());
    dispatch(resetMessageError())

  }, []); // au 1er rendu
  

  const userInfos = useSelector((state) => state.user.userInfos);

  const password = useSelector((state) => state.user.password );
  const passwordConfirmation = useSelector((state) => state.user.passwordConfirmation);

  console.log(userInfos);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT DONE");
       
      if (password !== passwordConfirmation){
        alert("Mot de passe incorrect")
        return
      };
       dispatch(updateAccount()) 
    formAccount.current.style.display = "none",
    messageAccount.current.style.removeProperty("display");
    } 
    const user = useSelector((state) => state.user.userInfos.email)
    const userName = useSelector((state) => state.user.userInfos.first_name)

  return (
   <>
    <h2 className="customerAccount__h1 animate__animated animate__fadeIn"><strong>Bienvenue</strong>, {userName} ! </h2>
    <h1 className="customerAccount__title">Modification de votre compte</h1>
    
   <div className="customerAccount__div">
{ (user !== "larry.bambelle@gmail.com" && (
     <>
    <NavBarCustomer />
     </>
   ))} 
    { (user === "larry.bambelle@gmail.com") && ( 
      <>
      <NavBarAdmin />
     </>
      )}
 
  
      <div className="customerAccount">
        <form className="customerAccount__form" onSubmit={handleSubmit} ref={formAccount}>

          <div className="box__container">

            <div className="box__container--left">
              <FieldAccount
                name="first_name"
                type="text"
                placeholder={userInfos.first_name}
                label="Prénom" />

              <FieldAccount
                name="last_name"
                type="text"
                placeholder={userInfos.last_name}
                label="Nom" />

              <FieldAccount
                name="email"
                type="email"
                placeholder={userInfos.email}
                label="Email" />
            </div>

            <div className="box__container--right">
              <FieldAccount
                name="phone_number"
                type="tel"
                placeholder={userInfos.phone_number}
                label="Numéro de téléphone" />
              <FieldAccount
                name="password"
                type="password"
                placeholder="Mot de passe"
                label="Mot de Passe" />
              <small>Votre mot de passe doit contenir : -1 Majuscule, -1 Caractère spécial, -1 chiffre et 8 Caractères minimum.</small>
              <FieldAccount
                name="passwordConfirmation"
                type="password"
                placeholder="Confirmation du mot de passe"
                label="Mot de Passe" />
            </div>
          </div>
          <button
            className="customerAccount__button"
            type="submit"
          >
            Modifier les infos
          </button>
        </form>
        </div>
        { messageError && (
          <div className="messageOrder animate__animated animate__bounceIn" ref={messageAccount}>
      <p>{messageError}</p>
    </div>)}
        </div>
    </>
  );
}

export default CustomerAccount;
