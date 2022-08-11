/* eslint-disable arrow-body-style */
import React from 'react';
import data from '../ components/data.json';

const initialState: State = {
  lineItems: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const { id, num } = action.payload;
      const { lineItems } = state;
      const newLineItems = lineItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + num,
          };
        }
        return item;
      });
      return {
        ...state,
        lineItems: newLineItems,
      };
    }
    default:
      return state;
  }
};
export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}
