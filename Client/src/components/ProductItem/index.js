import PropTypes from 'prop-types';

import './style.scss';

function ProductItem({
  // eslint-disable-next-line camelcase
  image, nom, categorie, description_courte, Conditionnement, prix,
}) {
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={image} alt={nom} />
      </div>
      <div className="product-item__content">
        <h4>{nom}</h4>
        <p><span>Catégorie:</span>  {categorie}</p>
        <p><span>Description:</span></p>
        <p>{description_courte}</p>
        <p><span>Conditionnement:</span>  {Conditionnement}</p>
        <p><span>Prix:</span>  {prix} €</p>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  description_courte: PropTypes.string.isRequired,
  Conditionnement: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
};

export default ProductItem;
