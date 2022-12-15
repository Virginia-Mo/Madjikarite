import React, {useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { FaSquareFull, FaShoppingCart } from "react-icons/fa";

import { handleDescription, handleComposition }from '../../actions/products';
import { changeInputValue } from 'src/actions/user';
import { addItemToCart} from '../../actions/cart';
import {findProduct } from '../../selectors/singleProduct';
import ProductSlide from './ProductSlide'
import Slide from '../Slide';
import './style.scss';
import './styleButton.scss'
import 'animate.css';


function SingleProduct() {
  useEffect(() => {
    window.scroll(0, 0);
},[]);

  const {slug} = useParams()
const product = useSelector((state) => (
    findProduct(state.products.listProducts, slug)
  ));
  
  // Creating refs to add an animation on submit
  const buttonAnimation = useRef();
  const addToCart = useRef();
  const dispatch = useDispatch()
  const activeDescription = useSelector((state) => state.products.activeDescription)
  const activeComposition = useSelector((state) => state.products.activeComposition)


// Getting the value for the number input
  const value = useSelector((state) => state.user[name]);

  const handleChange = (name,event) => {
    dispatch(changeInputValue(name, event.target.value));
  };

  // handling the click to toggle the description and compositon display
  const handleActiveDescription = (event) =>{
    event.preventDefault();
    dispatch(handleDescription())
  }
  const handleActiveComposition = (event) =>{
    event.preventDefault();
    dispatch(handleComposition())
  }
//  Submit desired product and quantity 
  const submitItem = (event) => {
    event.preventDefault()
    // adding the animation through a css class
    buttonAnimation.current.classList.add("clicked")
    // getting back to the "add a product" text after the animation
    setTimeout(function() {
      buttonAnimation.current.classList.remove("clicked");
      addToCart.current.classList.add("unclicked")
    }, 3000)

    const form = event.target;
    const data = new FormData(form);
    const formData = {
    id: product.id,
    name : product.product_name,
    quantity: parseInt(data.get("quantity")),
    price : parseInt(product.price),
    total : product.price * parseInt(data.get("quantity")),
    image : product.pictures[0].url,
    packaging : product.packaging,
    weight: product.weight,
    totalWeight : product.weight * parseInt(data.get("quantity")),
  };
  console.log(formData);
    dispatch(addItemToCart(formData))
  }
 
  return (
    <>
    <div>
      <h2 className="mainTitle__h2">{product.product_name} <br />
        <span>Catégorie: {product.category_name}</span></h2>
      <section className="singleProductContainer">
        <article className="singleProduct__imgDiv">
           <ProductSlide product={product} /> 
        </article>
        <article className="singleProduct__descriptionDiv">
        <h2 className="singleProduct__h2">{product.product_name}</h2>
        <p className="singleProduct__formatPrice">{product.packaging}</p>
        <p className="singleProduct__formatPrice">{product.price} €</p>
          <p className="singleProduct__p">{product.short_description}</p>
          <form action="" className="singleProduct__form" onSubmit={submitItem}>
          <input
            name="quantity"
            type="number"
            aria-label="Quantité souhaitée"
            min="1"
            placeholder='1'
            className="singleProduct__input--number"
            value={value}
            defaultValue="1"
            onChange={() => handleChange(name, event)}
      />
          <button type='submit' className="cart-button" ref={buttonAnimation}> 
          <span className="add-to-cart" ref={addToCart}>Ajouter au panier</span> 
          <span className="added">Produit ajouté au panier</span> 
          <FaShoppingCart className='fa fa-shopping-cart'/> 
          <FaSquareFull className='fa fa-square'/>
           </button> 
</form>
          </article>
      </section>
      <section className="singleProduct__mainDescription"> 
      <div className="singleProduct__titles">
           <button 
           className={activeDescription ? "singleProduct__h2_description singleProduct__h2--active" : "singleProduct__h2_description"} 
           onClick={handleActiveDescription}>
           Description</button> 
           <button 
           className={activeComposition ? "singleProduct__h2_description singleProduct__h2--active" : "singleProduct__h2_description"} 
           onClick={handleActiveComposition}>Composition</button>
      </div>
  {/* Show description if activeDescription is true */}
           <div className="singleProduct__articlesDiv">
      { activeDescription && 
      <article className="singleProduct__description"> 
        <p className="singleProduct__p singleProduct__p--description">{product.short_description}</p>
        </article>}
  {/* Show composition if activeComposition is true */}
      { activeComposition && 
      <article className="singleProduct__composition">
        <p className="singleProduct__p singleProduct__p--description">{product.ingredients}</p>
        </article>}
        </div>
      </section>
      <section className="slideContainer">
      <h2 className='slideContainer__SlidePresentation'>Vous aimerez aussi...</h2>
       <Slide className="slideContainer__slide" />  
      </section> 

    </div></>
  );
}

export default SingleProduct;
