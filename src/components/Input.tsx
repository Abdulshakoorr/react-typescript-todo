import React from 'react'

interface Props {
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e:React.FormEvent)=> void
}

const Input:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <div className='text-center pt-8'>
        <form onSubmit={(e)=>handleAdd(e)}>
            <input type="text" placeholder='enter your task here...'
            value={todo} 
            onChange={(e)=>{
                setTodo(e.target.value);
            }}
             className='py-2 px-4 rounded shadow-md border-none focus:outline-none text-slate-700'/>
             <button type='submit' className='p-2 ml-2 bg-slate-900 rounded
              hover:text-black hover:bg-slate-50 active:shadow-2xl 
              transition-colors duration-500 ease-in-out'>Go</button>
        </form>
    </div>
  )
}

export default Input