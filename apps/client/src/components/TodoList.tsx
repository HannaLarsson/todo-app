import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import "./styles.css";
import type { Todo } from '../../../model';
import SingleTodo from './SingleTodo';


interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
    <div className="container">
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
          <span className="todos__heading">
            Active tasks
          </span>
          {todos.map(
            (t, i) => 
              <SingleTodo
                index={i}
                todo={t}
                key={t.id}
                todos={todos}
                setTodos={setTodos}
              />
            )
          }
          {provided.placeholder}
        </div>
        )}
      </Droppable>
      <Droppable droppableId='CompletedList'>
        {(provided, snapshot) => (
          <div
          className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">
                Done tasks
            </span>
            {
              completedTodos.map((t, i) =>
                <SingleTodo
                  index={i}
                  todo={t}
                  key={t.id}
                  todos={todos}
                  setTodos={setCompletedTodos}
                />
              )
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList