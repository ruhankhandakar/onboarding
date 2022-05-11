import Input from "components/Common/Input";

import { Header } from "./styles";

const OnBoarding = () => {
  return (
    <>
      <Header>
        <img src="/logo192.png" alt="eden" />
        <h1>Eden</h1>
      </Header>
      <Input id="full_name" labelText="Full Name" placeholder="John Doe" />
    </>
  );
};

export default OnBoarding;
