import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import ToDoList from "./Components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (toDoList.length < 1) {
      const todos = localStorage.getItem("todos");
      if (todos) setToDoList(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList]);

  const handleSetTodo = (input) => {
    const newTodos = [...toDoList, { index: toDoList.length, task: input }];
    console.log({ newTodos });
    setToDoList(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = toDoList.filter((todo) => todo.index !== index);
    setToDoList(newTodos);
  };

  const editTodo = (input) => {
    let editTodos = toDoList.map((item) => {
      if (item.index === todo.index) {
        return { ...item, task: input };
      }

      return item;
    });

    setToDoList(editTodos);
  };

  const completeTask = (index, value) => {
    let editTodos = toDoList.map((item) => {
      if (item.index === index) {
        return { ...item, isComplete: value };
      }

      return item;
    });

    setToDoList(editTodos);
  };

  return (
    <div className="App">
      <h1>MY TO DO APP</h1>
      <Todo
        handleSetTodo={handleSetTodo}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
      />
      <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        deleteTodo={deleteTodo}
        setTodo={setTodo}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
