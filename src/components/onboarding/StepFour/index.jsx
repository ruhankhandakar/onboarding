import Button from "components/Common/Button";
import StepLayout from "components/Common/Steps/StepLayout";

import { StepFourContainer } from "./styles";

const StepFour = () => {
  return (
    <StepLayout>
      <StepFourContainer>
        <img src="/checked.png" alt="success" />
        <section>
          <h2>Congratulations, John!</h2>
          <p>You have completed onboarding, you can start using the Eden!</p>
        </section>
        <Button>Launch Eden</Button>
      </StepFourContainer>
    </StepLayout>
  );
};

export default StepFour;
