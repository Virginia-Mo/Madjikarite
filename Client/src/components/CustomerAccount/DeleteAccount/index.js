import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss'

function DeleteAccount() {
  return (

    <>
    <h2 className="delete__title">Supprimer mon compte</h2>

  

    <div className="delete">


    <div className="deleteAside">
      <p className="deleteAside__lien">Informations du compte</p>
      <NavLink to="/customeraccount/adress"><p className="deleteAside__lien">Adresses</p></NavLink>
      <p className="deleteAside__lien">Historiques des commandes</p>
      <p className="deleteAside__lien">Supprimer son compte</p>
    </div> 

      <div className="delete__text">

        <p className="delete__text--paragraph">Vous êtes sur le point de supprimer votre compte.
        Cette action est irréversible et entraînera la suppression de toutes vos données personnelles
        et de votre historique de commandes.</p>
        <p className="delete__text--paragraph">Afin de confirmer votre choix, veuillez saisir votre mot de passe.</p>

      <button type="button" className="delete__button">Mot de passe</button>
    </div>
    
    </div>
    </>
    
  );
}

DeleteAccount.propTypes = {

};

export default DeleteAccount;
