import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../actions/cart';
import Slide from '../Slide';
import ShoppingLine from './ShoppingLine';

import './style.scss';

function cart() {
  
  const dispatch = useDispatch()
  const cart = useSelector((state)=> state.cart.cart)
  const totalPrice = useSelector((state)=> state.cart.totalPrice)

  const handleChange = (price, id) => {

    const formData = {
      id: id,
      quantity: 1,
      price : parseInt(price),
      total : parseInt(price) * 1
    }
    dispatch(addItemToCart(formData))
  }

  


  const handleSubmit = (event)=> {
    event.preventDefault();
    for (item in cart){
  //     const form = event.target;
  //   const data = new FormData(form);
  //   const formData = {
  //     cart: cart,
  //   message: data.get("message")
  // };
  //   
      
    console.log(item)
    }
  
  }
  return (
    <><div className='cart__Container'>
      <section className="cart__items">
        <h2 className="cart__items--h2">Panier</h2>
        {cart.length === 0 && (
          <p>Pas d'article dans le panier.</p>
        )}

        {cart.length > 0 && cart.map((item) => (

          <ShoppingLine item={item} />
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
          <p>Frais de port: <span>En cours...</span></p>
          <p><strong>TOTAL</strong>: <span>{totalPrice} €</span></p>
        </div>
        <div className="cart__coupon">
          <p>Carte cadeaux: <span>???</span></p>
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
