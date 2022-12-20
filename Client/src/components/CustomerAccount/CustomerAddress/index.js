import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import Field from '../../LoginForm/Field';

import { getAddress } from 'src/actions/user';

import './style.scss';
import FieldAccount from '../FieldAccount';
import { updateAddress, saveUserAddress } from '../../../actions/user';

function CustomerAddress() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAddress());
  }, []); // au 1er rendu
  

  let userAddress = useSelector((state) => state.user.userAddress);

  console.log(userAddress);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT DONE");
       dispatch(updateAddress());
    } 

  return (
    
  <><h2 className="customerAdress__title">Adresse de livraison</h2>
  <div className="deleteAside">
      <NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink>
      <NavLink to="/customeraccount/address"><p className="deleteAside__lien">Adresses</p></NavLink>
      <p className="deleteAside__lien">Historiques des commandes</p>
      <NavLink to="/customeraccount/deleteaccount"><p className="deleteAside__lien">Supprimer mon compte</p></NavLink>
    </div>
   
      <div className="customerAdress">
        <form className="customerAdress__form" onSubmit={handleSubmit}>
          <FieldAccount
            name="Adresse de livraison"
            type="text"
            placeholder={userAddress.address}
            label="Adresse de livraison" />
          <FieldAccount
            name="Code postal"
            type="text"
            placeholder={userAddress.zip_code}
            label="Code postal" />
          <FieldAccount
            name="Ville"
            type="text"
            placeholder={userAddress.city}
            label="Ville" />
          <FieldAccount
            name="Pays"
            type="text"
            placeholder={userAddress.country}
            label="Pays" />
          <button className="customerAdress__button" type="submit">Modifier mon adresse</button>

        </form> 
    
      </div>
      </>   
  );
      

}


export default CustomerAddress;
