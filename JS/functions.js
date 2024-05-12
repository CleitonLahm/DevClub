const cart = [10, 259, 35, 60, 90, 25]

function calculateTotalCart() {
  let total = 0

  cart.forEach(value => {
    total += value
  });
  return total
}
function calculateTotalWithDiscount() {
  let totalWithDiscount = 0

  cart.forEach(value => {
    if(value > 30) {
      totalWithDiscount += value * 0.9
    } else {
      totalWithDiscount += value
    }
  });
  return totalWithDiscount
}

const total = calculateTotalCart(cart)
console.log(total)

const totalWithDiscount = calculateTotalWithDiscount(cart)
console.log(totalWithDiscount)
