import { useContext, createContext } from "react";

const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      isCompleted: false,
    },
  ],
  addToDo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
