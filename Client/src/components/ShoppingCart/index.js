import { useEffect } from 'react';
import { IoSadOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Slide from '../Slide';
import ShoppingLine from './ShoppingLine';
import { getFinalPrice,resetMessageButton,submitOrder } from '../../actions/cart';
import { getWeightQuantity } from "src/selectors/getCartQuantity";
import FieldAccount from '../CustomerAccount/FieldAccount';
import { resetMessageError } from '../../actions/user';
import './style.scss';
import 'animate.css';

function cart() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFinalPrice(totalPrice, shipping))
  })
  useEffect(() => {
    dispatch(resetMessageError())
  }, [])

  const messageError = useSelector((state)=> state.user.messageError)
  const messageButton = useSelector((state)=> state.cart.messageButton)
  const cart = useSelector((state)=> state.cart.cart)
  const totalPrice = useSelector((state)=> state.cart.totalPrice)
  const shipping = useSelector((state) => (
    getWeightQuantity()
  ));

  // Getting the final price with shipping included
  const finalPrice = shipping + totalPrice

  const handleSubmit = (event)=> {
    event.preventDefault();
    // Submit unabled with totalPrice = 0
    if(totalPrice <=0){
      console.log("No order");
      return
    }
    dispatch(submitOrder())

    dispatch(resetMessageButton())
     }; 
  
  
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
          <FieldAccount
                name="message"
                type="text"
                placeholder="Votre message ici"
                label="Une information à me transmettre ? N'hésitez pas !" />
        
        <div className="cart__total">
          <p>Total des produits: <span>{totalPrice} €</span></p>
          <p>Frais de port: <span>{shipping}€</span></p> 
          <p><strong>TOTAL</strong>: <span>{finalPrice} €</span></p>
        </div>
        {/* <div className="cart__coupon">
          <p>Carte cadeaux: <span>???</span></p>
        </div> */}
       
        <div className="cart__button">
          <button type="submit" className='cart__button--submit' onSubmit={handleSubmit}>{messageButton}</button>
        </div>
        { (messageError != " ") && (<div className="message animate__animated animate__zoomIn"><p>{messageError}</p></div>)}
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
