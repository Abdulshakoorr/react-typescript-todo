import React, { useReducer } from 'react'
import { Todo } from '../model'


type Action = {
    type: 'ADD_TODO',
    payload: string
} |{
    type: 'REMOVE_TODO',
    payload: number
}|{
    type: 'COMPLETE_TODO',
    payload: number
}

const todoReducer=(state:Todo[],action:Action)=>{
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,{id:Date.now(), todo: action.payload,completed:false}
            ];
            break;
        case "REMOVE_TODO":
            return state.filter((todo)=>todo.id !== action.payload)
            break;
        case "COMPLETE_TODO":
            return state.map((todo)=>{
                return todo.id !== action.payload?{...todo,completed:!todo.completed}:todo
            })
            break;
    
        default:
            state;
    }
}


const UseReducer = () => {
    const [state, dispatch] = useReducer(todoReducer, [])
  return (
    <div>UseReducer</div>
  )
}

export default UseReducer