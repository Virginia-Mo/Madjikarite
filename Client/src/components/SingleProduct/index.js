import { useSelector } from 'react-redux';
import ProductSlide from './ProductSlide'
import Header from '../Header';
import NavBar from '../NavBar';
import Slide from '../Slide';
import Footer from '../Footer';
import React from 'react'
import './style.scss';

function SingleProduct() {
  const product = useSelector((state) => state.products.listProducts)[0]
  return (
    <>
    <Header />
    <NavBar />
    <div>
      <h1 className="mainTitle__h1">{product.nom} <br />
        <span>Catégorie: {product.categorie}</span></h1>
      <section className="singleProductContainer">
        <article className="singleProduct__imgDiv">
          <ProductSlide product={product} />
        </article>
        <article className="singleProduct__descriptionDiv">
        <h2 className="singleProduct__h2">{product.nom}</h2>
        <p className="singleProduct__formatPrice">{product.Conditionnement}</p>
        <p className="singleProduct__formatPrice">{product.prix} €</p>
          <p className="singleProduct__p">{product.description_courte}</p>
          <form action="" className="singleProduct__form">
        <input type="number" name="number" className='singleProduct__input' min="1" />
        <button type='button' className='singleProduct__button'>Ajouter au panier</button>
          </form>
          </article>
      </section>
      <section className="singleProduct__mainDescription">
      <h3 className="singleProduct__h3">Description / Informations Cmplémentaires</h3>
        <p className="singleProduct__p">{product.description_complete}</p>
      </section>
      <section className="slideContainer">
      <h2 className='slideContainer__SlidePresentation'>Vous aimerez aussi...</h2>
      <Slide />
      </section>
      <Footer />
    </div></>
  );
}

export default SingleProduct;
