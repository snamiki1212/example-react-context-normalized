import React from "react";
import { useTodoList } from "./contexts/domain/todoDomain";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoView />
    </div>
  );
};

const TodoView: React.FC = () => {
  const { list, fetch, isFinished, check} = useTodoList();

  return (
    <div>
      <button onClick={fetch}>fetch</button>
      {list.map(e => (
        <p key={e.id} onClick={check(e.id)}>{e.checked ? '✅' :'⬜️'}{e.id} {e.title}</p>
      ))}
      {isFinished && <p>finished!</p>}
    </div>
  );
};

export default App;
