import React from 'react';

const StepProgress = () => (
  <div className="w-1/2 bg-gray-400 p-6  flex flex-col gap-8">
    <h2 className="text-3xl w-full">結帳</h2>
    <ul className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2 w-2/5">
        <span className="text-center w-6 h-6 bg-black text-white rounded-full">
          1
        </span>
        <li>寄送地址</li>
        <div className="flex-1 bg-black h-1" />
      </div>
      <div className="flex items-center gap-2 w-2/5">
        <span className="text-center w-6 h-6 border border-d-gray text-d-gray rounded-full">
          2
        </span>
        <li>運送方式</li>
        <div className="flex-1 bg-black h-1" />
      </div>
      <span className="text-center w-6 h-6 border border-d-gray text-d-gray rounded-full">
        3
      </span>
      <li>付款資訊</li>
    </ul>
  </div>
);

export default StepProgress;
