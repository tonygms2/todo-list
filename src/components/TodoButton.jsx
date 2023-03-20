import React from "react";

function TodoButton({ type, click, className, value }) {
  return (
    <button type={type} onClick={() => click()} className={className}>
      {value}
    </button>
  );
}

export default TodoButton;
