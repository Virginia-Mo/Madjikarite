import { RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';
import { MdContactMail } from "react-icons/md";

import './style.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact-container">
        <div className="footer__contact">
          <MdContactMail className="footer__contact-icon"/>
          <div className="footer__contact-form">
            <h3>CONTACT</h3>
            <p>
              <Link to="/contact">Accéder au formulaire de contact</Link>
            </p>
          </div>
        </div>
        <div className="footer__adress">
          <p>Adresse postale :</p>
          <p>Madjikarité</p>
          <p>363 avenue des anciens combattants</p>
          <p>62232 Fouquiéres les Béthune</p>
        </div>
      </div>
        <p className="footer__legal">
          <a href="">Mentions légales |  </a> © 2022 Madjikarité
        </p>
      <div className="footer__social-media">
        <h3>SUIVEZ-NOUS</h3>
        <div className="footer__social-media-icons">
          <RiFacebookCircleFill className="footer__social-media-icon" />
          <RiTwitterFill className="footer__social-media-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
