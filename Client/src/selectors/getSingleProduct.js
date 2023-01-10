
export function findProduct(products, searchedSlug) {
  // i look for a product which has the same id than the given slug (sent by clicking on an item card)
  const product = products.find((testedproduct) => {
    return testedproduct.id === parseInt(searchedSlug);
  });
  return product;
}
