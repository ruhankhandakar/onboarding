import Input from "components/Common/Input";
import Button from "components/Common/Button";

import { StepOneContainer } from "./styles";

const StepOne = () => {
  return (
    <StepOneContainer>
      <header>
        <h2>Welcome! First things first...</h2>
        <p>We can always change them later</p>
      </header>
      <section>
        <Input
          id="full_name"
          labelText="Full Name"
          placeholder="John Doe"
          customStyle={{
            marginBottom: "1rem",
          }}
        />
        <Input
          id="display_name"
          labelText="Display Name"
          placeholder="John"
          customStyle={{
            marginBottom: "1.5rem",
          }}
        />
        <Button>Create Workspace</Button>
      </section>
    </StepOneContainer>
  );
};

export default StepOne;
