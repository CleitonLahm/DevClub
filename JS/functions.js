const cart = [10, 259, 35, 60, 90, 25];

function calculateDiscount(value) {
  return value * 0.9;
}

function calculateTotalCart() {
  let totalValue = 0;

  cart.forEach((value) => {
    value + value;
  });
  return totalValue;
}

function calculateTotalCartWithDiscount() {
  let totalValue = 0;

  cart.forEach((value) => {
    if (value > 30) {
      value = calculateDiscount(value);
    }
    totalValue += value;
  });
  return totalValue;
}

console.log(``);
