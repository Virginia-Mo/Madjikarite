import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductItem from 'src/components/ProductItem';
import './style.scss';

function Category() {
  // I get the id of the category
  const { id } = useParams();
  // I convert the id in number
  const nb = parseInt(id, 10);

  const products = useSelector((state) => state.products.listProducts);

  // I filter the products by category
  const productsByCategory = products.filter((product) => (
    product.category_id === nb
  ));
  
  const categories = useSelector((state) => state.products.listCategories);
  // I find the category to display the name
  const categorie = categories.find((category) => (
    category.id === nb
  ));

  return (

    <main >
   { categorie && (<h2 className='mainTitle__h2'>{categorie.name}</h2>)   }
    
    <div className="main-category">
      {
        // I display every product of the category
        productsByCategory.map((product) => (
          <ProductItem 
            key={product.id} 
            {...product}
          />
        ))
      }
    </div> 
    </main>

  );
}

export default Category;
