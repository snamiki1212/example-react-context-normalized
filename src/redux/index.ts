import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, combineReducers, ReducersMapObject} from 'redux'
// import {reducer as TodoEntityReducer} from './entity/todoEntity'
import {reducer as TodoDomainReducer} from './domain/todoDomain'


// reducers
// const entity = {
//   ...TodoEntityReducer
// }
const rootReducer = combineReducers({
  TodoDomain: TodoDomainReducer
} as any)

export const store = createStore(rootReducer, composeWithDevTools()
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

);
