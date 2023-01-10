import axios from 'axios';
import { useEffect, useState,useRef} from "react"
import { Link} from "react-router-dom";
import { MdFilterAlt } from "react-icons/md";

const API_BASE_URL = process.env.REACT_APP_API_URL;

import './style.scss'
import 'animate.css';
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";

function ordersByAdmin() {
  // Redux is not working for the admin part so we decided to use the method useState.
   const [orders, setOrders] = useState([]);
   const [sortType1, setSortType1] = useState("");
   
    useEffect(() => {
      // Getting the orders through an API call at the first rendering of the page
      const token = localStorage.getItem('token');
      axios
        .get(`${API_BASE_URL}/admin/orders`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {  
          console.log("REPONSE OK" + response.data);
           setOrders(response.data)
        })
        .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
      const sortArray1 = type => {
        // Getting the type of the clicked item
        const types1 = {
          id: 'id',
          final_price: 'final_price',
          created_at: 'created_at',
        };
        const sortProperty1 = types1[type];
        // Making a new array with the sort method => the new array is sorted with the type chosen on click
        const sorted1 = [...orders].sort((p1, p2) => (p1[sortProperty1] < p2[sortProperty1]) ? 1 : (p1[sortProperty1] > p2[sortProperty1]) ? -1 : 0);;
        console.log(sorted1);
        setOrders(sorted1);
      };
      sortArray1(sortType1);
     
    }, [sortType1]);

const handleClick = (event) => {
  event.preventDefault();
const select = document.querySelector(".backOffice__filter--select")
select.classList.toggle("backOffice__filter--select--show")
}

  return (
  
    <div className='backOffice__container'>      
       <div className="backOffice__Div">
       <h2 className="customerAccount__title">Commandes</h2>
       </div>
      <div className="customerAccount__div">
   <NavBarAdmin />
 
       <div className="backOffice__mainContainer">
       
       <div className="backOffice__filter">
   <form action="" className="backOffice__filter__form backOffice__filter__form--orders">
      <div className="backOffice__top2 backOffice__top2--orders">
            <label htmlFor="filter" className="backOffice__filter--label">Filtrer par :</label>
            <button type="button" className="backOffice__filter--button"><MdFilterAlt onClick={handleClick} /></button>
            <select 
            name="filter"
            className="backOffice__filter--select"
            onChange={(event) => setSortType1(event.target.value)}>
              <option value="id">Id</option>
              <option value="created_at">Date</option>
              <option value="final_price">Prix total</option>
            </select>
            </div>
            </form>
          </div>
            
          <div className="backOffice__table">
          <table className="backOffice__table--table">

          <thead className="backOffice__table--thead">

        <tr>
            <th data-type="id" onClick={(event) => setSortType1(event.target.dataset.type)}>N° de la commande</th> 
            <th data-type="final_price" onClick={(event) => setSortType1(event.target.dataset.type)}>Total</th>
             <th data-type="created_at" onClick={(event) => setSortType1(event.target.dataset.type)}>Date</th>
             <th>Message</th>
        </tr>

  </thead>
  <tbody className="backOffice__table--tbody">
     { orders.map(order => (
      
      <tr key ={order.id}>
     
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
