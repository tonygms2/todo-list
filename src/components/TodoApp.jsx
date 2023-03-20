import { Button } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RiTodoLine } from "react-icons/ri";
import InputBox from "./InputBox";
import ListItem from "./ListItem";

function TodoApp() {
  let buttonRef = useRef();
  let [input, setInput] = useState({ todo: "", isChecked: false });
  let [todo, setTodo] = useState([]);

  const notification = () => toast.error("Todo's can't be empty.");
  useEffect(()=>{
    setInput({ todo: "", isChecked: false });
  },[todo])
  function addTodo(event) {
    event.preventDefault();

    if (input.todo) {
      setTodo([...todo, input]);
    } else {
      notification();
    }

    setInput({});
  }

  const handleInputChange = (input) => {
    setInput({ todo: input, isChecked: false });
  };

  function removeTodo(idx) {
    const newTodoList = [...todo];
    newTodoList.splice(idx, 1);
    setTodo(newTodoList);
  }

  const handleCheck = (checkToggle, index) => {
    console.log(checkToggle, index);
    todo[index] = {
      ...todo[index],
      isChecked: checkToggle,
    };

    setTodo([...todo]);
  };

  return (
    <div className="container  min-h-screen flex flex-col mx-auto bg-[#2C3333] rounded-xl  lg:w-3/4  shadow border p-8 m-5 ">
      <div className="flex gap-5 justify-center">
        <h1 className="text-[#CBE4DE] font-semibold text-center text-6xl">
          TODO LIST
        </h1>
        <RiTodoLine className="text-[#CBE4DE] font-semibold text-center text-7xl" />
      </div>
      <form className="flex mt-5  justify-start items-center  flex-col">
        <InputBox
          type="text"
          handleInputChange={handleInputChange}
          focus={true}
          placeholder="Enter your todo's"
          className="peer h-[42px] w-full rounded border-b  px-5 py-1 transition-colors focus:border-b-2 focus:border-indigo-600 focus:outline-none"
          value={input?.todo}
        />
        <Button
          ref={buttonRef}
          type="submit"
          onClick={addTodo}
          className="font-semibold text-lg bg-[#0E8388] mt-5 w-1/4"
        >
          Enter Todo
        </Button>
      </form>

      <Toaster position="top-right" />

      <ol className="mt-5 list-disc ">
        {todo.map((item, idx) => (
          <ListItem
            index={idx}
            key={idx}
            listString={item?.todo}
            check={item?.isChecked}
            removeTodo={removeTodo}
            updateHandler={handleCheck}
          />
        ))}
      </ol>
    </div>
  );
}

export default TodoApp;
