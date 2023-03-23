import React, { useState } from "react";
import "./FormInput.css";

const FormInput = ({
  label,
  onChangeFunc,
  id,
  errorMessage,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChangeFunc}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

// const FormInput = (props) => {
//   const { label, onChange, id, ...inputProps } = props;
//   return (
//     <div className="formInput">
//       <label>{label}</label>
//       <input {...inputProps} onChange={onChange}/>
//     </div>
//   );
// };

export default FormInput;
