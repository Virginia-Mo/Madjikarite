//fonctionnalité codée sans redux suite problème d'accès au store en tant qu'admin
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { MdFilterAlt } from "react-icons/md";
import './style.scss';
import './../OrdersByAdmin/style.scss'
import axios from "axios";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";


const API_BASE_URL = process.env.REACT_APP_API_URL;

function ProductsByAdmin() {
  const [productsByAdmin, setProductsByAdmin] = useState([]);
  
  const [deleted, setDeleted] = useState(false);

  const [sortType, setSortType] = useState("");
  const token = localStorage.getItem('token');

   useEffect(() => {
      console.log(sortType);
      const sortArray = type => {
        const types = {
          id: 'id',
          product_name: 'product_name',
          price: 'price',
          category_name: 'category_name',
          stock: 'stock',
        };
        const sortProperty = types[type];
    // Making a new array with the sort method => the new array is sorted with the type chosen on click
        const sorted = [...productsByAdmin].sort((p1, p2) => (p1[sortProperty] < p2[sortProperty]) ? 1 : (p1[sortProperty] > p2[sortProperty]) ? -1 : 0);
        setProductsByAdmin(sorted);
      };
  
      sortArray(sortType);
    }, [sortType]);


    const handleClick = (event) => {
      event.preventDefault();
    const select = document.querySelector(".backOffice__filter--select")
    select.classList.toggle("backOffice__filter--select--show")
    }    

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
   <div className="backOffice__filter">
   <form action="" className="backOffice__filter__form backOffice__filter__form--products">
  <div className="backOffice__top">
      <div className="backOffice__addProduct">
        <button className="backOffice__button backOffice__button--add" type="button">
          <Link to="/admin/new-product" className="backOffice__button--link"> 
          <span className="backOffice__button--add--Plus"><AiOutlinePlus /></span>  Ajouter un produit</Link>
        </button>

      </div>
      </div>
   
      <div className="backOffice__top2 backOffice__top2--orders">
            <label htmlFor="filter" className="backOffice__filter--label">Filtrer par :</label>
            <button type="button" className="backOffice__filter--button"><MdFilterAlt onClick={handleClick} /></button>
            <select 
            name="filter"
            className="backOffice__filter--select"
            onChange={(event) => setSortType(event.target.value)}>
              <option value="id">Id</option>
              <option value="product_name">Nom du produit</option>
              <option value="price">Prix</option>
              <option value="category_name">Catégorie</option>
              <option value="stock">Stock</option>
            </select>
            </div>

            </form>
          </div>


      <div className="backOffice__formDiv">
          <table className="backOffice__table--table">

          <thead className="backOffice__table--thead">

        <tr>
            <th data-type="id" onClick={(event) => setSortType(event.target.dataset.type)}>Id:</th> 
            <th data-type="product_name" onClick={(event) => setSortType(event.target.dataset.type)}>Nom du produit:</th>
            <th data-type="price" onClick={(event) => setSortType(event.target.dataset.type)}>Prix:</th>
            <th data-type="category_name" onClick={(event) => setSortType(event.target.dataset.type)}>Catégorie:</th>
            <th data-type="stock" onClick={(event) => setSortType(event.target.dataset.type)}>Stock:</th>
        </tr>

</thead>
<tbody>
       { productsByAdmin.map(product => (
      <tr
      key ={product.id}>
            <td data-label="Id" className="backOffice__table--td"> 
              <Link to={`/admin/productPage/${product.id}`} > {product.id}   </Link> 
            </td>
            <td data-label="Nom du produit" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} > {product.product_name} </Link></td>
            <td data-label="Prix" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} > {product.price}€ </Link></td>
            <td data-label="Catégorie" className="backOffice__table--td">
            <Link to={`/admin/productPage/${product.id}`} > {product.category_name} </Link> </td>
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
    
  );
}

export default ProductsByAdmin;
