import React from "react";

function InputBox({
  type,
  value,
  placeholder,
  id,
  className,
  autoComplete = "off",
  focus = false,
  name,
  handleInputChange,
}) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      autoFocus={focus}
      className={className}
      autoComplete={autoComplete}
      name={name}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
}

export default InputBox;
