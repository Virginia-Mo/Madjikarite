import { useDispatch, useSelector } from 'react-redux';
import { RiMenuFill, RiCloseCircleFill } from 'react-icons/ri';
import { displayMenu } from '../../actions/searchBar';

import MenuBurger from './MenuBurger';
import IconsHeader from 'src/components/Header/IconsHeader';

import './style.scss';


function NavBarMobile() {
  const dispatch = useDispatch();
  const openMenu = useSelector((state) => state.searchBar.openMenu);

  const toggleMenu = () => {
    dispatch(displayMenu());
  };

  return (
    <div className="nav-bar-mobile">
      {!openMenu &&
        <RiMenuFill 
        className="nav-bar-mobile__menu-icon "
        onClick={toggleMenu} 
        />
      }
      {openMenu && 
        <RiCloseCircleFill 
          className="nav-bar-mobile__close-icon" 
          onClick={toggleMenu}
        />
      }
      {openMenu &&
        <MenuBurger />
      }

       <IconsHeader />

    </div>


  );
}

export default NavBarMobile;
