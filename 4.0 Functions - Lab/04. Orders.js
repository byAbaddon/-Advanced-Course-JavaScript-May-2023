function orders(product, price) {
  const items = {coffee : 1.50, water: 1.00, coke: 1.40, snacks: 2.00}
  return (items[product] * price).toFixed(2)
}

  //console.log(orders('water', 5))