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
  errorClassName,
  // handleFocus,
}) {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        id={id}
        value={value}
        autoFocus={focus}
        // onFocus = {(e)=>handleFocus(e.target)}
        className={className}
        autoComplete={autoComplete}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      <h6 className={errorClassName}>Minimum length should be 3</h6>
    </div>
  );
}

export default InputBox;
