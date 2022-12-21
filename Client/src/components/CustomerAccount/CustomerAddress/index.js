import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import Field from '../../LoginForm/Field';

import { getAddress } from 'src/actions/user';

import './style.scss';
import FieldAccount from '../FieldAccount';
import { updateAddress, saveUserAddress } from '../../../actions/user';
import NavBarAdmin from '../../Admin/NavBarAdmin/NavBarAdmin';
import NavBarCustomer from '../NavBarCustomer/NavBarCustomer';

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
  <div className="customerAccount__div">
<NavBarCustomer />
   
      <div className="customerAccount">
        <form className="customerAdress__form" onSubmit={handleSubmit}>
          
          <FieldAccount
            name="address"
            type="text"
            placeholder={userAddress.address}
            label="Adresse de livraison" />
          <FieldAccount
            name="zip_code"
            type="text"
            placeholder={userAddress.zip_code}
            label="Code postal" />
          <FieldAccount
            name="city"
            type="text"
            placeholder={userAddress.city}
            label="Ville" />
          <FieldAccount
            name="country"
            type="text"
            placeholder={userAddress.country}
            label="Pays" />
          <button className="customerAdress__button" type="submit">Modifier mon adresse</button>

        </form> 
        </div>
      </div>
      </>   
  );
      

}


export default CustomerAddress;
