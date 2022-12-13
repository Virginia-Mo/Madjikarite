import PropTypes from 'prop-types';
import imageTest from 'src/assets/imgs/sheaCream.jpeg'
import { Link } from 'react-router-dom';
import './style.scss';

function SlideItem({
  id, name, image, category, price,
}) {
  const slug = id;
  return (
    <Link to={`/product/${slug}`}>
    <article className="SlideItem">
      <div className="SlideItem__imgContainer">
        <img src={imageTest} alt={name} className="SlideItem__img" />
      </div>
      <div className="SlideItem__contentDiv">
        <h4 className="SlideItem__title">{name}</h4>
        <p className="SlideItem__price"><span>Catégorie:</span>  {category}</p>
        <p className="SlideItem__price"><span>Prix:</span>  {price} €</p>
      </div>
    </article>
    </Link>
  );
}

// SlideItem.propTypes = {
//   nom: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   categorie: PropTypes.string.isRequired,
//   prix: PropTypes.number.isRequired,
// };
export default SlideItem;
