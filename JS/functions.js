const cart = [10, 290, 23, 18, 43, 50];

let finalValue = 0;

function calculateDiscount(price, discount) {
  const result = (price * discount) / 100;
  return result;
}
calculateDiscount(50, 10);

cart.forEach((value) => {
  const discount = calculateDiscount(value, 10);
  if (value > 30) {
    finalValue = finalValue + (value - discount);
    console.log(finalValue);
  } else {

    finalValue =+ value 
  }

});
