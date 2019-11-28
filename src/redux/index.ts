import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, combineReducers} from 'redux'
import {reducer as TodoEntityReducer} from './entity/todoEntity'
import {reducer as TodoDomainReducer} from './domain/todoDomain'


const rootReducer = combineReducers({
  TodoEntity: TodoEntityReducer,
  TodoDomain: TodoDomainReducer
} as any)

export const store = createStore(rootReducer, composeWithDevTools());

