import './style.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const products = useSelector((state) => state.products.listProducts);
  
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">

      {/* { products.map((product)=> (
        <NavLink to={`/category${product.category_id}/products`} className="nav-bar__link">{product.category_name}</NavLink>
      ))} */}
        <li className="nav-bar__item nav-bar__item--first">
        <a href="/" className="nav-bar__link">Savons solides</a>
        </li> 
        <li className="nav-bar__item">
          <a href="/" className="nav-bar__link">Savons liquides</a>
        </li>
        <li className="nav-bar__item">
          <a href="/" className="nav-bar__link">Savons ronds</a>
        </li>
        <li className="nav-bar__item">
          <a href="/" className="nav-bar__link">Beurres corporels</a>
        </li>
        <li className="nav-bar__item">
          <a href="/" className="nav-bar__link">Beurres à lèvres</a>
        </li>
        <li className="nav-bar__item">
          <a href="/" className="nav-bar__link">Cadeaux de Noël</a>
        </li> 
        <li className="nav-bar__item nav-bar__item--about-us">
          <p className="nav-bar__link">À propos de Madjikarité</p>
          <ul className="nav-bar__under-list">
            <li className="nav-bar__under-item">
              <NavLink to="/aboutus" className="nav-bar__under-link">Découvrir le projet Madjikarité</NavLink>
            </li>
            <li className="nav-bar__under-item">
              <NavLink to="/workers" className="nav-bar__under-link">Nos productrices</NavLink>
            </li>
            <li className="nav-bar__under-item">
              <NavLink to="/sheabenefits" className="nav-bar__under-link">Les vertus du karité</NavLink>
            </li>
            <li className="nav-bar__under-item">
              <a href="/" className="nav-bar__under-link">Processus de fabrication</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
