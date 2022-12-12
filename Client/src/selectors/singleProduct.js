import { MdProductionQuantityLimits } from "react-icons/md";

export function findProduct(products, searchedSlug) {
  const product = products.find((testedproduct) => {
    return testedproduct.id === parseInt(searchedSlug);
  });
  return product;
}


// findcategory

// je veux trouver les catégories des MdProductionQuantityLimits
// filter(produit => produit.categorie_id === categori.id)
