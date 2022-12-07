// == Import
import Header from 'src/components/Header';
import NavBar from '../NavBar';
import Footer from '../Footer';


import { Route, Routes } from 'react-router-dom';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import LoginForm from 'src/components/LoginForm';
import WelcomePage from '../WelcomePage';

import './styles.scss';
// == Composant
function App() {
  return (
    <div className="app">
      {/* <SearchResults />
      <CustomerAccount /> */}
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
        element={<LoginForm/>} 

        />

        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

// == Export
export default App;

