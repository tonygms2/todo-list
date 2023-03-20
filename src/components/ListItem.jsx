import { Checkbox } from "@material-tailwind/react";
import React from "react";
import TodoButton from "./TodoButton";
function ListItem({ listString, removeTodo, index, check, updateHandler }) {
  function onClickHandeler() {
    removeTodo(index);
  }

  return (
    <div className="flex   mb-4 items-center">
      <div
        className={`pt-2 transition duration-300 mx-5 pb-9 px-5 text-xl justify-center text-center w-full ${
          !check
            ? "bg-[#2E4F4F] "
            : "bg-green-500 line-through decoration-[#2C3333] decoration-4"
        } font-semibold rounded-lg h-9 hover:shadow-lg text-[#CBE4DE]  `}
      >
        {listString}
      </div>
      <Checkbox
        type="checkbox"
        checked={check}
        onChange={(e) => {
          updateHandler(e.target.checked, index);
        }}
      />
      <TodoButton
        type="button"
        click={onClickHandeler}
        value="Remove"
        className="flex-no-shrink p-2 ml-2 transition duration-300 hover:bg-red-500 bg-[#0E8388] border-2 rounded-lg text-red border-red font-semibold  text-gray-200"
      />
    </div>
  );
}

export default ListItem;
