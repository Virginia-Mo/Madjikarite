// == Import
import Header from 'src/components/Header';
import SearchResults from 'src/components/SearchResults';
import CustomerAccount from 'src/components/CustomerAccount';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <SearchResults />
      <CustomerAccount />
    </div>
  );
}

// == Export
export default App;

