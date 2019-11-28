import React from 'react'
import { fetch, selectIsFinished, selectPagination, selectTodoDomain } from "./domain/todoDomain";
import {TodoView} from '../components/TodoView'
import { useSelector, useDispatch } from 'react-redux'

// TODO: selectTodoDomain
// TODO: selectIsFinished
export const TodoViewContainer:React.FC = () => {
  const dispatch = useDispatch()
  const list = useSelector(selectTodoDomain)
  const isFinished = useSelector(selectIsFinished)
  const pagination = useSelector(selectPagination)
  const _fetch = fetch(pagination)(dispatch)
  const check = () => () => {}

  return(<TodoView list={list} fetch={_fetch} isFinished={isFinished} check={check} />)
}