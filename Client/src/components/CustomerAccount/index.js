import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import FieldAccount from '../CustomerAccount/FieldAccount';
import { updateAccount, getAccount } from 'src/actions/user';

import './style.scss';


function CustomerAccount() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAccount());
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
        
       dispatch(updateAccount());
    } 
    const user = useSelector((state) => state.user.userInfos.email)

  return (

   <><h2 className="customerAccount__title">Modification de votre compte</h2>
   <div className="customerAccount__div">

      <div className="deleteAside">
        <NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink>
       { (user !== "larry.bambelle@gmail.com" && (
         <>
         <NavLink to="/customeraccount/adress"><p className="deleteAside__lien">Adresses</p></NavLink>
         <p className="deleteAside__lien">Historiques des commandes</p>
         <NavLink to="/customeraccount/deleteaccount"><p className="deleteAside__lien">Supprimer mon compte</p></NavLink>
         </>
       ))} 
        { (user === "larry.bambelle@gmail.com") && ( 
          <NavLink to="/admin/orders"><p className="deleteAside__lien">Home</p></NavLink> 
          )}
        
      </div>
      <div className="customerAccount">
        <form className="customerAccount__form" onSubmit={handleSubmit}>

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
    </div></>
  );
}

export default CustomerAccount;
