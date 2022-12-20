import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';


function NavBar() {

  const categories = useSelector((state) => state.products.listCategories);       

  return (


    <nav className="nav-bar">

      <ul className="nav-bar__list">
      {/* // i display the categories name to the nav bar */}
      { categories.map((category)=> (
        
        <NavLink 
          to={`/category/${category.id}`} 
          className="nav-bar__link"
          key={category.id}
        >
          <li className="nav-bar__item" >
          {category.name}
          </li>
        </NavLink>
        
      ))}

        <li className="nav-bar__item nav-bar__item--about-us">
          À propos de Madjikarité

          <ul className="nav-bar__under-list">
 
            <NavLink 
                to="/aboutus" 
                className="nav-bar__under-link"
            >
              <li className="nav-bar__under-item">
                Découvrir le projet Madjikarité
              </li>
            </NavLink>
            
            <NavLink 
              to="/workers"
              className="nav-bar__under-link"
            >
              <li className="nav-bar__under-item">
                Nos productrices
              </li>
            </NavLink>
            
            <NavLink
              to="/sheabenefits"
              className="nav-bar__under-link"
            >
              <li className="nav-bar__under-item">
                Les vertus du karité
              </li>
            </NavLink>
            
            <NavLink
              to="/process"
              className="nav-bar__under-link"
            >
              <li className="nav-bar__under-item">
                Processus de fabrication
              </li>
            </NavLink>

          </ul>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;
