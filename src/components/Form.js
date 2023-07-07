import React from 'react'

const Form = () => {
  return (
    <form>
        <input type='text'></input>
        <button type='submit'>
           
        </button>
        <div className="select">
          <select name='todos' className="filter-todo">
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
    </form>
  )
}

export default Form