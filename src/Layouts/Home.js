import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from './TodoList/TodoList'

export default function Home() {
  return (
    <div>
          <TodoInput/>
          <TodoList/>
    </div>
  )
}
