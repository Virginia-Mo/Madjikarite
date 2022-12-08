import PropTypes from 'prop-types';
import React from 'react';

import './style.scss'

function DeleteAccount() {
  return (

    <><h1 className="delete-title">Supprimer mon compte</h1>
    
    <div className="delete">
      Vous êtes sur le point de supprimer votre compte.
      Cette action est irréversible et entraînera la suppression de toutes vos données personnelles
      et de votre historique de commandes.

      Afin de confirmer votre choix, veuillez saisir votre mot de passe.

      <button type="button" className="delete-button">Mot de passe</button>
    </div></>
  );
}

DeleteAccount.propTypes = {

};

export default DeleteAccount;
