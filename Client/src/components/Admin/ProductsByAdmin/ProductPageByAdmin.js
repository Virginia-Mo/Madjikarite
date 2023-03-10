//fonctionnalité codée sans redux suite problème d'accès au store en tant qu'admin

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import './style.scss';

import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

function productPageByAdmin () {
    const { slug } = useParams();
    const form2 = useRef()
    const [product, setProduct] = useState([]);
    const messageProduct2 = useRef()
    const [messageOrder, setMessageOrder] = useState()

    useEffect(() => {
    const token = localStorage.getItem('token');
        axios
          .get(`${API_BASE_URL}/admin/product${slug}`, { //appel API pour récupérer la route selon id
            headers: {
              Authorization: `bearer ${token}`
            },
          })
          .then((response) => {  
            console.log("REPONSE" + response.data[0]);
            setProduct(response.data[0])
          })
          .catch((error) => console.log(error))
      }
    , [])

      const handleSubmit = (event) => {
      const token = localStorage.getItem('token');  
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
     const productData = {
        name: data.get("name"),
        price: data.get("price"),
        short_description: data.get("short_description"),
        packaging: data.get("packaging"),
        category_id: parseInt(data.get("category")),
        full_description: data.get("full_description"),
        ingredients: data.get("ingredients"),
        stock: parseInt(data.get("stock")),
        weight: data.get("weight"),
        picture_url: data.get("picture_url"),
      }

        console.log(typeof(productData.weight));

        axios
        .patch(`${API_BASE_URL}/admin/product${slug}`, {
          product_name: productData.name,
          short_description: productData.short_description,
          full_description: productData.full_description,
          ingredients: productData.ingredients,
          packaging: productData.packaging,
          weight:  productData.weight,
          price: productData.price,
          stock: productData.stock,
          category_id: productData.category_id,
          picture_url: productData.picture_url,
        },
        {
          headers: {
            Authorization: `bearer ${token}`
          },
        })
      .then((response) => {
          console.log(response);
          setMessageOrder("Le produit a bien été modifié")
          form2.current.style.display = "none",
          messageProduct2.current.style.removeProperty("display")
      })
      .catch((error) => {
        console.log(error)
        setMessageOrder(error.response.data.error)
      });
  };
  
  const handleDelete = (event) => {
    const token = localStorage.getItem('token');
    event.preventDefault();
    console.log(event.target);
      axios
      .delete(`${API_BASE_URL}/admin/product${slug}`, {
        headers: {
          Authorization: `bearer ${token}`
        },
      })
    .then((response) => {
        console.log(response);
        setMessageOrder(response.data.message)
        form2.current.style.display = "none",
        messageProduct2.current.style.removeProperty("display")
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
       <h2 className="customerAccount__title">Produit sélectionné</h2>
       <div className="customerAccount__div">
        <NavBarAdmin />
      <div className="backOffice__mainContainer" >

      <form className="backOffice__form backOffice__form2" action="POST"  onSubmit={handleSubmit} ref={form2}>

      <div className="backOffice__formDetails">

        <div className="backOffice__formDetails--left">

        <div className="backOffice__form__input" >
          <label htmlFor="name">Nom du produit</label>
        <input type="text" name="name"  placeholder={product.product_name} className="field__input" />
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="price">Prix</label>
          <input type="number" name="price" placeholder={product.price} className="field__input"/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="description">Description courte</label>
          <input type="text" name="short_description" placeholder={product.short_description} className="field__input" />
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="weight">Poids</label>
          <input type="text" name="packaging" placeholder={product.packaging} className="field__input"/>
        </div>
        </div>

        <div className="backOffice__formDetail--middle">
        <div className="backOffice__form__input">
          <label htmlFor="category">Catégorie</label>
          <select name="category" className="field__input">
            <option value="1">savons solides</option>
            <option value="2">savons liquides</option>
            <option value="3">beurres corporels</option>
            <option value="4">beurres à lèvres</option>
            <option value="5">beurre de karité pur non raffiné</option>
            <option value="6">coffrets</option>
            <option value="7">cartes cadeaux</option>
          </select>
        </div>
       


        <div className="backOffice__form__input">
          <label htmlFor="image">Description complète</label>
          <textarea type="text" name="full_description" cols="30" rows="10" placeholder={product.full_description} className="field__input"></textarea>
        </div>
        
        <div className="backOffice__form__input">
          <label htmlFor="image">Ingrédients</label>
          <input type="text" name="ingredients" placeholder={product.ingredients} className="field__input"/>
        </div>
        </div>

        <div className="backOffice__formDetails--right">

        <div className="backOffice__form__input">
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} className="field__input"/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="stock">Weight</label>
          <input type="number" name="weight" placeholder={product.weight} className="field__input" />
        </div> 
 
        <div className="backOffice__form__input">
          <label htmlFor="picture_url">Adresse URL de l'image</label>
          <textarea name="picture_url" id="" cols="30" rows="10" className="field__input">
          </textarea>
        </div>  

        </div>
</div> 
     <div>
       <button className="backOffice__button" type="submit"
         >Modifier</button>

       <button className="backOffice__button" type="button" onClick={handleDelete}
          >Supprimer</button>  </div>
 </form>
</div>

    </div>
   { messageOrder && (<div className="messageOrder animate__animated animate__bounceIn" ref={messageProduct2}>
      <p>{messageOrder}</p>
    </div>)} 
    </div>
    
  );
}


export default productPageByAdmin;


