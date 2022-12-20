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


if ( sum > 0 && sum <= 250){
    sum = 4.95
  } else if (sum > 250 && sum <= 500 ) {
    sum = 6.70
  } else if (sum > 500 && sum <=750) {
    sum = 7.60
  } else if (sum > 750 && sum <= 1000) {
    sum = 8.25
  } else if (sum >1000 && sum <= 2000 ) {
    sum = 9.55
  } else if (sum > 2000 && sum <= 5000) {
    sum = 14.65
  } else if (sum > 5000 && sum <= 10000){
    sum = 21.30
  } else if (sum > 10000) {
    sum =  26.95
}

 return sum;

} 
