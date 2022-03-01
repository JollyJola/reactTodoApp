import React, { useState, useEffect } from "react";

function Todo({ todo, editTodo, handleSetTodo, setTodo }) {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (todo) setUserInput(todo.task);
  }, [todo]);

  const changeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo) editTodo(userInput);
    else handleSetTodo(userInput);
    setUserInput("");
    setTodo(null);
  };

  return (
    <div className="headFrame">
      <form>
        <input
          placeholder="Enter a Task"
          name="task"
          type="text"
          value={userInput}
          onChange={changeHandler}
        />
        <br />
        <button onClick={onSubmit}> {todo ? "EDIT" : "ADD"} TASK </button>
      </form>
    </div>
  );
}

export default Todo;
