import './style.scss';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
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
              <a href="/" className="nav-bar__under-link">Découvrir le projet Madjikarité</a>
            </li>
            <li className="nav-bar__under-item">
              <a href="/" className="nav-bar__under-link">Nos productrices</a>
            </li>
            <li className="nav-bar__under-item">
              <a href="/" className="nav-bar__under-link">Les vertus du karité</a>
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
