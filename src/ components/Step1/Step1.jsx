import React from 'react';

const Step1 = () => (
  <div className="w-1/2 bg-gray-200 p-6">
    <h2 className="text-2xl mb-8">寄送地址</h2>
    <div className="container w-full border flex flex-col gap-5">
      <div className="flex gap-3">
        <div className="flex flex-col w-1/4 border">
          <span>稱謂</span>
          <select name="mySelect" className="rounded">
            <option value="default">請選擇</option>
            <option value="mr">先生</option>
            <option value="miss">小姐</option>
            <option value="other">其他</option>
          </select>
        </div>
        <div className="flex flex-col  w-3/4">
          <span>姓名</span>
          <input
            type="text"
            className="form-input rounded"
            placeholder="請輸入姓名"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-1/2 border">
          <span>電話</span>
          <input
            type="number"
            className="form-input rounded"
            placeholder="請輸入行動電話"
          />
        </div>
        <div className="flex flex-col  w-1/2">
          <span>Email</span>
          <input
            type="email"
            className="form-input rounded"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col w-1/4 border">
          <span>縣市</span>
          <select name="mySelect" className="rounded">
            <option value="default">請選擇縣市</option>
            <option value="mr">台北</option>
            <option value="miss">台中</option>
            <option value="other">台南</option>
          </select>
        </div>
        <div className="flex flex-col  w-3/4">
          <span>地址</span>
          <input
            type="text"
            className="form-input rounded"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Step1;
