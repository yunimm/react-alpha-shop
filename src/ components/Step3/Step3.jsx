import React from 'react';

const Step3 = () => (
  <div className="w-1/2 p-6">
    <h2 className="text-2xl mb-8">寄送地址</h2>
    <div className="container w-full flex flex-col gap-5">
      <div className="flex gap-3">
        <div className="flex flex-col w-3/4">
          <span>持卡人姓名</span>
          <input
            type="text"
            className="form-input rounded"
            placeholder="John Doe"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-3/4">
          <span>卡號</span>
          <input
            type="number"
            className="form-input rounded"
            placeholder="1111 2222 3333 4444"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-1/2">
          <span>有效期限</span>
          <input
            type="number"
            className="form-input rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <span>CVC/CCV</span>
          <input
            type="number"
            className="form-input rounded"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(Step3);
