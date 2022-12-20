// == Import
import WelcomePage from '../WelcomePage';
import { Route, Routes } from 'react-router-dom';
import { fetchProducts } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ShoppingCart';
import Header from 'src/components/Header';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import CustomerAddress from '../CustomerAccount/CustomerAddress';
import DeleteAccount from '../CustomerAccount/DeleteAccount';
import LoginForm from 'src/components/LoginForm';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import SheaBenefits from '../SheaBenefits';
import SingleProduct from '../SingleProduct';
import Workers from '../Workers';
import Process from '../Process';
import SignUp from '../SignUp';
import OrdersByAdmin from '../Admin/OrdersByAdmin';
import ProductsByAdmin from '../Admin/ProductsByAdmin';
import NewProductByAdmin from '../Admin/ProductsByAdmin/NewProductByAdmin';
import ProductPageByAdmin from '../Admin/ProductsByAdmin/ProductPageByAdmin';

import './styles.scss';


// == Composant
function App() {
  const dispatch = useDispatch();

  const storage = localStorage
console.log(storage);
    useEffect(() => {
        dispatch(fetchProducts());
      }, []); // au 1er rendu

      // useEffect(() => {
      //   localStorage.getItem('token');
      // },);
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
        path="/signup"
        element={<SignUp />} 
        />
        <Route
        path="/customeraccount"
        element={<CustomerAccount />} 
        />
        <Route
        path="/customeraccount/address"
        element={<CustomerAddress />}
        />

        <Route
        path="/customeraccount/deleteaccount"
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
          path="/admin/orders"
          element={<OrdersByAdmin />}
        />
        
        <Route 
        path="/category${slug}/product"
        element={<SearchResults />} />

        <Route
        path="/admin/products"
        element={<ProductsByAdmin />} />

        <Route
        path="/admin/productPage/:slug"
        element={<ProductPageByAdmin />} />

        <Route
        path="/admin/new-product"
        element={<NewProductByAdmin />} />

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

