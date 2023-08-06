import { Accessor, Component, Index } from "solid-js";
import { Todo, todos } from "../App";

const ListTodos: Component<{}> = (props) => {
    const todoCompleted = "hover:scale-150 cursor-pointer w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
    const todoToComplete = "hover:scale-150 cursor-pointer w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"

    const toggleTodo = (todoAccessor: Accessor<Todo>) => {
        const id = todoAccessor().id;
        const listTodos = todos().find((t) => t.id === id);
        if (listTodos) {listTodos.setCompleted(!listTodos.completed())}
      }

    const editTodoTitle = (e: MouseEvent | FocusEvent, editTitle: boolean) => {
        const titleElement = e.target as HTMLHeadingElement;
        if (editTitle) {
                titleElement.contentEditable = 'true';
                titleElement.focus();
        } else {
                titleElement.contentEditable = 'false';
            }
        };

  return(
    <section class="p-8 m-2 bg-gray-200 rounded-lg ">
        <h2 
            onDblClick={(e) => editTodoTitle(e, true)}
            onfocusout={(e) => editTodoTitle(e, false)}
            class="mb-2 text-xl font-semibold text-gray-900 dark:text-white focus:outline-0">Edit this title:</h2>
        <ul class="max-w-md space-y-1 text-lg text-gray-500 list-inside dark:text-gray-400">
            <Index each={todos()}>
                {(todo) => 
                    <li 
                        class="flex items-center"
                        style={{ "text-decoration": todo().completed() ? "line-through" : "none"}}
                        >
                        <svg  
                            onClick={[toggleTodo, todo]}
                            class={ todo().completed() ? todoCompleted : todoToComplete } 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        {todo().text}
                    </li>
                }
        </Index>
        </ul>
    </section>
  );
};

export default ListTodos;