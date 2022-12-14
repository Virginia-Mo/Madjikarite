//= = Import composants

import logo from 'src/assets/imgs/logo-header.png';
import Search from '../Search';
import IconsHeader from 'src/components/Header/IconsHeader';

import './styles.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
    <Link to="/">
      <div className="header__logo">
        <img src={logo} className="header__logo" alt="logo de madjikarite" />
      </div>
      </Link>
      <div className="header__title-bar">
        <h1>Soins biologiques et équitables à base de karité</h1>
        <Search />
      </div>  
      <IconsHeader />
    </header>
  );
}

export default Header;
