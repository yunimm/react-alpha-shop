export const actionUpdateQuantity = (id, num) => ({
  type: 'UPDATE_QUANTITY',
  payload: { id, num },
});

export const actionDecreaseQuantity = (id) => ({
  type: 'DECREASE_QUANTITY',
  payload: id,
});
