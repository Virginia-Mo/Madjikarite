import { Link } from "react-router-dom";
import "animate.css";

import './style.scss';

function MenuBurger() {
  return (
    <nav className="menu-burger animate__animated animate__fadeInLeft">
      <ul className="menu-burger__list">
        <Link to="/">
          <li className="menu-burger__item">
            Savons solides
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item">
            Savons liquides
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item">
            Savons ronds
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item">
          Beurres corporels
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item">
            Beurres à lèvres
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item">
            Cadeaux
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item menu-burger__item--about-us">
            Découvrir le projet Madjikarité
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item menu-burger__item--about-us">
            Nos productrices
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item menu-burger__item--about-us">
            Les vertus du karité
          </li>
        </Link>
        <Link to="/">
          <li className="menu-burger__item menu-burger__item--about-us">
            Processus de fabrication
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default MenuBurger;
