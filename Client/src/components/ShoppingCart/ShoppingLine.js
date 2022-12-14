import './style.scss';
import { useDispatch} from 'react-redux';
import { addItemToCart,minusItemFromCart, removeArticleFromCart } from '../../actions/cart';
import { HiOutlineTrash } from "react-icons/hi2";

function ShoppingLine({item}) { 
  const dispatch = useDispatch()
// const image = item.pictures[0].url

const formData = {
  id: item.id,
  quantity: 1,
  price : parseInt(item.price),
  total : parseInt(item.price) * 1,
  packaging : item.packaging,
  weight: item.weight,
  totalWeight : item.weight * 1
}

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
 <div className="cart__articles--imageDiv">
     <img src={item.image} alt={item.name} className="cart__articles--image"/>
   </div>   
   <div className="cart__articlesDiv">
   <div className="cart__articles__details">
      <h2 className="cart__articles__details--h2">{item.name}</h2>
      
      <div className='cart__articles__button'>
      <div className='cart__articles__button--hover'>
      <button
      type='button'
      className='cart__articles__button--btn cart__articles__button--btnLeft'
      onClick={handleChange}>+</button></div>
      
      <p className='cart__articles__button--quantity'>{item.quantity}</p>
      <button
      type='button'
      className='cart__articles__button--btn cart__articles__button--btnRight'
      onClick={handleChangeMinus}>-</button>
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
    
