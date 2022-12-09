// == Import
import WelcomePage from '../WelcomePage';
import { Route, Routes } from 'react-router-dom';
import { fetchProductByCategory } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ShoppingCart';
import Header from 'src/components/Header';
import SearchResults from 'src/components/SearchResults';
import SingleProduct from 'src/components/SingleProduct';
import CustomerAccount from 'src/components/CustomerAccount';
import CustomerAdress from '../CustomerAccount/CustomerAdress';
import DeleteAccount from '../CustomerAccount/DeleteAccount';
import LoginForm from 'src/components/LoginForm';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import './styles.scss';


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
          path="searchedproduct"
          element={<SingleProduct />}
        />

        <Route
          path="/shoppingcart"
          element={<Cart />}
        />

         <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/customeraccount"
          element={<CustomerAccount />}
        />

          <Route
          path="/customeraccount/adress"
          element={<CustomerAdress />}
        />
         <Route
          path="/customeraccount/delete"
          element={<DeleteAccount />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
<Footer />
    </div>
  );
}

// == Export
export default App;

