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
  
  // const categories = useSelector((state) => state.products.listCategories);
  
  // const categorie = categories.filter((category) => (
  //   category.id === nb
  // ));


  //console.log(categorie.name]);
  // I display the name of the category
  // const categoryTitle = categorie.name;

  return (

    <main className="main-category">
    
    {/* <h2>{categoryTitle}</h2> */}

      {
        // I display every product of the category
        productsByCategory.map((product) => (
          <ProductItem 
            key={product.id} 
            {...product}
          />
        ))
      }
      
    </main>

  );
}

export default Category;
