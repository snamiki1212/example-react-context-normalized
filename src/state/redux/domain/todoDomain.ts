import React from "react";
import { todos as todoData, fetchFromResource } from "../../../data";
import { Todo } from "../../../model/todo";
import { select as selectTodoEntity, actions as todoEntityActions} from '../entity/todoEntity'
import {createSelector} from 'reselect'

type todoID = Todo["id"];
type pagination = number;

/**
 * state
 */
const initialState: StateType = {
  ids: [],
  pagination: 0,
  isFinished: false
};
type StateType = {
  ids: todoID[];
  pagination: pagination;
  isFinished: boolean;
};

/**
 * selector
 */
const selectDomainIDs = (state: any) => state.TodoDomain.ids as todoID[];
export const selectTodoDomain = createSelector(selectDomainIDs, selectTodoEntity, (ids, entity) => {
  return ids.map(id => entity[id]).filter(e => e != null)
})
export const selectIsFinished = (state: any) => state.TodoDomain.isFinished;
export const selectPagination = (state: any) => state.TodoDomain.pagination;

/**
 * action
 */
const DOMAIN_TODO_FETCH = "DOMAIN_TODO_FETCH";
type ActionType = {
  type: typeof DOMAIN_TODO_FETCH;
  payload: { ids: todoID[]; isFinished: boolean };
};
const actions = {
  fetch: (ids: todoID[], isFinished: boolean) => ({ type: DOMAIN_TODO_FETCH, payload: { ids, isFinished } })
}

/**
 * middleware
 */
const per = 3;
export const fetch = (pagination: number) => (dispatch: React.Dispatch<any>) => () => {
  const fetched = fetchFromResource(pagination, per);
  const ids = fetched.map(e => e.id);
  const isFinished = fetched.length !== per;  
  dispatch(todoEntityActions.append(fetched))
  dispatch(actions.fetch(ids, isFinished));
};

/**
 * reducer
 */
export const reducer: React.Reducer<StateType, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DOMAIN_TODO_FETCH: {
      return {
        ...state,
        ids: [...state.ids, ...action.payload.ids],
        pagination: state.pagination + 1,
        isFinished: action.payload.isFinished
      };
    }
    default: {
      return state;
    }
  }
};
