import { useState } from "react";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import useFetch from "./hooks/useFetch"
import "./App.css";
import type { Todo } from "../../model";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList";

interface TodosApiResponse {
  todoList: Todo[],
};

export const App: React.FC = () => {
  // const { todoList } = useFetch<TodosApiResponse>('api/todos');

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination){
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    let add;
    const active = todos;
    const complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add as Todo);
    } else {
      complete.splice(destination.index, 0, add as Todo);
    }

    setCompletedTodos(complete);
    setTodo(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <h2 className='heading'>TODO List</h2>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};
