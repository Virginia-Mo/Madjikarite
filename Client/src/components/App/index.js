// == Import
import Header from 'src/components/Header';
import SearchResults from 'src/components/SearchResults';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <SearchResults />
    </div>
  );
}

// == Export
export default App;
