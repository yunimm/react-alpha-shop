import { useState, useMemo } from 'react';
import Header from './ components/Header/Header';
import StepProgress from './ components/StepProgress/StepProgress';
import Step1 from './ components/Step1/Step1';
import Step2 from './ components/Step2/Step2';
import Step3 from './ components/Step3/Step3';
// import ProgressControl from './ components/ProgressControl/ProgressControl';
import Cart from './ components/Cart/Cart';
import { CartContext } from './contexts/CartContext';
import useShoppingCart from './hooks/useShoppingCart';

const App = () => {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useShoppingCart();
  const atPrevBtn = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const atNextBtn = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const providerValue = useMemo(
    () => ({
      state,
      dispatch,
      step,
    }),
    [state, dispatch, step],
  );
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
