import React, { useEffect, useState } from 'react';
import Header from './ components/Header/Header';
import StepProgress from './ components/StepProgress/StepProgress';
import Step1 from './ components/Step1/Step1';
import Step2 from './ components/Step2/Step2';
import Step3 from './ components/Step3/Step3';
// import ProgressControl from './ components/ProgressControl/ProgressControl';
import Cart from './ components/Cart/Cart';

const App = () => {
  const [step, setStep] = useState(1);
  const atPrevBtn = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const atNextBtn = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col p-4">
      <Header />
      <StepProgress step={step} />
      <div className="flex">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        <Cart />
      </div>
      <div className="container w-1/2 mt-16">
        <ul
          className={`flex ${step === 1 ? 'justify-end' : 'justify-between'}`}
        >
          {step !== 1 && (
            <button
              onClick={atPrevBtn}
              className="bg-white text-d-black px-16 py-2 rounded cursor-pointer"
            >
              上一步
            </button>
          )}
          {step < 3 && (
            <button
              onClick={atNextBtn}
              className="bg-d-pink text-white px-16 py-2 rounded cursor-pointer"
            >
              下一步
            </button>
          )}
          {step === 3 && (
            <button className="bg-d-pink text-white px-16 py-2 rounded cursor-pointer">
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
