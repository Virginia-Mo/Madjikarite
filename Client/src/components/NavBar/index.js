import { Link } from 'react-router-dom';


import './style.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const products = useSelector((state) => state.products.listProducts);
  
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
<<<<<<< HEAD
      <Link to="/">
        <li className="nav-bar__item nav-bar__item--first">
          Savons solides
        </li>
      </Link>
      <Link to="/">
=======

      {/* { products.map((product)=> (
        <NavLink to={`/category${product.category_id}/products`} className="nav-bar__link">{product.category_name}</NavLink>
      ))} */}
        <li className="nav-bar__item nav-bar__item--first">
        <a href="/" className="nav-bar__link">Savons solides</a>
        </li> 
>>>>>>> dedc0465e1dda1505387ea8a0a24808fbd745feb
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
<<<<<<< HEAD
          Cadeaux de Noël
        </li>
      </Link>
=======
          <a href="/" className="nav-bar__link">Cadeaux de Noël</a>
        </li> 
>>>>>>> dedc0465e1dda1505387ea8a0a24808fbd745feb
        <li className="nav-bar__item nav-bar__item--about-us">
          À propos de Madjikarité
          <ul className="nav-bar__under-list">
          <Link to="/">
            <li className="nav-bar__under-item">
<<<<<<< HEAD
              Découvrir le projet Madjikarité
=======
              <NavLink to="/aboutus" className="nav-bar__under-link">Découvrir le projet Madjikarité</NavLink>
>>>>>>> dedc0465e1dda1505387ea8a0a24808fbd745feb
            </li>
          </Link>
          <Link to="/">
            <li className="nav-bar__under-item">
<<<<<<< HEAD
              Nos productrices
=======
              <NavLink to="/workers" className="nav-bar__under-link">Nos productrices</NavLink>
>>>>>>> dedc0465e1dda1505387ea8a0a24808fbd745feb
            </li>
          </Link>
          <Link to="/">
            <li className="nav-bar__under-item">
<<<<<<< HEAD
              Les vertus du karité
=======
              <NavLink to="/sheabenefits" className="nav-bar__under-link">Les vertus du karité</NavLink>
>>>>>>> dedc0465e1dda1505387ea8a0a24808fbd745feb
            </li>
          </Link>
          <Link to="/">
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
