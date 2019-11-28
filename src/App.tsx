import React from "react";
import {TodoViewContainer as TodoViewContextContainer} from './state/contexts/TodoViewContainer'
import {TodoViewContainer as TodoViewReducContainer} from './state/redux/TodoViewContainer'

// 

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoViewContextContainer />
      <TodoViewReducContainer />
    </div>
  );
};

export default App;
