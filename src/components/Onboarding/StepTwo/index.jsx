import Input from "components/Common/Input";
import Button from "components/Common/Button";

import StepLayout from "components/Common/Steps/StepLayout";

const StepTwo = ({ handleSteps }) => {
  return (
    <StepLayout
      title="Let's set up a home for all your work"
      paragraph="You can always create another workspace later"
    >
      <section>
        <Input
          id="workspace_name"
          labelText="Workspace Name"
          placeholder="Eden"
          customStyle={{
            marginBottom: "1rem",
          }}
        />
        <Input
          id="display_name"
          labelText="Workspace URL"
          optionalLabelText="optional"
          placeholder="Example"
          prependText="www.eden.com/"
          customStyle={{
            marginBottom: "1.5rem",
          }}
        />
        <Button onClick={handleSteps}>Create Workspace</Button>
      </section>
    </StepLayout>
  );
};

export default StepTwo;
