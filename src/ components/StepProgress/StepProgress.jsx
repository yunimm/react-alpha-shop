import React from 'react';
import cx from 'classnames';

type StepProgressProps = {
  step: number,
};

const StepProgress: React.FC<StepProgressProps> = ({ step }) => {
  const step2TextActive = step > 1 ? 'text-black' : 'text-gray-300';
  const step2BorderActive = step > 1 ? 'border-black' : 'border-d-gray';
  const step3LineActive = step > 2 ? 'bg-black' : 'bg-gray-300';
  const step3BorderActive = step > 2 ? 'border-black' : 'border-d-gray';
  const step3TextActive = step > 2 ? 'text-black' : 'text-gray-300';

  return (
    <div className="w-1/2 p-6  flex flex-col gap-8">
      <h2 className="text-3xl w-full">結帳</h2>
      <ul className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 w-2/5 ">
          <span className="text-center w-6 h-6 bg-black text-white rounded-full">
            1
          </span>
          <li>寄送地址</li>
          <div className="flex-1 bg-black h-1" />
        </div>
        <div className={cx('flex items-center gap-2 w-2/5', step2TextActive)}>
          <span
            className={cx(
              'text-center w-6 h-6 border rounded-full',
              step2BorderActive,
            )}
          >
            2
          </span>
          <li>運送方式</li>
          <div className={cx('flex-1 h-1', step3LineActive)} />
        </div>
        <span
          className={cx(
            'text-center w-6 h-6 border rounded-full',
            step3BorderActive,
            step3TextActive,
          )}
        >
          3
        </span>
        <li className={step3TextActive}>付款資訊</li>
      </ul>
    </div>
  );
};
export default StepProgress;
