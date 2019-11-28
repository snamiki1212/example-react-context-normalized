import React from "react";
import { todos as todosData, fetchFromResource } from "../../data";
import { useTodoEntity } from "../entity/todoEntity";
import { Todo } from "../../model/todo";

// domain
type Value = {
  ids: number[];
  check: (id:number) => (e:any) => void;
  fetch: () => void;
  list: Todo[];
  isFinished: boolean;
};
const initialValue: Value = {
  ids: [],
  check: _ => _ => {},
  fetch: () => {},
  list: [],
  isFinished: false
};
const TodoListCtx = React.createContext(initialValue);

const per = 3;
export const TodoListCtxProvider: React.FC = ({ children }) => {
  const [ids, setIDs] = React.useState<number[]>([]);
  const [pagination, setPagination] = React.useState<number>(0);
  const { todo, append, check: checkEntity } = useTodoEntity();
  const [isFinished, setIsFinished] = React.useState<boolean>(false);

  const check = React.useCallback((id: number) => (e:any)=> {
    checkEntity(id)
  }, [checkEntity]);

  const fetch = React.useCallback(() => {
    if (isFinished) return;
    const fetched = fetchFromResource(pagination, per);

    setIDs(prev => [...prev, ...fetched.map(e => e.id)]);
    fetched.forEach(e => append(e));
    setPagination(prev => prev + 1)

    if (per !== fetched.length) {
      setIsFinished(true);
    }
  }, [pagination, todosData, append]);

  const list = React.useMemo(() => {
    return ids.map(id => todo[id]);
  }, [ids, todo]);

  const value = { ids, check, fetch, list, isFinished };
  return <TodoListCtx.Provider value={value}>{children}</TodoListCtx.Provider>;
};

export const useTodoList = () => React.useContext(TodoListCtx);
