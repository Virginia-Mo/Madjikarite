import { useEffect, useState,useRef} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { fetchOrders } from 'src/actions/admin';
import { saveOrders } from "../../../actions/admin";
import axios from 'axios';
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
      <div className="backOffice__div">
        <h1 className="backOffice__h1"><strong>Bienvenue</strong>, Yanki ! </h1>
      <div className="deleteAside">
          <NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink>
          
        </div>
        <h2 className="backOffice__h2">Commandes</h2>
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
            <label htmlFor="filter">Filtrer par :</label>
            <select 
            name="filter"
            id=""
            onChange={(event) => setSortType(event.target.value)}>
              <option value="created_at">Date</option>
              <option value="id"> N° de la commande</option>
              <option value="final_price">Prix total</option>
            </select>
            </div>
           
             </form>
          </div>
          <div className="backOffice__formDiv">
          <table>

          <thead>

        <tr>
            {/* <th><input type='checkbox' onChange={handleChanges} className="backOffice__formDiv__box" /> 
            </th> */}
            <th>N° de la commande</th> 
            <th>Total</th>
             <th>Date</th>
             <th>Message</th>
        </tr>

</thead>
<tbody>
       { orders.map(order => (
      <tr
      key ={order.id}>
      {/* <td> <input type='checkbox'
      onChange={handleCheckbox}
      className="inputRefs"></input></td> */}
           
            <td>{order.id}</td>
            <td>{order.final_price}€</td>
            <td>{order.created_at}</td>
             <td>{order.message}</td>
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

