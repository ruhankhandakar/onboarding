import Input from "components/Common/Input";
import Button from "components/Common/Button";
import StepLayout from "components/Common/Steps/StepLayout";

const StepOne = ({ handleSteps }) => {
  return (
    <StepLayout
      title="Welcome! First things first..."
      paragraph="You can always change them later"
    >
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
        <Button onClick={handleSteps}>Create Workspace</Button>
      </section>
    </StepLayout>
  );
};

export default StepOne;
