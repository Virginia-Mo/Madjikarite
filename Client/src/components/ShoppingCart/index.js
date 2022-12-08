import { useSelector } from 'react-redux';
import './style.scss';

function cart() {
  const cart = useSelector((state)=> state.cart.cart)
  return (
    <>
    <div >
    {cart.length === 0 && (
      <p>Pas d'article dans le panier.</p>
    )}
      {cart.length > 0 && cart.map((item) => (
        <>
        <p>{item.name}</p>
        <p>{item.price} €</p>
        <p>{item.quantity}</p>
        </>
      ))}
    </div>
   </>
  );
}

export default cart ;
