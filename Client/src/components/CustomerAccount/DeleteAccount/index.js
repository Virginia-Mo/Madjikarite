import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../../../actions/user';

import NavBarCustomer from '../NavBarCustomer/NavBarCustomer';
import './style.scss'

function DeleteAccount() {
  const dispatch= useDispatch()
  const handleClick = () => {
   if (window.confirm('Etes-vous sûr de vouloir supprimer votre compte ?'))
    dispatch(deleteAccount())
   }
  
  return (

    <>
    <h1 className="customerAdress__title">Supprimer mon compte</h1>

    <div className="customerAccount__div">
      <NavBarCustomer />
      <div className="delete__text">

        <p className="delete__text--paragraph">Vous êtes sur le point de supprimer votre compte.
        Cette action est irréversible et entraînera la suppression de toutes vos données personnelles
        et de votre historique de commandes.</p>
        <p className="delete__text--paragraph">Afin de confirmer votre choix, veuillez saisir votre mot de passe.</p>

      <button type="button" className="delete__button" onClick={handleClick}>Supprimer mon compte</button>
    </div>
    
    </div>
    </>
    
  );
}

export default DeleteAccount;
