import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

type StepProgressProps = {
  step: number,
};

const StepProgress: React.FC<StepProgressProps> = () => {
  const { step } = useContext(CartContext);
  return (
    <div className="flex w-1/2  flex-col gap-8 p-6">
      <h2 className="w-full text-3xl">結帳</h2>
      <ul className="flex w-full items-center justify-between">
        <div className="flex w-2/5 items-center gap-2 ">
          <span className="h-6 w-6 rounded-full bg-black text-center text-white">
            1
          </span>
          <li>寄送地址</li>
          <div className="h-1 flex-1 bg-black" />
        </div>
        <div
          className="flex w-2/5 items-center gap-2 text-gray-300 data-active:text-black"
          data-active={step > 1}
        >
          <span
            className="h-6 w-6 rounded-full border border-d-gray text-center data-active:border-black"
            data-active={step > 1}
          >
            2
          </span>
          <li>運送方式</li>
          <div
            className="h-1 flex-1 bg-gray-300 data-active:bg-black"
            data-active={step > 2}
          />
        </div>
        <span
          className="h-6 w-6 rounded-full border border-d-gray text-center text-gray-300 data-active:border-black data-active:text-black"
          data-active={step > 2}
        >
          3
        </span>
        <li
          className="text-gray-300 data-active:text-black"
          data-active={step > 2}
        >
          付款資訊
        </li>
      </ul>
    </div>
  );
};
export default StepProgress;
