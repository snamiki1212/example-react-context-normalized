import React from "react";
import {TodoViewContainer as TodoViewContextContainer} from './contexts/TodoViewContainer'
import {TodoViewContainer as TodoViewReducContainer} from './redux/TodoViewContainer'

// 
import { useSelector, useStore} from 'react-redux'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Test /> */}
      {/* <TodoViewContextContainer /> */}
      <TodoViewReducContainer />
    </div>
  );
};


// const Test = () => {
//   const store = useStore()
//   console.log('store', store.getState())
//   // const test =''
//   const test = useSelector((state:any) => state.TodoDomain.pagination)
//   return(<div>{test}</div>)
// }

export default App;
