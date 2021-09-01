
import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submithandler=e=>{
    e.preventDefault();
    console.log(task)
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");//it is alternative of settask
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue);
    setTodos(newTodos);
  }


  return (
    <div className="App">
      <center>
      <div className="card">
  <div className="card-body">
   <h5 className="card-title">Todo Management Application</h5>
   <form onSubmit={submithandler}>
     <input type="text"
     size="30"
     name="task"
     value={task}
     onChange={changeHandler}/>&nbsp;&nbsp;
   
     <input type="submit"
     value="Add"
    name="Add"/>
   </form><br/>
   <TodoList todolist={todos} deleteHandler={deleteHandler} />
  </div>
</div>
      </center>
      
    </div>
  );
}

export default App;
