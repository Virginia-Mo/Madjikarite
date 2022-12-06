// == Import
import Header from 'src/components/Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
// import SearchResults from 'src/components/SearchResults';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
}

// == Export
export default App;
