import Header from './ components/Header/Header';
import StepProgress from './ components/StepProgress/StepProgress';
import Step1 from './ components/Step1/Step1';
import Step2 from './ components/Step2/Step2';
import Step3 from './ components/Step3/Step3';
import ProgressControl from './ components/ProgressControl/ProgressControl';
import Cart from './ components/Cart/Cart';

const App = () => (
  <div className="flex flex-col p-4">
    <Header />
    <StepProgress />
    <div className="flex">
      <Step1 />
      <Cart />
    </div>
    <ProgressControl />
    <Step2 />
    <Step3 />
  </div>
);

export default App;
