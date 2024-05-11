const cart = [10, 290, 23, 18, 43, 50]

let finalValue = 0

function calculateDiscount(value, discount) {
  if(value > 30) {
    value * discount / 100
  } else {
    value
  }
}

cart.forEach(value => {

  finalValue =+ value
  console.log(finalValue)
});
