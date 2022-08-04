import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React ,{Component }from 'react'
import Todos from './todos'
import Addtodo from './Addtodo'
class App extends Component {



state ={
  todos :[  
   
  ]
    
}

deletetodo = ( id) => {
const todos =this.state.todos.filter(todo =>{return  id !== todo.id}) 
this.setState({todos:todos})}



addtodo = (todo) => {
  todo.id = Math.random()
  let  todos = [...this.state.todos , todo ]
  this.setState({todos})
  
}


render(){
  return (
    <div className='container todo-app'>
      <h1 className='center , blue-text'> todo's</h1>
      <Todos deletetodo={this.deletetodo}  todos= {this.state.todos}  />
      <Addtodo addtodo = {this.addtodo}   />
  

    </div>
  )
}

}

export default App;
