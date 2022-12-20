import './style.scss'
import axios from 'axios';
import { useParams } from 'react-router';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "./singleOrderByAdmin.scss"
import "./menuBurger.scss"
const API_BASE_URL = 'https://madjikarite.onrender.com';

function SingleOrderByAdmin() {

  const { slug } = useParams();
  const [singleOrder, setSingleOrder] = useState([])
  const [user,setUser] = useState([])
  const [details, setDetails] = useState([])
  const menubar = useRef()
  const nav = useRef()
  const menubg = useRef()

  useEffect(() => {
      const token = localStorage.getItem('token');
      axios
        .get(`${API_BASE_URL}/admin/order${slug}`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {  
          console.log("REPONSE" + response.data);
          setSingleOrder(response.data.cart)
          setUser(response.data.user)
          setDetails(response.data.order)
          
        })
        .catch((error) => console.log(error))
    }
  , [])
  const handleClick = () => {
    
      const token = localStorage.getItem('token');
    
      axios
        .delete(`${API_BASE_URL}/admin/order${slug}`, {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
        .then((response) => {
          alert(response.data.message);
          if (response.status === 200) {
            window.location.href = '/admin/orders';
          }
        
        })
        .catch((error) => {
          console.log(error)
        });
  }

  const menuOnClick = () => {
   menubar.current.classList.toggle("change");
    nav.current.classList.toggle("change");
   menubg.current.classList.toggle("change-bg");
  }
  return (
  <div className="backOffice__container">
    <div className="backOffice__Div">
       <h2 className="customerAccount__title">Commande sélectionnée</h2>
       </div>
      <div className="backOffice__div">
      <div className="backOffice__menuContainer">
      <div className="deleteAside">
      <NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink>
      <NavLink to="/admin/products"><p className="deleteAside__lien">Produits</p></NavLink> 
     <NavLink to="/admin/orders"><p className="deleteAside__lien">Commandes</p></NavLink>
     <NavLink to="/"><p className="deleteAside__lien">Compte Clients</p></NavLink>
        </div>
 
      <div id="menu">
  <div id="menu-bar" ref={menubar} onClick={menuOnClick}>
    <div id="bar1" className="bar"></div>
    <div id="bar2" className="bar"></div>
    <div id="bar3" className="bar"></div>
  </div>
  <nav className="nav" id="nav" ref={nav}>
    <ul>
   <li><NavLink to="/customeraccount"><p className="deleteAside__lien">Informations du compte</p></NavLink></li> 
    <li><NavLink to="/admin/products"><p className="deleteAside__lien">Produits</p></NavLink> </li>
   <li><NavLink to="/admin/orders"><p className="deleteAside__lien">Commandes</p></NavLink></li> 
    <li><NavLink to="/"><p className="deleteAside__lien">Compte Clients</p></NavLink></li>
    </ul>
  </nav> 
</div>
</div>
<div className="menu-bg" id="menu-bg" ref={menubg}></div>
 

         <div className="backOffice__mainContainer">
<div className="backOffice__singleproduct">
  <section className="singleOrder__order">
    <p><span className='singleProduct--span'>Date de la commande :</span> {details.order_date}  </p>
    <div className="singleProduct--div">
    <div className="backOffice__table">
   <table className="backOffice__table--table"> 
   <thead className="backOffice__table--thead">
     <tr>
       <th>Produits commandés</th>
       <th>Quantité</th>
       <th>Packaging</th>
     </tr>
   </thead>
   <tbody className="backOffice__table--tbody">
    { singleOrder.map((item) =>
      <tr
      key ={item.id} >
      <td data-label="Produits commandés" className="backOffice__table--td">         
      {item.name}
      </td>
      <td data-label="Quantités" className="backOffice__table--td">{item.quantity}</td>
      <td data-label="Packaging" className="backOffice__table--td">{item.packaging}</td>
         </tr>  
     )}
   </tbody>
   </table>
</div>
</div>
<p><span className='singleProduct--span'>Total de la commande :</span> {details.final_price}€</p>

  </section>
  <section className="singleOrder__user">
  <p><span className='singleProduct--span'>Informations client :</span>   </p>
 
    <ul>
  <li className='singleProduct__array--li'><span className='singleProduct--span'> Nom : </span>{user.last_name} </li>
  <li className='singleProduct__array--li'><span className='singleProduct--span'> Prénom :</span> {user.first_name} </li>
  <li className='singleProduct__array--li'><span className='singleProduct--span'> Email :</span>{user.email} </li>
  <li className='singleProduct__array--li'><span className='singleProduct--span'> Adresse :</span> 
  <ol>
  <li>{user.address}</li>
  <li>{user.zip_code} / {user.city}</li>
  <li>{user.country}</li>
  </ol>
   </li>
   </ul>
   <p className='singleProduct--span'>Message:</p> <p>{details.message}</p>
  </section>

      </div> 
      <div className="backOffice__singleproduct--buttonDiv">
      <button type='button' className='backOffice__singleproduct--button' onClick={handleClick}>Supprimer la commande</button>
      </div>
  </div> 
  </div>
  </div>
  )
  ;
}

export default SingleOrderByAdmin;
