import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './menuBurger.scss'
function NavBarCustomer() {

  const menubar = useRef()
  const nav = useRef()
  const menubg = useRef()


  const menuOnClick = () => {
    menubar.current.classList.toggle("change");
     nav.current.classList.toggle("change");
    menubg.current.classList.toggle("change-bg");
   }
  return (
    <><div className="backOffice__menuContainer">
      <div className="deleteAside">
        <NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink>
        <NavLink to="/customeraccount/address"><p className="deleteAside__lien">Adresses</p></NavLink>
        <NavLink to="/customeraccount/deleteaccount"><p className="deleteAside__lien">Supprimer mon compte</p></NavLink>
      </div>

      <div id="menu">
        <div id="menu-bar" ref={menubar} onClick={menuOnClick}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav" ref={nav}>
          <ul>
            <li><NavLink to="/customeraccount"><p className="deleteAside__lienMobile">Informations du compte</p></NavLink></li>
            <li><NavLink to="/customeraccount/address"><p className="deleteAside__lienMobile">Adresse</p></NavLink> </li>
            <li><NavLink to="/customeraccount/deleteaccount"><p className="deleteAside__lienMobile">Supprimer mon compte</p></NavLink></li>
          </ul>
        </nav>
      </div>
    </div><div className="menu-bg" id="menu-bg" ref={menubg}></div></>
  );
}

export default NavBarCustomer;
