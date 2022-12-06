import { IoBasketOutline, IoBasketSharp } from 'react-icons/io5';
import { RiAccountCircleFill, RiAccountCircleLine } from 'react-icons/ri';
import './style.scss';

function IconsHeader() {
  return (
    <div className="header-icons">

      <div className="header-icons__basket"><IoBasketOutline />
        <p>Mon panier</p>
      </div>
      {/* <div className='header-icons__icon'><IoBasketSharp /> </div>  */}
      <div className="header-icons__account"><RiAccountCircleLine />
        <p>Se connecter</p>
      </div>
      {/* <div className='header-icons__icon'><RiAccountCircleFill /></div> */}
    </div>
  );
}

export default IconsHeader;
