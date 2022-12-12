export function findProduct(products, searchedSlug) {
  const product = products.find((testedproduct) => {
    return testedproduct.id === parseInt(searchedSlug);
  });
  return product;
}
