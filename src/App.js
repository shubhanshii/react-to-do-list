 import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form' 
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus] = useState("all");
const [filteredTodos, setFilteredTodos] = useState([]);

useEffect(()=>{
filterHandler();
}, [todos, status]);

const filterHandler = () =>{
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter( todo => todo.completed === true))
break;
case 'uncompleted':
  setFilteredTodos(todos.filter( todo => todo.completed === false))
  break;
  default:
    setFilteredTodos(todos);
    }
}
return (
    <div className="App">
      <header><h1>To-Do List</h1></header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
