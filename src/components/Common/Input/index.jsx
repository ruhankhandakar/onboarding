import { InputGroup } from "./styles";

const Input = ({ labelText, customStyle = {}, ...props }) => {
  const { id, htmlFor, name } = props;
  const inputId = id || htmlFor || name;
  return (
    <InputGroup style={customStyle}>
      <label htmlFor={inputId}>{labelText}</label>
      <input type="text" placeholder="type here..." id={inputId} {...props} />
    </InputGroup>
  );
};

export default Input;
