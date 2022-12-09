import { useSelector } from 'react-redux';

import ProductItem from '../ProductItem';
import './style.scss';

function SearchResults() {
  const filteredProducts = useSelector((state) => state.searchBar.products);

  return (
    <>
    <div>
      <h2 className='mainTitle__h2'>Résultats de la recherche</h2>
      {filteredProducts.length > 1 && (
         <h3 className="searchedProduct__h3">
       {filteredProducts.length} produits trouvés</h3>
       )}

        {filteredProducts.length === 1 && (
         <h3 className="searchedProduct__h3">
       {filteredProducts.length} produit trouvé</h3>
       )}
 
       {filteredProducts.length === 0 && (
         <h3 className="searchedProduct__h3">
       Pas de produit correspondant à la recherche</h3>
       )}  
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
