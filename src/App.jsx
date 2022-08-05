import { useState, useMemo, useCallback } from 'react';
import Header from './ components/Header/Header';
import StepProgress from './ components/StepProgress/StepProgress';
import Step1 from './ components/Step1/Step1';
import Step2 from './ components/Step2/Step2';
import Step3 from './ components/Step3/Step3';
// import ProgressControl from './ components/ProgressControl/ProgressControl';
import Cart from './ components/Cart/Cart';
import { CartContext } from './contexts/CartContext';

const App = () => {
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
  const [step, setStep] = useState(1);
  const [data, setData] = useState(itemData);
  const atPrevBtn = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const atNextBtn = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const atUpdateQuantity = useCallback((id: string) => {
    // 使用更新購物車商品資料function，以map方式對陣列資料進行加工並回傳新陣列
    // eslint-disable-next-line arrow-body-style
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  }, []);
  const atDecreaseQuantity = useCallback((id: string) => {
    // 使用更新購物車商品資料function，以map方式對陣列資料進行加工並回傳新陣列
    // eslint-disable-next-line arrow-body-style
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
          };
        }
        return item;
      });
    });
  }, []);
  const providerValue = useMemo(() => ({
    step,
    setStep,
    data,
    setData,
    atUpdateQuantity,
    atDecreaseQuantity,
  }));
  return (
    <div className="flex flex-col p-4">
      <Header />
      {/* <StepProgress step={step} /> */}
      <CartContext.Provider value={providerValue}>
        <StepProgress />
        <div className="flex">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          <Cart />
        </div>
      </CartContext.Provider>
      <div className="container mt-16 w-1/2">
        <ul
          className={`flex ${step === 1 ? 'justify-end' : 'justify-between'}`}
        >
          {step !== 1 && (
            <button
              onClick={atPrevBtn}
              className="cursor-pointer rounded bg-white px-16 py-2 text-d-black"
            >
              上一步
            </button>
          )}
          {step < 3 && (
            <button
              onClick={atNextBtn}
              className="cursor-pointer rounded bg-d-pink px-16 py-2 text-white"
            >
              下一步
            </button>
          )}
          {step === 3 && (
            <button className="cursor-pointer rounded bg-d-pink px-16 py-2 text-white">
              確認訂單
            </button>
          )}
        </ul>
      </div>
      {/* <ProgressControl /> */}
    </div>
  );
};

export default App;
