//fonctionnalité codée sans redux suite problème d'accès au store en tant qu'admin

import React, { useEffect, useState, useRef} from "react";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { Link } from "react-router-dom";
import 'animate.css';
import './style.scss';

import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

function newProductByAdmin () {
  const form = useRef()
  const messageProduct = useRef()
  const [messageOrder, setMessageOrder] = useState()
  const [newProductByAdmin, setNewProductByAdmin] = useState([
    {
      name: '',
      price: '',
      short_description: '',
      packaging: '',
      category: '',
      full_description: '',
      ingredients: '',
      stock: '',
      weight: '',
    },
  ]);

  const { name, price, short_description, packaging, category, full_description, ingredients, stock, weight } = newProductByAdmin;

  const token = localStorage.getItem('token');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;
    const data = new FormData(form);
   const product = {
      name: data.get("name"),
      price: parseInt(data.get("price")),
      short_description: data.get("short_description"),
      packaging: data.get("packaging"),
      category_id: parseInt(data.get("category")),
      full_description: data.get("full_description"),
      ingredients: data.get("ingredients"),
      stock: parseInt(data.get("stock")),
      weight: parseInt(data.get("weight")),
      picture_name: data.get("picture_name"),
      picture_url: data.get("picture_url"),

    }
   console.log(product);
    axios.post(`${API_BASE_URL}/admin/new-product`, {
      name: product.name,
      price: product.price,
      short_description: product.short_description,
      packaging: product.packaging,
      category_id: product.category_id,
      full_description: product.full_description,
      ingredients: product.ingredients,
      stock: product.stock,
      weight: product.weight,
      picture_url: product.picture_url
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setMessageOrder(response.data.message)
        form.style.display = "none",
        messageProduct.style.removeProperty("display")
      })
      .catch((error) => {
        console.log(error);
        setMessageOrder(error.response.data.error)
      });
  };

  return (
    <div className="backOffice__container">

      <h2 className="customerAccount__title customerAccount__title--admin">Nouveau produit</h2>
      
      <div className="customerAccount__div">
        <NavBarAdmin />
      <div className="backOffice__mainContainer" >

      <form className="backOffice__form" action="POST"  onSubmit={handleSubmit} ref={form}>

        <div className="backOffice__formDetails">

        <div className="backOffice__formDetails--left">

        <div className="backOffice__form__input">
          <label htmlFor="name">Nom du produit</label>
          <input type="text" name="name" value={name} className="field__input"/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="price">Prix</label>
          <input type="text" name="price" value={price} className="field__input"/>
        </div>

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
        </div>

        <div className="backOffice__formDetails--middle">
        <div className="backOffice__form__input">
          <label htmlFor="description">Description courte</label>
          <input type="text" name="short_description" value={short_description} className="field__input"/>
        </div>
      
        <div className="backOffice__form__input">
          <label htmlFor="image">Description complète</label>
          <textarea type="text" name="full_description" value={full_description} className="field__input"/>
        </div>
        
        <div className="backOffice__form__input">
          <label htmlFor="image">Ingrédients</label>
          <input type="text" name="ingredients" value={ingredients} className="field__input"/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="weight">Poids</label>
          <input type="text" name="packaging" value={packaging} className="field__input"/>
        </div>
        </div>

        <div className="backOffice__formDetails--right">
        <div className="backOffice__form__input">
          <label htmlFor="stock">Stock</label>
          <input type="text" name="stock" value={stock} className="field__input"/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="stock">Weight</label>
          <input type="text" name="weight" value={weight} className="field__input"/>
        </div>

        <div className="backOffice__form__input">
          <label htmlFor="picture_url">Adresse URL de l'image</label>
          <textarea name="picture_url" id="" cols="30" rows="10">
          </textarea>
        </div>  
           </div> </div>
        <button className="backOffice__button" type="submit"
        >Ajouter un produit</button>

     
       
      </form>
      </div>
      </div> 
    { messageOrder && (<div className="messageOrder animate__animated animate__bounceIn" ref={messageProduct}>
      <p>{messageOrder}</p>
    </div>)} 
    </div>


  );
}

export default newProductByAdmin;



