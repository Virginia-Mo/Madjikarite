// == Import
import Header from 'src/components/Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Cart from '../ShoppingCart';

import { Route, Routes } from 'react-router-dom';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import LoginForm from 'src/components/LoginForm';
import WelcomePage from '../WelcomePage';

import './styles.scss';
import SingleProduct from '../SingleProduct';
// == Composant
function App() {
  return (
    <div className="app">
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

