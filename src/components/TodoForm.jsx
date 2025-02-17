import { useState } from "react";
import { useTodo } from "./context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addToDo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    addToDo({ todo:todo, isCompleted: false });
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Enter Task..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 font-semibold text-[17px]"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
        
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
