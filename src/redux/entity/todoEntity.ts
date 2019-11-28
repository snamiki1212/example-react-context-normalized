import React from "react";
import { todos as todoData, fetchFromResource } from "../../data";
import { Todo } from "../../model/todo";

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
type ActionType = {
  type: typeof ENTITY_DOMAIN_APPEND;
  payload: { items: Todo[] };
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
    default: {
      return state;
    }
  }
};
