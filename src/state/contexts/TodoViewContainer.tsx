import React from 'react'
import { useTodoList } from "./domain/todoDomain";
import {TodoView} from '../../components/TodoView'


export const TodoViewContainer:React.FC = () => {
  const { list, fetch, isFinished, check} = useTodoList();
  return(<TodoView list={list} fetch={fetch} isFinished={isFinished} check={check} />)
}