import { Component, createSignal } from "solid-js";
import { setTodos, todos, Todo } from "../App";

const InputTodo: Component<{}> = (props) => {
    const [todoId, setTodoId] = createSignal<number>(0);

    let input!: HTMLInputElement;
    
    const addTodo = (text: string) => {
        setTodoId(() => todoId() + 1);
        const [completed, setCompleted] = createSignal(false); 
        const newTodo = [...todos(), { id: todoId() , text, completed, setCompleted }] 
        setTodos(newTodo);
    }

    const delCompletedTodos = () => {
        let updateTodoList: Todo[] = [];
        todos().forEach(element => {if (!element.completed()) updateTodoList.push(element)});
        setTodos(updateTodoList);
    };

    return(
    <div 
        class="
            p-4
            m-2
            bg-gray-300 
            border 
            border-gray-200 
            rounded-lg 
            shadow 
            sm:p-6 
            md:p-8 
            dark:bg-gray-800 
            dark:border-gray-700"
        >
        <section class="flex items-center">   
            <div class="relative w-full">
                <input 
                    ref={input}
                    type="text" 
                    id="simple-search" 
                    class="
                        bg-gray-50 
                        border 
                        border-gray-300 
                        text-gray-900 
                        text-lg
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        block 
                        w-full  
                        p-2.5  
                        dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:text-white 
                        dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" 
                        placeholder="Create Todos..." 
                        required
                    />
            </div>
            <button 
                onClick={(e) => {
                if (!input.value.trim()) return;
                addTodo(input.value);
                input.value = "";
                }}
                type="button" 
                class="
                    p-2.5 
                    ml-2 
                    text-sm 
                    font-medium 
                    text-white 
                    bg-blue-700 
                    rounded-lg 
                    border 
                    border-blue-700 
                    hover:bg-blue-800 
                    focus:ring-4 
                    focus:outline-none 
                    focus:ring-blue-300 
                    dark:bg-blue-600 
                    dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                </svg>
                <span class="sr-only">Add Todo</span>
            </button>
            <button 
                onClick={delCompletedTodos}
                type="button"  
                class="
                    p-2.5 
                    ml-2 
                    text-sm 
                    font-medium 
                    text-white 
                    bg-blue-700 
                    rounded-lg 
                    border 
                    border-blue-700 
                    hover:bg-blue-800 
                    focus:ring-4 
                    focus:outline-none 
                    focus:ring-blue-300 
                    dark:bg-blue-600 
                    dark:hover:bg-blue-700 
                    dark:focus:ring-blue-800"
                >
                <svg   
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                    >
                    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                    </svg>
                <span class="sr-only">Delete Todos</span>
            </button>
        </section>
    </div>
  );
};

export default InputTodo;