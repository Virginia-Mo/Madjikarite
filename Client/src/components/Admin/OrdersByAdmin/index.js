import { useEffect, useState,useRef} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link} from "react-router-dom";
import { fetchOrders } from 'src/actions/admin';
import { saveOrders } from "../../../actions/admin";
import axios from 'axios';
import { MdFilterAlt } from "react-icons/md";

const API_BASE_URL = 'https://madjikarite.onrender.com';

import './style.scss'
import 'animate.css';

function ordersByAdmin() {
  // const orders = useSelector((state)=> state.admin.listOrders)
//  const dispatch = useDispatch()
   const [orders, setOrders] = useState([]);
   const [sortType, setSortType] = useState("");
   
    useEffect(() => {
      const token = localStorage.getItem('token');
      axios
        .get(`${API_BASE_URL}/admin/orders`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {  
          console.log("REPONSE OK" + response.data);
          //  dispatch(saveOrders(response.data));
           setOrders(response.data)
        })
        .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
      console.log(sortType);
      const sortArray = type => {
        const types = {
          final_price: 'final_price',
          created_at: 'created_at',
          id: 'id',
        };
        const sortProperty = types[type];
        console.log(sortProperty);
        const sorted = [...orders].sort((p1, p2) => (p1[sortProperty] < p2[sortProperty]) ? 1 : (p1[sortProperty] > p2[sortProperty]) ? -1 : 0);;
        setOrders(sorted);
      };
  
      sortArray(sortType);
    }, [sortType]);

const handleClick = (event) => {
  event.preventDefault();
const select = document.querySelector(".backOffice__filter--select")
select.classList.toggle("backOffice__filter--select--show")

}

// const [count,setCount]= useState(0)
//     const handleCheckbox =(event) =>{
//     console.log(event.target.checked);
//     if (event.target.checked){
//     setCount(count +1)
//     } else {
//       setCount(count-1)
//     }
//     }

//     const handleChanges = (event) => {
//       const test = document.querySelectorAll(".inputRefs")
//       if (event.target.checked) {
//         test.forEach(function (element){
//           element.checked = true;
//           setCount(orders.length)
//          return
//         })
//       } else {
//         test.forEach(function (element){
//           element.checked = false;
//           setCount(0)
//          return 
//       })}
//     }


  return (
  
    <div className='backOffice__container'>      
       <div className="backOffice__Div">
       <h2 className="customerAccount__title">Commandes</h2>
       </div>
      <div className="backOffice__div">
       
      <div className="deleteAside">
      <NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink>
      <NavLink to="/admin/products"><p className="deleteAside__lien">Produits</p></NavLink> 
     <NavLink to="/admin/orders"><p className="deleteAside__lien">Commandes</p></NavLink>
     <NavLink to="/"><p className="deleteAside__lien">Compte Clients</p></NavLink>
        </div>
 
       <div className="backOffice__mainContainer">
          <div className="backOffice__filter">
            <form action="" className="backOffice__filter__form">
            <div className="backOffice__top">
             {/* {(count === 1) && 
             (<>
             <span>{count} élément sélectionné</span>
             <button type="button"> 
             <HiOutlineTrash
                  className='cart__articles__icon'
                  onClick={deleteOrder} />
                  Supprimer</button>
                  </>)}
            {(count > 1) && (<>
             <span>{count} éléments sélectionnés</span>
             <button type="button"> 
             <HiOutlineTrash
                  className='cart__articles__icon' />
                  Supprimer</button>
                  </>)} */}
            </div>
            <div className="backOffice__top2">
            <label htmlFor="filter" className="backOffice__filter--label">Filtrer par :</label>
            <button type="button" className="backOffice__filter--button"><MdFilterAlt onClick={handleClick} /></button>
            <select 
            name="filter"
            className="backOffice__filter--select"
            onChange={(event) => setSortType(event.target.value)}>
              <option value="created_at">Date</option>
              <option value="id"> N° de la commande</option>
              <option value="final_price">Prix total</option>
            </select>
            </div>
           
             </form>
          </div>
          <div className="backOffice__table">
          <table className="backOffice__table--table">

          <thead className="backOffice__table--thead">

        <tr>
            {/* <th><input type='checkbox' onChange={handleChanges} className="backOffice__formDiv__box" /> 
            </th> */}
            <th>N° de la commande</th> 
            <th>Total</th>
             <th>Date</th>
             <th>Message</th>
        </tr>

</thead>
<tbody className="backOffice__table--tbody">
     { orders.map(order => (
      
      <tr
      key ={order.id}>
     
      {/* <td> <input type='checkbox'
      onChange={handleCheckbox}
      className="inputRefs"></input></td> */}
      <td data-label="N° de commande" className="backOffice__table--td">         
        <Link to={`/admin/order/${order.id}`} > {order.id}   </Link> 
        </td>
      
      <td data-label="Total" className="backOffice__table--td">
        <Link to={`/admin/order/${order.id}`} > {order.final_price}€ </Link> </td>
      <td data-label="Date" className="backOffice__table--td">
        <Link to={`/admin/order/${order.id}`} > {order.created_at} </Link> </td>
      <td data-label="Message" className="backOffice__table--td">
      <Link to={`/admin/order/${order.id}`} > 
      {(order.message !== "") && (<span>{order.message}</span>)}
             {(order.message == "") && (<span>-</span>)}
       </Link> </td>
          
         </tr>  
     
    ))}
       
    </tbody>
</table>
 </div>
        </div>
      </div>  
    </div>
   );
}

export default ordersByAdmin;

