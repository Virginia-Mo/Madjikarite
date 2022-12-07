import { useSelector } from 'react-redux';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ProductItem from '../ProductItem';
import './style.scss';

function SearchResults() {
  const filteredProducts = useSelector((state) => state.searchBar.products);

  return (
    <>
    <Header />
    <NavBar />
    <div>
      <h3>Résultats de la recherche</h3>
      <div className="search-results">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            {...product} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default SearchResults;
