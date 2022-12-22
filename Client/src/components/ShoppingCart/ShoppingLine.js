import './style.scss';
import { useDispatch, useSelector} from 'react-redux';
import { addItemToCart,minusItemFromCart, removeArticleFromCart } from '../../actions/cart';
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ShoppingLine({item}) { 
  const dispatch = useDispatch()
  const slug = item.id;
  const cart = useSelector((state) => state.cart.cart)
useEffect(()=> {
  for (item of cart){
  if (item.quantity <= 0){
   console.log("0quantity");
   dispatch(removeArticleFromCart(item.id,item.total))
  }
}
},[cart])

const formData = {
  id: item.id,
  quantity: 1,
  price : parseInt(item.price),
  total : parseInt(item.price) * 1,
  packaging : item.packaging,
  weight: parseInt(item.weight),
  totalWeight : item.weight * 1
}
console.log(item.price+ "et" + formData.total);
  const handleChange = () => {
    dispatch(addItemToCart(formData))
  }

  const handleChangeMinus= () => {
     dispatch(minusItemFromCart(formData))
  }

  const removeArticle= (id,total) => {
    dispatch(removeArticleFromCart(id,total))
  }

  return (
    <article className='cart__articles'>
    <Link to={`/product/${slug}`}>
 <div className="cart__articles--imageDiv">
     <img src={item.image} alt={item.name} className="cart__articles--image"/>
   </div>   
   </Link>
   <div className="cart__articlesDiv">
   <div className="cart__articles__details">
      <h2 className="cart__articles__details--h2">{item.name}</h2>
      
      <div className='cart__articles__button'>
      
      <div className='cart__articles__button--hover'>
      <button
      type='button'
      className='cart__articles__button--btn cart__articles__button--btnLeft'
      onClick={handleChangeMinus}>-</button></div>
     <p className='cart__articles__button--quantity'>{item.quantity}</p> 
      
      <button
      type='button'
      className='cart__articles__button--btn cart__articles__button--btnRight'
      onClick={handleChange}>+</button>
      </div>
      </div>
     
      <div className="cart__articles__price">
      <HiOutlineTrash
      className='cart__articles__icon'
        onClick={()=> removeArticle(item.id, item.total)}
      />
      <p>{item.total} €</p>
      </div>
       </div>
  </article>
     
        );
   }

 export default ShoppingLine;
    
