import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { TodoListCtxProvider } from "./contexts/domain/todoDomain";
import { TodoEntityCtxProvider } from "./contexts/entity/todoEntity";

import { Provider as ReduxProvider } from "react-redux";
import {store} from './redux'

const EntityProvider: React.FC = ({ children }) => {
  return <TodoEntityCtxProvider>{children}</TodoEntityCtxProvider>;
};

const DomainProvider: React.FC = ({ children }) => {
  return <TodoListCtxProvider>{children}</TodoListCtxProvider>;
};

const ContextProvider: React.FC = ({ children }) => {
  return (
    <EntityProvider>
      <DomainProvider>{children}</DomainProvider>
    </EntityProvider>
  );
};

ReactDOM.render(
  <ReduxProvider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ReduxProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
