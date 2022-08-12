import React, { useContext, useCallback } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { actionUpdateShipPrice } from '../../hooks/action';
import ship from '../ship.json';

const Step2 = () => {
  const { state, dispatch } = useContext(CartContext);
  // const { shipData } = state;

  const atUpdateShipPrice = useCallback(
    (selected) => {
      dispatch(actionUpdateShipPrice(selected));
    },
    [dispatch],
  );

  const Ship = ship.map((item) => (
    <label
      key={item.id}
      className="flex items-center gap-6 rounded p-2 px-4"
      htmlFor={item.id}
    >
      <input
        type="radio"
        name="radio"
        id={item.id}
        onClick={() => {
          atUpdateShipPrice(item);
        }}
      />
      <div className="flex-1">
        <div className="flex flex-col">
          <span>{item.name}</span>
          <span>{item.day}</span>
        </div>
      </div>
      <span>{item.price}</span>
    </label>
  ));
  return (
    <div className="w-1/2 p-6">
      <h2 className="mb-8 text-2xl">運送方式</h2>
      <div className="container flex w-full flex-col gap-5">
        <ul className="flex flex-col gap-8">{Ship}</ul>
      </div>
    </div>
  );
};

export default React.memo(Step2);
