import React from 'react'


const Todos =({todos ,deletetodo}) => {
const todoslist = todos.length ? ( 
    todos.map(todo => {
        return (
            <div className='collection-item' key={todo.id}  onClick={()=> {deletetodo(todo.id)}}>
                <span > { todo .content}</span>
            </div>
        )
    })
) :
 (
 <p className="center">you have nothting to do </p>
 )
 return <div className='todos collection'>{todoslist}</div>
}
export default Todos