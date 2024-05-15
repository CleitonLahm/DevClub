const cart = [
  {productName: 'Laranja', pricePerKg: 10, kg: 2},
  {productName: 'Limao', pricePerKg: 6, kg: 3},
  {productName: 'Banana', pricePerKg: 4, kg: 1.5},
  {productName: 'Repolho', pricePerKg: 5, kg: 4},
  {productName: 'Morango', pricePerKg: 12, kg: 1.2},
]

const totalCart = cart.reduce((acc, value) => {

  const productTotalValue = value.pricePerKg * value.kg
  return acc + productTotalValue
}, 0)

console.log(`A sua compra ficou no total de: ${totalCart.toFixed(2)}`)