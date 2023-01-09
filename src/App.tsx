import React, { useState } from 'react'
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { Todo } from './model';


const Data = [
  {
    id: 1,
    todo: 'Taking task note app',
    completed: false
  },
  {
    id: 2,
    todo: 'React typeScript ',
    completed: false
  },
  {
    id: 3,
    todo: 'take you work in minutes',
    completed: false
  }
]


const App:React.FC = () => {
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>(Data);

const handleAdd =(e:React.FormEvent)=>{
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo,completed:false}]);
    setTodo("");
  }
}
  console.log(todos)
  return (
    <div className='customeFont bg-teal-500 text-white min-h-screen'>
      <h1 className='text-center sm:text-xl font-bold py-6 uppercase shadow-xl'>Task Taking App!</h1>
      <div className="input">
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
      <div className="todoData">
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  )
}

export default App;