import React, {useRef} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { FaSquareFull, FaShoppingCart } from "react-icons/fa";

import { handleDescription, handleComposition }from '../../actions/products';
import { changeInputValue } from 'src/actions/user';
import { addItemToCart, addAnimation } from '../../actions/cart';
import ProductSlide from './ProductSlide'
import Slide from '../Slide';
import data from "src/Data/data"
import './style.scss';
import './styleButton.scss'

function SingleProduct() {
  const buttonAnimation = useRef();
  const addToCart = useRef();
  const dispatch = useDispatch()
  const product = data.test
  const activeDescription = useSelector((state) => state.products.activeDescription)
  const activeComposition = useSelector((state) => state.products.activeComposition)
 
// Getting the value for the number input
  const value = useSelector((state) => state.user[name]);

  const handleChange = (event) => {
    dispatch(changeInputValue(name, event.target.value));
  };

  // handling the click to toggle the description and compositon display
  const handleActiveDescription = (event) =>{
    event.preventDefault();
    console.log("click")
    dispatch(handleDescription())
  }
  const handleActiveComposition = (event) =>{
    event.preventDefault();
    console.log("click")
    dispatch(handleComposition())
  }
//  Submit desired product and quantity 
  const submitItem = (event) => {
    event.preventDefault()
    buttonAnimation.current.classList.add("clicked")
    setTimeout(function() {
      buttonAnimation.current.classList.remove("clicked");
      addToCart.current.classList.add("unclicked")
    }, 3000)

    const form = event.target;
    const data = new FormData(form);
    const formData = {
    id: product.id,
    name : product.nom,
    item: product.nom,
    quantity: parseInt(data.get("quantity")),
    price : product.prix
  };
    dispatch(addItemToCart(formData))
  }
 
  return (
    <>
    <div>
      <h2 className="mainTitle__h2">{product.nom} <br />
        <span>Catégorie: {product.categorie}</span></h2>
      <section className="singleProductContainer">
        <article className="singleProduct__imgDiv">
          <ProductSlide product={product} />
        </article>
        <article className="singleProduct__descriptionDiv">
        <h2 className="singleProduct__h2">{product.nom}</h2>
        <p className="singleProduct__formatPrice">{product.Conditionnement}</p>
        <p className="singleProduct__formatPrice">{product.prix} €</p>
          <p className="singleProduct__p">{product.description_courte}</p>
          <form action="" className="singleProduct__form" onSubmit={submitItem}>
          <input
            name="quantity"
            type="number"
            min="1"
            placeholder='1'
            className="singleProduct__input--number"
            value={value}
            onChange={handleChange}
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
        <p className="singleProduct__p singleProduct__p--description">{product.description_complete}</p>
        </article>}
  {/* Show composition if activeComposition is true */}
      { activeComposition && 
      <article className="singleProduct__composition">
        <p className="singleProduct__p singleProduct__p--description">{product.composition}</p>
        </article>}
        </div>
      </section>
      <section className="slideContainer">
      <h2 className='slideContainer__SlidePresentation'>Vous aimerez aussi...</h2>
       <Slide />  
      </section> 

    </div></>
  );
}

export default SingleProduct;
