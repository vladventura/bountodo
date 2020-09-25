export const Item = (n, t, p, attrs) => ({
  itemName: n,
  itemType: t,
  itemPrice: p,
  ...attrs,
});

export const EnhRateAlter = (affectedValue, rateFn) => ({
  affectedValue,
  rateFn,
});
