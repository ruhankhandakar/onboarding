import { useState } from "react";

import StepNumbers from "components/Common/Steps/StepNumbers";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

import { Header } from "./styles";

const RenderStepComponent = ({ currentStep, ...props }) => {
  switch (currentStep) {
    case 1:
      return <StepOne {...props} />;
    case 2:
      return <StepTwo {...props} />;
    case 3:
      return <StepThree {...props} />;
    case 4:
      return <StepFour {...props} />;
    default:
      return null;
  }
};

const OnBoarding = () => {
  const [activeSteps, setActiveSteps] = useState([1]);
  const [formData, setFormData] = useState({});

  const handleSteps = (stepNumbers) => {
    if (stepNumbers.constructor.name === "Array") {
      setActiveSteps([...stepNumbers]);
    } else {
      const nextStep = activeSteps.length + 1;
      setActiveSteps([...activeSteps, nextStep]);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Header>
        <img src="/logo192.png" alt="eden" />
        <h1>Eden</h1>
      </Header>
      <StepNumbers totalSteps={4} activeSteps={activeSteps} />
      <RenderStepComponent
        currentStep={activeSteps.length}
        handleSteps={handleSteps}
        inputProps={{
          onChange: handleChange,
        }}
        formData={formData}
      />
    </>
  );
};

export default OnBoarding;
