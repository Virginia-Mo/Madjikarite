//= = Import composants

import logo from 'src/assets/imgs/logo-header.png';
import Search from '../Search';
import IconsHeader from '../IconsHeader';

import './styles.scss';

function Header() {
  return (
    <header className="header">
<<<<<<< HEAD
      <img src={logo} className="header__logo" alt="logo-madjikarite" />
    
=======
      <div className="header__logo">
        <img src={logo} className="header__logo" alt="logo de madjikarite" />
      </div>
>>>>>>> 685b4ba4ee85e8fa7328ca82739ec519bc38e6b3
      <div className="header__title-bar">
        <h1>Soins biologiques et équitables à base de karité</h1>
        <Search />
      </div>  
      <IconsHeader />
    </header>
  );
}

export default Header;
