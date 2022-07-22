// import React from 'react';

// 還沒安裝flow.js
// type StepProgressProps = {
//   step: number,
// };

const StepProgress = ({ step }) => (
  <div className="w-1/2 p-6  flex flex-col gap-8">
    <h2 className="text-3xl w-full">結帳</h2>
    <ul className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2 w-2/5 ">
        <span className="text-center w-6 h-6 bg-black text-white rounded-full">
          1
        </span>
        <li>寄送地址</li>
        <div className="flex-1 bg-black h-1" />
      </div>
      <div
        className={`flex items-center gap-2 w-2/5 ${
          step > 1 ? 'text-black' : 'text-gray-300'
        }`}
      >
        <span
          className={`text-center w-6 h-6 border rounded-full ${
            step > 1 ? 'border-black' : 'border-d-gray'
          }`}
        >
          2
        </span>
        <li>運送方式</li>
        <div
          className={`flex-1  h-1 ${step > 2 ? 'bg-black' : 'bg-gray-300'}`}
        />
      </div>
      <span
        className={`text-center w-6 h-6 border border-d-gray rounded-full ${
          step > 2 ? 'border-black' : 'border-gray-300'
        }`}
      >
        3
      </span>
      <li className={` ${step > 2 ? 'text-black' : 'text-gray-300'}`}>
        付款資訊
      </li>
    </ul>
  </div>
);

export default StepProgress;
