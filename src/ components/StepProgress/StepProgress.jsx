type StepProgressProps = {
  step: number,
};

const StepProgress: React.FC<StepProgressProps> = ({ step }) => (
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
      <div
        className="flex items-center gap-2 w-2/5 text-gray-300 data-active:text-black"
        data-active={step > 1}
      >
        <span
          className="text-center w-6 h-6 border rounded-full border-d-gray data-active:border-black"
          data-active={step > 1}
        >
          2
        </span>
        <li>運送方式</li>
        <div
          className="flex-1 h-1 bg-gray-300 data-active:bg-black"
          data-active={step > 2}
        />
      </div>
      <span
        className="text-center w-6 h-6 border rounded-full border-d-gray text-gray-300 data-active:text-black data-active:border-black"
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
export default StepProgress;
