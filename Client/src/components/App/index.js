// == Import
import Header from 'src/components/Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ShoppingCart';

import { Route, Routes } from 'react-router-dom';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import LoginForm from 'src/components/LoginForm';

import './styles.scss';
import WelcomePage from '../WelcomePage';
import CustomerAdress from '../CustomerAccount/CustomerAdress';
import DeleteAccount from '../CustomerAccount/DeleteAccount';
import { fetchProductByCategory } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SingleProduct from '../SingleProduct';
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
      <div>
         <ul>
       { categoryProducts.map((product) => (
          <li key={product.id}>Nom : {product.name}, Description : {product.short_description}</li>
          )
)}
</ul> 
      </div>
      
      <Footer />
     {/* <SearchResults />
      <WelcomePage />
      <CustomerAccount />
      <CustomerAdress />
      <DeleteAccount />
      <LoginForm /> */}
      {/* <SearchResults />
      <CustomerAccount /> */}
      <Header />
      <NavBar />
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
        path='/loginForm'
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
        <Route
          path="/shoppingcart"
          element={<Cart />}
        />

      </Routes>
<Footer />
    </div>
  );
}

// == Export
export default App;

