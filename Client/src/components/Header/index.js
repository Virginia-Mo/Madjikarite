
import Search from '../Search';
import IconsHeader from 'src/components/Header/IconsHeader';
import logo from 'src/assets/imgs/logo-header.png';


import './styles.scss';
import NavBarMobile from '../NavBarMobile';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavBarMobile />
      <div>
      <Link to="/">
        <img src={logo} className="header__logo-container" alt="logo de madjikarite" />
        </Link>
      </div>
      <div className="header__title-bar">
        <h1>Soins biologiques et équitables à base de karité</h1>
         <Search />
      </div>  
      <IconsHeader />
    </header>
  );
}

export default Header;
