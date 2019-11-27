import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { TodoListCtxProvider } from './contexts/domain/todoDomain'
import { TodoEntityCtxProvider } from './contexts/entity/todoEntity'

const EntityProvider:React.FC = ({children}) => {
  return(<TodoEntityCtxProvider>{children}</TodoEntityCtxProvider>)
}

const DomainProvider: React.FC = ({children}) => {
  return(<TodoListCtxProvider>{children}</TodoListCtxProvider>)
}

ReactDOM.render(
  <EntityProvider>
    <DomainProvider>
      <App />
    </DomainProvider>
  </EntityProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
