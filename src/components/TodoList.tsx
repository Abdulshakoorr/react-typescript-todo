import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <ul className=' p-4 sm:px-64 mt-4 h-full flex flex-wrap items-center justify-center flex-col'>
        {
            todos.map((todo)=>{
                return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
            })
        }
    </ul>
  )
}

export default TodoList