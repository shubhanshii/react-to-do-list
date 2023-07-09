import React from 'react'
import plus from '../assets/plus.png'

const Form = ({inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler= (e) =>{

  console.log(e.target.value );
  setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
e.preventDefault();

 setTodos([
   ...todos,
   { text: inputText, completed: false, id: Math.random() * 1000 },
 ]);
 setInputText("");
  };
  return (
    <form>
        <input className="text-black" value={inputText} onChange={inputTextHandler} type='text'/>
        <button onClick={submitTodoHandler} type='submit' className='bg-gray-100'>
          <i className="fas fa-plus-square"></i>
           </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
    </form>
  ) 
}

export default Form