//fonctionnalité codée sans redux suite problème d'accès au store en tant qu'admin

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import './style.scss';

import axios from "axios";

const API_BASE_URL = "https://madjikarite.onrender.com";

function productPageByAdmin () {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
    const token = localStorage.getItem('token');
        axios
          .get(`${API_BASE_URL}/admin/product${slug}`, { //appel API pour récupérer la route selon id
            headers: {
              Authorization: `bearer ${token}`
            },
          })
          .then((response) => {  
            console.log("REPONSE" + response.data);
            setProduct(response.data)
          })
          .catch((error) => console.log(error))
      }
    , [])
      console.log(product);

      const handleSubmit = (event) => {
      const token = localStorage.getItem('token');  
      event.preventDefault();
      console.log(event.target);
        axios
          .patch(`${API_BASE_URL}/admin/product${slug}`, {
          headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then((response) => {
          console.log(response);
      })
      .catch((error) => console.log(error));
  };
  
  
//   const [newProductByAdmin, setNewProductByAdmin] = useState([
//     {
//       name: '',
//       price: '',
//       short_description: '',
//       packaging: '',
//       category: '',
//       full_description: '',
//       ingredients: '',
//       stock: '',
//       weight: '',
//     },
//   ]);

//   const { name, price, short_description, packaging, category, full_description, ingredients, stock, weight } = newProductByAdmin;

  const token = localStorage.getItem('token');

  return (
    <div className="backOffice__container"> 
       <h2 className="customerAccount__title">Nouveau produit</h2>
       <div className="customerAccount__div">
        <NavBarAdmin />
      <div className="backOffice__mainContainer">

      <form className="backOffice__form" onSubmit={handleSubmit}>

      <div className="backOffice__formDetails">

        <div className="backOffice__formDetails--left">

        <div className="backOffice__form__input">
          <label htmlFor="name">Nom du produit</label>
          <input type="text" name="name" placeholder={product.product_name}/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="price">Prix</label>
          <input type="number" name="price" placeholder={product.price}/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="description">Description courte</label>
          <input type="text" name="short_description" placeholder={product.short_description}/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="weight">Poids</label>
          <input type="text" name="packaging" placeholder={product.packaging}/>
        </div>
        </div>

        <div className="backOffice__formDetail--middle">
        <div className="backOffice__form__input">
          <label htmlFor="category">Catégorie</label>
          <input type="text" name="category" placeholder={product.category_id}/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="image">Description complète</label>
          <input type="text" name="full_description" placeholder={product.full_description}/>
        </div>
        
        <div className="backOffice__form__input">
          <label htmlFor="image">Ingrédients</label>
          <input type="text" name="ingredients" placeholder={product.ingredients}/>
        </div>
        </div>

        <div className="backOffice__formDetails--right">

        <div className="backOffice__form__input">
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder={product.stock}/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="stock">Weight</label>
          <input type="number" name="weight" placeholder={product.weight}/>
        </div> 

        </div>
</div> 
     
       <button className="backOffice__form__button" type="submit"
         >Modifier</button>
 </form>
</div>

    </div>
    </div>
  );
}


export default productPageByAdmin;


