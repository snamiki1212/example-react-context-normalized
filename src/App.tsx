import React from "react";
import { TodoViewContainer as TodoViewContextContainer } from "./state/contexts/TodoViewContainer";
import { TodoViewContainer as TodoViewReducContainer } from "./state/redux/TodoViewContainer";

const App: React.FC = () => {
  const [type, setType] = React.useState<undefined | "context" | "redux">(
    undefined
  );

  return (
    <div className="App">
      <div>
        <button
          style={{ color: type === "context" ? "red" : "black" }}
          onClick={() => setType("context")}
        >
          use context
        </button>
        <button
          style={{ color: type === "redux" ? "red" : "black" }}
          onClick={() => setType("redux")}
        >
          use redux
        </button>
      </div>

      {type === "context" && <TodoViewContextContainer />}
      {type === "redux" && <TodoViewReducContainer />}
    </div>
  );
};

export default App;
