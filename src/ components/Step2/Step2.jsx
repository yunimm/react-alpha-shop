import React from 'react';

const Step2 = () => (
  <div className="w-1/2 bg-gray-200 p-6">
    <h2 className="text-2xl mb-8">運送方式</h2>
    <div className="container w-full flex flex-col gap-5">
      <ul className="flex flex-col gap-8">
        <li className="border rounded flex gap-6 p-2 px-4 items-center">
          <input type="radio" />
          <div className="flex-1">
            <div className="flex flex-col">
              <span>標準運送</span>
              <span>約3~7個工作天</span>
            </div>
          </div>
          <span>免費</span>
        </li>
        <li className="border rounded flex gap-6 p-2 px-4 items-center">
          <input type="radio" />
          <div className="flex-1">
            <div className="flex flex-col">
              <span>DHL貨運</span>
              <span>48小時內送達</span>
            </div>
          </div>
          <span>$500</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Step2;
