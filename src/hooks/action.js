export const actionUpdateQuantity = (id, num) => ({
  type: 'UPDATE_QUANTITY',
  payload: { id, num },
});

export const actionUpdateShipPrice = (selected) => ({
  type: 'UPDATE_SHIP_PRICE',
  payload: selected,
});
