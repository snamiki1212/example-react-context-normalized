import React from "react";
import { Todo } from "../../../model/todo";

type Record<T> = { [id: string]: T };

type Value = {
  todo: Record<Todo>;
  append: Function;
  check: (id: number) => void
};

const initialValue: Value = { todo: {}, append: () => {}, check: () => {} };
const TodoEntityCtx = React.createContext(initialValue);
export const TodoEntityCtxProvider: React.FC = ({ children }) => {
  const [todo, setTodo] = React.useState<Record<Todo>>({});

  const append = (todo: Todo) => {
    setTodo(prev => ({ ...prev, [todo.id]: todo }));
  };

  const check = (id: number) => {
    setTodo(prev => {
      const finded = prev[id];
      if (finded == null) return prev;
      finded.checked = !finded.checked;

      return { ...prev, [id]: { ...finded } };
    });
  };

  const value = {
    todo,
    append,
    check
  };

  return (
    <TodoEntityCtx.Provider value={value}>{children}</TodoEntityCtx.Provider>
  );
};

export const useTodoEntity = () => React.useContext(TodoEntityCtx);
