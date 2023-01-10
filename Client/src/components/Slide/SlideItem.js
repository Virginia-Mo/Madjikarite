import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

function SlideItem({
  id, product_name, pictures, category_name, price,
}) {
  const slug = id;
  const image = pictures[0].url
  return (
    <Link to={`/product/${slug}`}>
    <article className="SlideItem">
      <div className="SlideItem__imgContainer">
        <img src={image} alt={product_name} className="SlideItem__img" />
      </div>
      <div className="SlideItem__contentDiv">
        <h4 className="SlideItem__title">{product_name}</h4>
        <p className="SlideItem__price"><span>Catégorie:</span>  {category_name}</p>
        <p className="SlideItem__price"><span>Prix:</span>  {price} €</p>
      </div>
    </article>
    </Link>
  );
}

SlideItem.propTypes = {
  id: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
  category_name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default SlideItem;
