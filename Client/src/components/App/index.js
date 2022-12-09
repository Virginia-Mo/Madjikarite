// == Import
import Header from 'src/components/Header';
import NavBar from '../NavBar';
import Footer from '../Footer';


import { Route, Routes } from 'react-router-dom';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import CustomerAdress from '../CustomerAccount/CustomerAdress';
import DeleteAccount from '../CustomerAccount/DeleteAccount';
import LoginForm from 'src/components/LoginForm';

import './styles.scss';
import WelcomePage from '../WelcomePage';
import { fetchProductByCategory } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SingleProduct from '../SingleProduct';
import AboutUs from '../AboutUs';
// == Composant
function App() {
  const dispatch = useDispatch();
  const categoryProducts = useSelector((state) => state.products.categoryProducts);

    useEffect(() => {
        dispatch(fetchProductByCategory());
        console.log("useEffect" + categoryProducts)
      }, []); // au 1er rendu

  return (
    <div className="app">
      <Header />
      <NavBar />
     
      {/* <div>
         {/* <ul> */}
       {/* { categoryProducts.map((product) => (
          <li key={product.id}>Nom : {product.name}, Description : {product.short_description}</li>
          )
        )}
        </ul> 
      </div> */} 

      <Routes>
        <Route
          path="/"
          element={<WelcomePage />}
        />

        <Route
          path="/search"
          element={<SearchResults />}
        />

        <Route
        path="/aboutus"
        element={<AboutUs />}
        />

        <Route
        path="/customeraccount"
        element={<CustomerAccount />} 
        />

        <Route
        path="/customeradress"
        element={<CustomerAdress />}
        />

        <Route
        path="/deleteaccount"
        element={<DeleteAccount />}
        />

        <Route
        path='/loginform'
        element={<LoginForm />} 
        />

        <Route
          path="*"
          element={<Error />}
        />

        <Route
          path="/category/product"
          element={<SingleProduct />}
        />

      </Routes>
      
      <Footer />
    </div>
  );
}

// == Export
export default App;

