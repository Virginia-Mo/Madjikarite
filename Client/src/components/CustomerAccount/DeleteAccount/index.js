import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteAccount } from '../../../actions/user';
import NavBarCustomer from '../NavBarCustomer/NavBarCustomer';

import './style.scss'

function DeleteAccount() {
  const dispatch= useDispatch()
  const handleClick = () => {
    dispatch(deleteAccount())
  }
  return (

    <>
    <h2 className="customerAccount__title">Supprimer mon compte</h2>

  

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

DeleteAccount.propTypes = {

};

export default DeleteAccount;
