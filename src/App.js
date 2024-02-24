import './App.css';
import { useState } from 'react';

const App = () =>{
  const [todo, setTodo] =useState([])
  const [input, setInput] = useState('')

  function deleteTodo(index) {
    setTodo(currentTodo => {
      return currentTodo.filter((_,idx) => idx !== index)
    })
  }

  return(
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 flex-col">
        <div className="flex justify-between gap-4">
          <input className="bg-slate-700 text-white p-3 rounded-md" type='text' onChange={(e)=> setInput(e.currentTarget.value)} value={input}></input>
          <button onClick={()=> {
            setTodo([...todo,input])
            setInput('')
          }}
          className="bg-slate-700 text-white px-7 py-2 rounded-md">
          Dodaj</button>
        </div>
        <div className="bg-red-400 rounded-md text-white w-full p-3 mt-5">
          <ul>
            {todo.map((task,index) => (
              <li key={index}>{index + 1}. {task}<button onClick={() => deleteTodo(index)} className="btn btn-danger px-5">Delete</button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};
export default App;
