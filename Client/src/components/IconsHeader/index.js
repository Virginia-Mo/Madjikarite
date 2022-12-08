import { Link } from 'react-router-dom';
import { IoBasketOutline, IoBasketSharp } from 'react-icons/io5';
import { RiAccountCircleFill, RiAccountCircleLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import './style.scss';

function IconsHeader() {
  const cart = useSelector((state) => state.cart.cart)
  return (
    <div className="header-icons">

    <Link to="/shoppingcart">
        <div className="header-icons__container-basket">
        { cart.length === 0 &&  <IoBasketOutline className="header-icons__basket"/> }
        { cart.length > 0 && <IoBasketSharp className="header-icons__basket"/> }
        <p>Mon panier</p>
        </div>
      </Link>
      {/* <div></div>  */}
    <Link to="/loginForm">
      <div className="header-icons__container-account">
        <RiAccountCircleLine className="header-icons__account"/>
        <p>Se connecter</p>
      </div>
    </Link>
      {/* <div><RiAccountCircleFill /></div> */}
    </div>
  );
}

export default IconsHeader;
