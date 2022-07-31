import { useState, memo } from 'react';

const LineItem = () => {
  const itemData = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ];
  const [data, setData] = useState(itemData);

  const list = data.map((item) => (
    <li className="rounded p-4" key={item.id}>
      <div className="flex gap-4">
        <img className="w-24" src={item.img} alt={item.name} />
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          <div className="flex items-end gap-24">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <span>{item.quantity}</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="rounded-xl border px-4">REMOVE</button>
          </div>
        </div>
      </div>
    </li>
  ));
  return <ul>{list} </ul>;
};

export default memo(LineItem);
