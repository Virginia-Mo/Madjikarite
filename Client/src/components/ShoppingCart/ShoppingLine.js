import './style.scss';
import { useDispatch} from 'react-redux';
import { addItemToCart,minusItemFromCart, removeArticleFromCart } from '../../actions/cart';
import imageTest from 'src/assets/imgs/sheaHeader.jpg'
import { HiOutlineTrash } from "react-icons/hi2";

function ShoppingLine({item}) { 
  const dispatch = useDispatch()
  
  const handleChange = (price, id) => {

    const formData = {
      id: id,
      quantity: 1,
      price : parseInt(price),
      total : parseInt(price) * 1
    }
    dispatch(addItemToCart(formData))
  }
  const handleChangeMinus= (price, id) => {
    dispatch(minusItemFromCart(price,id))
  }
  const removeArticle= (id,total) => {
    dispatch(removeArticleFromCart(id,total))
  }
  console.log(item)
  return (

   <article className='cart__articles'>
   <div className="cart__articles--imageDiv">
     <img src={imageTest} alt={item.name} className="cart__articles--image"/>
   </div>
   <div className="cart__articlesDiv">
   <div className="cart__articles__details">
      <h2 className="cart__articles__details--h2">{item.name}</h2>
      
      {/* <p>Quantité : </p> */}
      <div className='cart__articles__button'>
      <button
      type='button'
      className='cart__articles__button--btn cart__articles__button--btnLeft'
      onClick={() => handleChange(item.price, item.id)}>+</button>
      <p className='cart__articles__button--quantity'>{item.quantity}</p>
      <button
      type='button'
      className='cart__articles__button--btn cart__articles__button--btnRight'
      onClick={() => handleChangeMinus(+item.price, item.id)}>-</button>
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
    
