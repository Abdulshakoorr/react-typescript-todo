import React,{useEffect, useRef, useState} from "react";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);


const handleDone =(id:number)=>{
    setTodos(todos.map((todo)=> {
        return todo.id === id?{...todo,completed:!todo.completed}:todo
    }))}
const handleDelete =(id:number)=>{
    setTodos(todos.filter((todo)=> todo.id !==id))}



const handleSub=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=> {
        return todo.id ===id?{...todo,todo:editTodo}:todo}))
    setEdit(false)    

}


const inputRef = useRef<HTMLInputElement>(null)

useEffect(()=>{
    inputRef.current?.focus()
},[edit])



  return (
    <form
    onSubmit={(e)=>{handleSub(e,todo.id)}}
      key={todo.id}
      className="p-2 px-4 rounded bg-teal-500 ml-2 mt-3 flex items-center justify-center space-x-4 text-md shadow-2xl border-2 border-emerald-400 shadow-gray-800"
    >
        {
            edit?(
                <input type="text" placeholder="update your task" 
                ref={inputRef}
                value={editTodo}
                onChange={(e)=> setEditTodo(e.target.value)}
                className='py-2 px-4 rounded shadow-md border-none focus:outline-none text-slate-700'
                />
            ):(
               
                    todo.completed ?<p className="mr-2 line-through text-black">{todo.todo} </p>: <p className="mr-2">{todo.todo} </p>
                
            )
        }

     
      <span 
      onClick={()=>{
        if(!edit && !todo.completed){
            setEdit(!edit)
        }
      }}
      className="bg-slate-800 p-2 rounded-full hover:text-xl transition-all duration-200 ease-linear cursor-pointer hover:text-blue-600 hover:bg-slate-200">
        <AiFillEdit />
      </span>
      <span
      onClick={()=>{handleDelete(todo.id)}}
      className="bg-slate-800 p-2 rounded-full hover:text-xl transition-all duration-200 ease-linear cursor-pointer hover:text-red-600 hover:bg-slate-200">
        <AiFillDelete />
      </span>
      <span
      onClick={()=>{handleDone(todo.id)}}
      className="bg-slate-800 p-2 rounded-full hover:text-xl transition-all duration-200 ease-linear cursor-pointer hover:text-green-600 hover:bg-slate-200">
        <AiOutlineCheck/>
      </span>
    </form>
  );
};

export default SingleTodo;
