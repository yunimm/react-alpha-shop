import React, { useContext } from 'react';
import LineItem from '../LineItem/LineItem';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { state } = useContext(CartContext);
  const { total, shipData } = state;
  return (
    <div className="container  w-1/2 rounded border p-6 shadow">
      <div className="flex flex-col border-b">
        <h4 className="p-4 text-xl">購物籃</h4>
        <br className="bg-black" />
        <LineItem />
      </div>
      <div className="">
        <div className="flex justify-between border-b p-6">
          <span>運費</span>
          <span>{shipData.price}</span>
        </div>
        <div className="flex justify-between p-6">
          <span>小計</span>
          <span>${total}</span>
        </div>
      </div>
      <div />
    </div>
  );
};

export default React.memo(Cart);
