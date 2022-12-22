import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';

import Field from '../../LoginForm/Field';

import { getAddress } from 'src/actions/user';

import './style.scss';
import FieldAccount from '../FieldAccount';
import { updateAddress, saveUserAddress, resetMessageError } from '../../../actions/user';
import NavBarAdmin from '../../Admin/NavBarAdmin/NavBarAdmin';
import NavBarCustomer from '../NavBarCustomer/NavBarCustomer';

function CustomerAddress() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAddress());
    dispatch(resetMessageError())
  }, []); // au 1er rendu


  let userAddress = useSelector((state) => state.user.userAddress);
  const formAddress = useRef()
  const messageAddress = useRef()
  const messageError = useSelector((state) => state.user.messageError)
  console.log(userAddress);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMIT DONE");
       dispatch(updateAddress());
       formAddress.current.style.display = "none",
       messageAddress.current.style.removeProperty("display")
    } 

  return (
    
  <><h2 className="customerAdress__title">Adresse de livraison</h2>
  <div className="customerAccount__div">
<NavBarCustomer />
   
      <div className="customerAccount">
        <form className="customerAdress__form" onSubmit={handleSubmit} ref={formAddress}>
          
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
       {messageError && (<div className="messageOrder animate__animated animate__bounceIn" ref={messageAddress}>
      <p>{messageError}</p>
    </div>)} 
      </div>
      </>   
  );
      

}


export default CustomerAddress;
