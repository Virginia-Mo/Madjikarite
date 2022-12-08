import { useSelector } from 'react-redux';

import ProductItem from '../ProductItem';
import './style.scss';

function SearchResults() {
  const filteredProducts = useSelector((state) => state.searchBar.products);

  return (
    <>
    <div>
      <h2 className='mainTitle__h2'>Résultats de la recherche</h2>
      <div className="search-results">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            {...product} />
        ))}
      </div>
    </div>
    </>
  );
}

export default SearchResults;
