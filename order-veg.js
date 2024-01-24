function orderVeg(veg) {
  if (veg.length === 0) return [];
  if (veg.length === 1) return veg;
  veg.sort((a, b) => a.quantity - b.quantity);
  return veg;
}

module.exports = orderVeg;
