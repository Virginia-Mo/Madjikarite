import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "animate.css";

import './style.scss';

function MenuBurger() {

  const categories = useSelector((state) => state.products.listCategories);

  return (
    <nav className="menu-burger animate__animated animate__fadeInLeft">

      <h3 className="menu-burger__title">Nos produits</h3>

      <ul className="menu-burger__list">

        {/* // i display the categories name to the nav bar */}
        { categories.map((category)=> (
          
          <NavLink 
            to={`/category/${category.id}`} 
            className="menu-burger__link"
            key={category.id}
          >
            <li className="menu-burger__item" >
              {category.name}
            </li>
          </NavLink>
          
        ))}

        <NavLink 
          to="/aboutus" 
          className="menu-burger__link"
        >
          <li className="menu-burger__item menu-burger__item--about-us">
            Découvrir le projet Madjikarité
          </li>
        </NavLink>
              
        <NavLink 
          to="/workers"
          className="menu-burger__link"
        >
          <li className="menu-burger__item menu-burger__item--about-us">
            Nos productrices
          </li>
        </NavLink>
              
        <NavLink
          to="/sheabenefits"
          className="menu-burger__link"
        >
          <li className="menu-burger__item menu-burger__item--about-us">
            Les vertus du karité
          </li>
        </NavLink>
              
        <NavLink
          to="/process"
          className="menu-burger__link"
        >
          <li className="menu-burger__item menu-burger__item--about-us">
            Processus de fabrication
          </li>
        </NavLink>

      </ul>

    </nav>
  );
}

export default MenuBurger;
