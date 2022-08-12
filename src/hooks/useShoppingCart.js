/* eslint-disable arrow-body-style */
import React from 'react';
import data from '../ components/data.json';
import ship from '../ components/ship.json';

const initialState: State = {
  lineItems: data,
  shipData: {
    id: '',
    name: '',
    day: '',
    price: '',
  },
  total: 0,
};

const countTotal = (lineItems, shipData) => {
  const result = lineItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return result + shipData.price;
};
initialState.total = countTotal(initialState.lineItems, initialState.shipData);

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const { id, num } = action.payload;
      const { lineItems, shipData } = state;
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
        total: countTotal(newLineItems, shipData),
      };
    }
    case 'UPDATE_SHIP_PRICE': {
      const selected = action.payload;
      return {
        ...state,
        shipData: selected,
        total: countTotal(state.lineItems, selected),
      };
    }
    default:
      return state;
  }
};
export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}
