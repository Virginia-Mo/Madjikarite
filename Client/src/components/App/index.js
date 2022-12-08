// == Import
import { Route, Routes } from 'react-router-dom';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import LoginForm from 'src/components/LoginForm';
import WelcomePage from 'src/components/WelcomePage';
import ContactUs from '../ContactUs';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <ContactUs />
      {/* <SearchResults />
      <CustomerAccount /> */}
      {/* <Routes>
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
        element={<LoginForm/>} 

        />

        <Route
          path="*"
          element={<Error />}
        />
      </Routes> */}
    </div>
  );
}

// == Export
export default App;

