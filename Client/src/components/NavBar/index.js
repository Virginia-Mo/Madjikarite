import { Link } from 'react-router-dom';


import './style.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const products = useSelector((state) => state.products.listProducts);
  
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
      <Link to="/">
        <li className="nav-bar__item nav-bar__item--first">
          Savons solides
        </li>
      </Link>
      <Link to="/">
        <li className="nav-bar__item">
          Savons liquides
        </li>
      </Link>
      <Link to="/">
        <li className="nav-bar__item">
          Savons ronds
        </li>
      </Link>
      <Link to="/">
        <li className="nav-bar__item">
         Beurres corporels
        </li>
      </Link>
      <Link to="/">
        <li className="nav-bar__item">
          Beurres à lèvres
        </li>
      </Link>
      <Link to="/">
        <li className="nav-bar__item">
          Cadeaux de Noël
        </li>
      </Link>
        <li className="nav-bar__item nav-bar__item--about-us">
          À propos de Madjikarité
          <ul className="nav-bar__under-list">
          <Link to="/aboutus">
            <li className="nav-bar__under-item">
              Découvrir le projet Madjikarité
            </li>
          </Link>
          <Link to="/workers">
            <li className="nav-bar__under-item">
              Nos productrices
            </li>
          </Link>
          <Link to="/sheabenefits">
            <li className="nav-bar__under-item">
              Les vertus du karité
            </li>
          </Link>
          <Link to="/process">
            <li className="nav-bar__under-item">
              Processus de fabrication
            </li>
          </Link>
          </ul>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;
