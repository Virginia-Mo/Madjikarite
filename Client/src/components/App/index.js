// == Import
import Header from 'src/components/Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
// import SearchResults from 'src/components/SearchResults';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';
import LoginForm from 'src/components/LoginForm';

import './styles.scss';
import WelcomePage from '../WelcomePage';
// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <WelcomePage />
      <NavBar />
      <Footer />
      <SearchResults />
      <CustomerAccount />
      <LoginForm />
    </div>
  );
}

// == Export
export default App;

