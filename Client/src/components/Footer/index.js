import { RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';
import { MdContactMail } from "react-icons/md";

import './style.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">

        <div className="footer__contact">
          <h3>CONTACT</h3>
            <Link to="/contact">
              <MdContactMail className="footer__contact-icon"/>
            </Link>
        </div>
            {/* <p>Adresse postale :</p>
            <p>Madjikarité</p>
            <p>363 avenue des anciens combattants</p>
            <p>62232 Fouquiéres les Béthune</p> */}

        <div className="footer__social-media">

          <h3>SUIVEZ-NOUS</h3>
          <div className="footer__social-media-icons">
          <a href="https://www.facebook.com/Madjikarite/">
            <RiFacebookCircleFill className="footer__social-media-icon" />
          </a>
          <Link to="">
            <RiTwitterFill className="footer__social-media-icon" />
          </Link>
          </div>

        </div>

      </div>

      <div className="footer__bottom"></div>
        <p className="footer__legal">
          <Link to="/terms">Mentions légales  </Link>|  © 2022 Madjikarité
        </p>
      <div className="footer__bottom"></div>
      
    </footer>
  );
}

export default Footer;
