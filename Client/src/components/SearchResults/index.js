import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import './style.scss';

function SearchResults() {
  const filteredProducts = useSelector((state) => state.searchBar.products);

  return (
    <div>
      <h3>Résultats de la recherche</h3>
      <div className="search-results">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
