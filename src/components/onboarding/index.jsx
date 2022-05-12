import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

import { Header } from "./styles";

const OnBoarding = () => {
  return (
    <>
      <Header>
        <img src="/logo192.png" alt="eden" />
        <h1>Eden</h1>
      </Header>
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      <StepFour />
    </>
  );
};

export default OnBoarding;
