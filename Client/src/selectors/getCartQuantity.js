import { useSelector } from "react-redux";

export function getCartQuantity (){
  // i want to add up the quantity of items in the cart

// i get the cart which is an array of items
  const cart = useSelector((state) => state.cart.cart)
  
  let sum = 0;

    cart.forEach(element => {
      // for each item in the cart, i take it's quantity and add it to sum
      sum += element.quantity;
});
//  sum return the quantity of items in the cart
return sum;
} 

export function getWeightQuantity (){
  // i want to add up the quantity of items in the cart

// i get the cart which is an array of items
  const cart = useSelector((state) => state.cart.cart)
  
  let sum = 0;

    cart.forEach(element => {
      // for each item in the cart, i take it's quantity and add it to sum
      sum += element.totalWeight;
});
//  sum return the quantity of items in the cart
return +sum;
} 

