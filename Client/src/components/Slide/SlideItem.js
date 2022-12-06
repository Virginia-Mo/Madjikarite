import PropTypes from 'prop-types';

import './style.scss';

function SlideItem({
  nom, image, categorie, prix,
}) {
  return (
    <article className="SlideItem">
      <div className="SlideItem__imgContainer">
        <img src={image} alt={nom} className="SlideItem__img" />
      </div>
      <div className="SlideItem__contentDiv">
        <h4 className="SlideItem__title">{nom}</h4>
        <p className="SlideItem__price"><span>Catégorie:</span>  {categorie}</p>
        <p className="SlideItem__price"><span>Prix:</span>  {prix} €</p>
      </div>
    </article>
  );
}

SlideItem.propTypes = {
  nom: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
};
export default SlideItem;
