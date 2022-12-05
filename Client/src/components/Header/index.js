//= = Import composants
import logo from 'src/assets/imgs/logo-header.png';
import Search from '../Search';
import IconsHeader from '../IconsHeader';

import './styles.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo-madjikarite" />
    
      <div className="header__title-bar">
        <h1>Soins biologiques et équitables à base de karité</h1>
        <Search />
      </div>  
      <IconsHeader />
    </header>
  );
}

export default Header;
