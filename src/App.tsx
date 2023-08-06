import {  createSignal } from "solid-js";
import type { Accessor, Setter } from 'solid-js';
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

export interface Todo {
  id: number;
  text: string;
  completed: Accessor<boolean>;
  setCompleted: Setter<boolean>;
}

export const [todos, setTodos] = createSignal<Todo[]>([])

const App = () => {
  return (
    <div 
        class="
            w-screen 
            h-screen 
            p-6
            bg-bg-gray-800 
            border 
            border-gray-200 
            rounded-lg 
            shadow 
            sm:p-6 
            dark:bg-gray-800 
            dark:border-gray-700"
        >
      <InputTodo/>
      <ListTodos/>
    </div>
  );
};

export default App
