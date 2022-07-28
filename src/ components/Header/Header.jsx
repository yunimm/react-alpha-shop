import React from 'react';

const Header = () => (
  <ul className="flex p-6 gap-6">
    <li>男款</li>
    <li>女款</li>
    <li>最新消息</li>
    <li>客製商品</li>
    <li>聯絡我們</li>
  </ul>
);

export default React.memo(Header);
