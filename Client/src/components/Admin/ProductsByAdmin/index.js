//fonctionnalité codée sans redux suite problème d'accès au store en tant qu'admin
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../Search";

import './style.scss';
import './../OrdersByAdmin/style.scss'
import axios from "axios";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";


const API_BASE_URL = "https://madjikarite.onrender.com";

function ProductsByAdmin() {
  
  const [productsByAdmin, setProductsByAdmin] = useState([]);
  
  const [deleted, setDeleted] = useState(false);


  const token = localStorage.getItem('token');

  const handleDelete = () => {
    axios
      .delete(`${API_BASE_URL}/admin/products`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then((response) => {
        console.log(response);
        setDeleted(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheck = () => {
    setChecked(true);
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/admin/products`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then((response) => {
        console.log(response);
        setProductsByAdmin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deleted]);
  

  return (
    <div className="backOffice__container">
  
      <h2 className="customerAccount__title">Produits en vente</h2>
      <div className="customerAccount__div">
        <NavBarAdmin />
      <div className="backOffice__mainContainer">

      <div className="backOffice__top">

      <div className="backOffice__addProduct">
        <button className="backOffice__button" type="button">
          <Link to="/admin/new-product">Ajouter un produit</Link>
        </button>
      </div>
      <div className="backOffice__searchBar"><Search /></div>

      </div>
      
      <div className="backOffice__filter">
     
      <div className="backOffice__formDiv">
          <table className="backOffice__table--table">

          <thead className="backOffice__table--thead">

        <tr>
            <th>Id:</th> 
            <th>Nom du produit:</th>
            <th>Prix:</th>
            <th>Catégorie:</th>
            <th>Stock:</th>
        </tr>

</thead>
<tbody>
       { productsByAdmin.map(product => (
      <tr
      key ={product.id}>
      {/* <td> <input type='checkbox'
      onChange={handleCheckbox}
      className="inputRefs"></input></td> */}
           
            <td data-label="Id" className="backOffice__table--td"> 
              <Link to={`/admin/productPage/${product.id}`} > {product.id}   </Link> 
            </td>
            <td data-label="Nom du produit" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} > {product.product_name} </Link></td>
            <td data-label="Prix" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} > {product.price}€ </Link></td>
            <td data-label="Catégorie" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} > {product.product_category} </Link> </td>
            <td data-label="Stock" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} >  {product.stock}</Link></td>
        </tr>
    ))}
       
    </tbody>
</table>
 </div>

    </div>
    </div>
    </div>
    </div>
  );
}

export default ProductsByAdmin;
