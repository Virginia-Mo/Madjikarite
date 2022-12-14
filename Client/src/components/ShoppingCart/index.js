import { IoSadOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../actions/cart';
import Slide from '../Slide';
import ShoppingLine from './ShoppingLine';
import { getWeightQuantity } from "src/selectors/getCartQuantity";
import './style.scss';
import { useEffect } from 'react';

function cart() {

  const dispatch = useDispatch()
  const cart = useSelector((state)=> state.cart.cart)
  const totalPrice = useSelector((state)=> state.cart.totalPrice)
const shipping = useSelector((state) => (
    getWeightQuantity()
  ));

  const handleSubmit = (event)=> {
    event.preventDefault();
 
    const form = event.target;
    const data = new FormData(form);
    const formData = {
      cart: cart,
      totalPrice : totalPrice,
      message: data.get("message")
  };
    console.log(formData)
    }
  
  
  return (
    <>
    <div className='cart__Container'>
      <section className="cart__items">
        <h2 className="cart__items--h2">Panier</h2>
        {cart.length === 0 && (
          <div>
          <p className='cart__items--p'>Pas d'article dans le panier.</p>
          <IoSadOutline className='cart__items--icon' />
          </div>
        )}
{/* If there's at list an item in the cart show : */}
        {cart.length > 0 && cart.map((item) => (
          <ShoppingLine 
          key={item.id}
          item={item} />
        ))}
      </section>
      <section className="cart__totalContainer">
        <h3 className="cart__totalContainer--h3">Total</h3>
        <form action=""
          className='cart__totalContainer__form'
          onSubmit={handleSubmit}>
          <label htmlFor="message">Une information à me transmettre ? N'hésitez pas !</label>
          <textarea
            name="message"
            placeholder='Votre message ici'
            className='cart__totalContainer__input'></textarea>
        
        <div className="cart__total">
          <p>Total des produits: <span>{totalPrice} €</span></p>
          <p>Frais de port: <span>{shipping}</span></p> 
          <p><strong>TOTAL</strong>: <span>{totalPrice} €</span></p>
        </div>
        <div className="cart__coupon">
          <p>Carte cadeaux: <span>???</span></p>
        </div>
        <div className="cart__button">
          <button type="button" className='cart__button--submit' >Calculer les frais de port</button>

        </div>
        <div className="cart__button">
          <button type="submit" className='cart__button--submit'>Valider la commande</button>
        </div>
</form>
      </section>
    </div>
    <section className="cart__slide">
    <h2 className='slideContainer__SlidePresentation'>Complétez votre panier...</h2>
       <Slide className="cart__slide--slide"/>  
      </section> 
      </>

  );
}

export default cart ;
