import React from 'react'
import Todo from '../my-components/Todo';

const Todos = (props) => {
  return (
    <div className="container">
        <h3 className="text-center my-3">Todos List</h3>
        {props.todos.map((todo)=>{
            return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
    </div>
  )
}

export default Todos
