import Button from "components/Common/Button";
import Card from "components/Common/Card";
import StepLayout from "components/Common/Steps/StepLayout";

import { CardContainer, CardContentDiv } from "./styles";

const CardContent = ({ title, text, imgFile, isActive }) => {
  return (
    <CardContentDiv isActive={isActive}>
      {imgFile && <img src={imgFile} alt={title} />}
      <h3>{title}</h3>
      <p>{text}</p>
    </CardContentDiv>
  );
};

const StepThree = () => {
  return (
    <StepLayout
      title="How are you planning to use Eden"
      paragraph="We'll streamline your setup experience accordingly"
    >
      <CardContainer>
        <Card>
          <CardContent
            title="For myself"
            text="With better, Think more clearly. Stay organized."
            imgFile="/user.png"
          />
        </Card>
        <Card isActive="true">
          <CardContent
            title="With my team"
            text="Wikis, docs, tasks & projects, all in one place."
            imgFile="/teams.png"
            isActive="true"
          />
        </Card>
      </CardContainer>
      <Button>Create Workspace</Button>
    </StepLayout>
  );
};

export default StepThree;
