// == Import
import WelcomePage from '../WelcomePage';
import { Route, Routes } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ShoppingCart';
import Header from 'src/components/Header';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import CustomerAdress from '../CustomerAccount/CustomerAdress';
import DeleteAccount from '../CustomerAccount/DeleteAccount';
import LoginForm from 'src/components/LoginForm';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import SheaBenefits from '../SheaBenefits';
import SingleProduct from '../SingleProduct';
import Workers from '../Workers';
import Process from '../Process';
import Category from '../Category';
import './styles.scss';


// == Composant
function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
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
        path="/sheabenefits"
        element={<SheaBenefits />}
        />

        <Route
        path="/workers"
        element={<Workers />}
        />

        <Route
        path="/process"
        element={<Process />}
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
          path="/product/:slug"
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
        path="/category/:id"
        element={<Category />} />

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

