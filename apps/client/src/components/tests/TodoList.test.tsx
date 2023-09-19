import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import type { Todo } from "../../../../model";
import TodoList from "../TodoList";

const todoDone: Todo = {
  id: 1,
  todo: "doneTodo",
  isDone: true,
};

const todoNotDone: Todo = {
  id: 2,
  todo: "notDoneTodo",
  isDone: false,
};

describe("Todo List", () => {
  beforeEach(() => {
    render(<DragDropContext onDragEnd={() => {}}><TodoList setTodos={() => {}} todos={[todoNotDone]} completedTodos={[todoDone]} setCompletedTodos={() => {}} /></DragDropContext>);
  });

  test('should show a todo card with doneTodo', () => {
    expect(screen.getByText("doneTodo")).toBeDefined();
  });

  test('should show a todo card with notDoneTodo', () => {
    expect(screen.getByText("notDoneTodo")).toBeDefined();
  });
});
