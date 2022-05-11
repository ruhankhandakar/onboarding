import StepOne from "./StepOne";

import { Header } from "./styles";

const OnBoarding = () => {
  return (
    <>
      <Header>
        <img src="/logo192.png" alt="eden" />
        <h1>Eden</h1>
      </Header>
      <StepOne />
    </>
  );
};

export default OnBoarding;
