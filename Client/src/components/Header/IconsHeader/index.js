import { Link } from 'react-router-dom';
import { IoBasketOutline, IoBasketSharp } from 'react-icons/io5';
import { RiAccountCircleFill, RiAccountCircleLine } from 'react-icons/ri';
import './style.scss';

function IconsHeader() {
  return (
    <div className="header-icons">

      <div className="header-icons__container-basket">
        <IoBasketOutline className="header-icons__basket"/>
        <p><a href="" className="header-icons__link-text">Mon panier</a></p>
      </div>
      {/* <div><IoBasketSharp /> </div>  */}
      <div className="header-icons__container-account">
        <RiAccountCircleLine className="header-icons__account"/>
        <p><a href="" className="header-icons__link-text">Se connecter</a></p>
      </div>
      {/* <div><RiAccountCircleFill /></div> */}
    </div>
  );
}

export default IconsHeader;
