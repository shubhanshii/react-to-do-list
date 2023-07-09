import React from 'react'
import Todo from './Todo'

const ToDoList = ({todos, setTodos}) => {
  return (
    <div className='todo-container'>
        <ul className="todo-list">
          {
          todos.map((todo)=>(
          <Todo 
          setTodos={setTodos}
          todos={todos} 
          text={todo.text} 
          key={todo.id}
          todo={todo}
          />
          ))};
        </ul>
        
    </div>
  )
}

export default ToDoList