import { Link } from 'react-router-dom';
import { IoBasketOutline, IoBasketSharp, IoMailOutline } from 'react-icons/io5';
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { getCartQuantity } from '../../../selectors/getCartQuantity';
import './style.scss';
import 'animate.css';

function IconsHeader() {
  const cart = useSelector((state) => state.cart.cart)
  const sum = getCartQuantity()
  return (
    <div className="header-icons">
      <Link to="/contact">
        <div className="header-icons__container-contact">
          <IoMailOutline className="header-icons__contact"/>
        </div>
      </Link>

      <Link to="/shoppingcart">
        <div className="header-icons__container-basket">
        { cart.length === 0 &&  <IoBasketOutline className="header-icons__basket"/> }
        { cart.length > 0 && (
          <>
          <IoBasketSharp className="header-icons__basket" />
          <div className="header-icons__cart animate__animated animate__zoomIn">{sum}</div></>
        )}
        <p className="header-icons__link-text">Mon panier</p>
        </div>
      </Link>
      {/* <div></div>  */}
    <Link to="/loginForm">
      <div className="header-icons__container-account">
        <RiAccountCircleLine className="header-icons__account"/>
        <p className="header-icons__link-text">Se connecter</p>
      </div>
    </Link>
      {/* <div><RiAccountCircleFil /l></div> */}

    </div>
  );
}

export default IconsHeader;
