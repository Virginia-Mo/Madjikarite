
import Search from '../Search';
import IconsHeader from 'src/components/Header/IconsHeader';
import logo from 'src/assets/imgs/logo-header.png';


import './styles.scss';
import NavBarMobile from '../NavBarMobile';

function Header() {
  return (
    <header className="header">
      <NavBarMobile />
      <div>
        <img src={logo} className="header__logo-container" alt="logo de madjikarite" />
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
