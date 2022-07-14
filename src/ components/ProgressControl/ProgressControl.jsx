import React from 'react';

const ProgressControl = () => (
  <div className="container border w-1/2 mt-16">
    <ul className="flex justify-between">
      <button className="bg-white text-d-black px-16 py-2 rounded cursor-pointer">
        上一步
      </button>
      <button className="bg-d-pink text-white px-16 py-2 rounded cursor-pointer">
        下一步
      </button>
    </ul>
  </div>
);

export default ProgressControl;
