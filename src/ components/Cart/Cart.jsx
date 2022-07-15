import React from 'react';
import LineItem from '../LineItem/LineItem';

const Cart = () => (
  <div className="container  w-1/2 p-6 border rounded shadow">
    <div className="flex flex-col border-b">
      <h4 className="p-4 text-xl">購物籃</h4>
      <br className="bg-black" />
      <LineItem />
    </div>
    <div className="">
      <div className="flex justify-between p-6 border-b">
        <span>運費</span>
        <span>0</span>
      </div>
      <div className="flex justify-between p-6">
        <span>小計</span>
        <span>400</span>
      </div>
    </div>
    <div />
  </div>
);

export default Cart;
