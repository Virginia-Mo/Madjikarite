import PropTypes from 'prop-types';
import React from 'react';

import './style.scss'

function DeleteAccount() {
  return (

    <>
    <h1 className="delete__title">Supprimer mon compte</h1>
    <div className="delete">
      <span className="delete__text">
        Vous êtes sur le point de supprimer votre compte.
        Cette action est irréversible et entraînera la suppression de toutes vos données personnelles
        et de votre historique de commandes.
      </span>

      <span className="delete__text--2ndpart">
        Afin de confirmer votre choix, veuillez saisir votre mot de passe.
      </span>

      <button type="button" className="delete__button">Mot de passe</button>
    </div></>
    
  );
}

DeleteAccount.propTypes = {

};

export default DeleteAccount;
