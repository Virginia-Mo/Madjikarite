import products from "src/Data/data"

export const initialState = {
  listProducts : products.produits,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default reducer;
