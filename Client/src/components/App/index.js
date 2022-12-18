// == Import
import WelcomePage from '../WelcomePage';
import { Route, Routes } from 'react-router-dom';
import { fetchProducts } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
import SignUp from '../SignUp';
import OrdersByAdmin from '../Admin/OrdersByAdmin'
import './styles.scss';


// == Composant
function App() {
  const dispatch = useDispatch();

  const storage = localStorage
console.log(storage);
    useEffect(() => {
        dispatch(fetchProducts());

      }, []); // au 1er rendu

  return (
    <div className="app">
      <Header />
      <NavBar />
     <main>
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
        path="/customeraccount/adress"
        element={<CustomerAdress />}
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
        path="/category${slug}/product"
        element={<SearchResults />} />

        <Route
          path="/admin/orders"
          element={<OrdersByAdmin />}
        />

        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
      </main>
<Footer />
    </div>
  );
}

// == Export
export default App;

