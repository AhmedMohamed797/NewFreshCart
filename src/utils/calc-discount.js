export function calcDiscount({ price, priceAfterDiscount }) {
  return (((price - priceAfterDiscount) / price) * 100).toFixed(0);
}
