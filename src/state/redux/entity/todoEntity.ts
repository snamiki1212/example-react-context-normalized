import React from "react";
import { todos as todoData, fetchFromResource } from "../../../data";
import { Todo } from "../../../model/todo";

type TodoID = Todo["id"];

/**
 * state
 */
const initialState: StateType = {
  list: {}
};
type StateType = {
  list: { [id: string]: Todo };
};

/**
 * selector
 */
export const select = (state: any) => state.TodoEntity.list;

/**
 * action
 */
const ENTITY_DOMAIN_APPEND = "ENTITY_DOMAIN_APPEND";
const ENTITY_DOMAIN_CHECK = "ENTITY_DOMAIN_CHECK";
type ActionType =
  | {
      type: typeof ENTITY_DOMAIN_APPEND;
      payload: { items: Todo[] };
    }
  | {
      type: typeof ENTITY_DOMAIN_CHECK;
      payload: { todoID: TodoID };
    };
export const actions = {
  append: (items: Todo[]) => ({ type: 'ENTITY_DOMAIN_APPEND', payload: { items }}),
  check: (todoID: TodoID) => ({
    type: ENTITY_DOMAIN_CHECK,
    payload: { todoID }
  })
};

/**
 *  middleware
 */
export const check = (dispatch: React.Dispatch<any>) => (
  todoID: TodoID
) => () => {
  dispatch(actions.check(todoID));
};

/**
 * reducer
 */
export const reducer: React.Reducer<StateType, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ENTITY_DOMAIN_APPEND: {
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload.items.reduce(
            (acc, curr) => ({ ...acc, [curr.id]: curr }),
            {}
          )
        }
      };
    }
    case ENTITY_DOMAIN_CHECK: {
      const { todoID } = action.payload;
      return {
        ...state,
        list: {
          ...state.list,
          [todoID]: {
            ...state.list[todoID],
            checked: !state.list[todoID].checked
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};
