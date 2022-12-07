import { Link } from 'react-router-dom';
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
        <Link to="/loginForm">
          <div className="header-icons__account"><RiAccountCircleLine />
            <p>Se connecter</p>
          </div>  
        </Link>
      {/* <div className='header-icons__icon'><RiAccountCircleFill /></div> */}
    </div>
  );
}

export default IconsHeader;
