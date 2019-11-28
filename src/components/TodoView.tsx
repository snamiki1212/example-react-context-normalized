import React from "react";
import { Todo } from "../model/todo";

type Props = {
  list: Todo[];
  isFinished: boolean;
  fetch: () => void;
  check: (id: number) => (e:any) => void;
};

export const TodoView: React.FC<Props> = ({
  list,
  fetch,
  isFinished,
  check
}) => {
  return (
    <div>
      <button onClick={fetch}>fetch</button>
      {list.map(e => (
        <p key={e.id} onClick={check(e.id)}>
          {e.checked ? "✅" : "⬜️"}
          {e.id} {e.title}
        </p>
      ))}
      {isFinished && <p>finished!</p>}
    </div>
  );
};
