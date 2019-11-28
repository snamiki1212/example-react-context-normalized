import React from "react";
import { useTodoList } from "./contexts/domain/todoDomain";
import {TodoView} from './components/TodoView'

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoViewContainer />
    </div>
  );
};

const TodoViewContainer:React.FC = () => {
  const { list, fetch, isFinished, check} = useTodoList();
  return(<TodoView list={list} fetch={fetch} isFinished={isFinished} check={check} />)
}


export default App;
