import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { updateAccount, getAccount } from 'src/actions/user';
import { resetMessageError } from '../../actions/user';

import FieldAccount from '../CustomerAccount/FieldAccount';
import NavBarCustomer from './NavBarCustomer/NavBarCustomer';
import NavBarAdmin from '../Admin/NavBarAdmin/NavBarAdmin';
import './style.scss';
import 'animate.css';

function CustomerAccount() {
  const dispatch = useDispatch();
  const formAccount = useRef()
  const messageAccount = useRef()
  const messageError = useSelector((state)=> state.user.messageError)
  useEffect(() => {
    // getting the customer's infos
    dispatch(getAccount());
    // reset the message error on the redux state
    dispatch(resetMessageError())
  }, []); // au 1er rendu
  
  const userInfos = useSelector((state) => state.user.userInfos);
  const password = useSelector((state) => state.user.password );
  const passwordConfirmation = useSelector((state) => state.user.passwordConfirmation);


  const handleSubmit = (event) => {
    event.preventDefault();
      // if (password !== passwordConfirmation){
      //   alert("Mot de passe incorrect")
      //   return
      // };
       dispatch(updateAccount()) 
    formAccount.current.style.display = "none",
    messageAccount.current.style.removeProperty("display");
    } 
    const user = useSelector((state) => state.user.userInfos.email)
    const userName = useSelector((state) => state.user.userInfos.first_name)

  return (
   <>
    <h2 className="customerAccount__h1 animate__animated animate__fadeIn"><strong>Bienvenue</strong>, <span className="user"> {userName} </span> ! </h2>
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
                label="Pr??nom" />

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
                label="Num??ro de t??l??phone" />
              <FieldAccount
                name="password"
                type="password"
                placeholder="Mot de passe"
                label="Mot de Passe" />
              <small>Votre mot de passe doit contenir : -1 Majuscule, -1 Caract??re sp??cial, -1 chiffre et 8 Caract??res minimum.</small>
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
            Modifier les informations
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
