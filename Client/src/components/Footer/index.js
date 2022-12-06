import { RiFacebookCircleFill, RiTwitterFill } from 'react-icons/ri';

import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact-container">
        <div className="footer__contact">
          <h3>CONTACT</h3>
          <p>Une question sur nos produits ?</p>
          <p>Vous souhaitez savoir où en est votre commade ?</p>
          <p>N'hésitez à nous contacter</p>
          <p>
            <a href="">Accéder au formulaire de contact</a>
          </p>
        </div>
        <div className="footer__adress">
          <p>Adresse postale :</p>
          <p>Madjikarité</p>
          <p>363 avenue des anciens combattants</p>
          <p>62232 Fouquiéres les Béthune</p>
        </div>
      </div>
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
