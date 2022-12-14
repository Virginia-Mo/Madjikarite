import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React, {useRef} from 'react'
import { addItemToCart} from '../../actions/cart';
import {  MdAddShoppingCart } from "react-icons/md";
import './style.scss';

function ProductItem({
  // eslint-disable-next-line camelcase
  id, pictures, product_name, category_name, short_description, packaging, price,weight
}){
  const dispatch = useDispatch()
  const cartIcon = useRef()
  const slug = id;
  const image = pictures[0].url

  const addItem = (event) => {
    event.preventDefault()
    
    setTimeout(function() {
        cartIcon.current.classList.remove("animate__zoomIn");
        cartIcon.current.classList.add("animate__fadeOutUp")
    }, 200)

    const formData = {
    id: id,
    name : product_name,
    quantity: 1,
    price : parseInt(price),
    total : parseInt(price) * 1,
    image : image,
    packaging : packaging,
    weight : weight,
  }
  dispatch(addItemToCart(formData))
  setTimeout(function() {
    cartIcon.current.classList.remove("animate__fadeOutUp");
    cartIcon.current.classList.add("animate__zoomIn")
  }, 1000)

}

  return (
    <div className='product-item__div'>
    <Link to={`/product/${slug}`}>
      <div className="product-item"
      >
        <div className="product-item__image">
          <img src={image} alt={product_name} />
        </div>
        <div className="product-item__content">
          <h4>{product_name}</h4>
          <p><span>Catégorie:</span>  {category_name}</p>
          <p><span>Description:</span></p>
          <p>{short_description}</p>
          <p><span>Conditionnement:</span>  {packaging}</p>
          <p><span>Prix:</span>  {price} €</p>
        </div>
      </div>
    </Link>
    <button
      type="submit"
      className='product-item__button animate__animated'
      onClick={addItem}
      ref={cartIcon}
    > 
    <MdAddShoppingCart className='animate_animated animate__zoomIn'/>
   </button>
   </div>
  );
}

// ProductItem.propTypes = {
//   image: PropTypes.string.isRequired,
//   nom: PropTypes.string.isRequired,
//   categorie: PropTypes.string.isRequired,
//   description_courte: PropTypes.string.isRequired,
//   Conditionnement: PropTypes.string.isRequired,
//   prix: PropTypes.number.isRequired,
// };

export default ProductItem;
