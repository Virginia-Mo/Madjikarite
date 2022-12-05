import { IoBasketOutline, IoBasketSharp } from "react-icons/io5";
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import './style.scss'

function IconsHeader() {
  return (
    // {isLogged && <RiAccountCircleFill/>}   
      <div className='header-icons'>
         
      <div className='header-icons__icon'><IoBasketOutline />
        <p>Mon panier</p>
      </div>
    {/* <div className='header-icons__icon'><IoBasketSharp /> </div>  */}
      <div className='header-icons__icon'><RiAccountCircleLine />
        <p>Se connecter</p>
      </div>
      {/* <div className='header-icons__icon'><RiAccountCircleFill /></div> */}
      </div>
  );
}



export default IconsHeader;
