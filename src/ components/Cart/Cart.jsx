import React from 'react';

const Cart = () => (
  <div className="container  w-1/2 p-6 border rounded shadow">
    <div className="flex flex-col border-b">
      <h4 className="p-4 text-xl">購物籃</h4>
      <ul>
        <li className="p-4 rounded">
          <div className="flex gap-4">
            <span className="inline-block w-24 h-24 bg-gray-700 text-center">
              300X300
            </span>
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-between">
                <span>貓咪罐罐</span>
                <span>100</span>
              </div>
              <div className="flex gap-24 items-end">
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
                <span>2</span>
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
                <button className="border rounded-xl px-4">REMOVE</button>
              </div>
            </div>
          </div>
        </li>
        <li className="p-4 rounded">
          <div className="flex gap-4">
            <span className="inline-block w-24 h-24 bg-gray-700 text-center">
              300X300
            </span>
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-between">
                <span>貓咪罐罐</span>
                <span>100</span>
              </div>
              <div className="flex gap-24 items-end">
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
                <span>2</span>
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
                <button className="border rounded-xl px-4">REMOVE</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <br className="bg-black" />
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
