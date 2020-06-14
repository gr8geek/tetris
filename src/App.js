import React ,{Component} from 'react';
import tododata from './components/tododata';
import TodoItem from './components/TodoItem';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      todo:tododata,
    };
    this.handleChange =this.handleChange.bind(this)
  }
  handleChange(id){
    console.log("Changed",id);
    this.setState(prevState =>{
      const updatedTodos = prevState.todo.map(todo=>{
        if(todo.id == id){
          todo.data=!todo.data
        }
        return todo
      })
      return {
        todo: updatedTodos
      }
    })

  }
  render(){
    const todolist=this.state.todo.map((todo)=>{
      return(
        <TodoItem id={todo.id} text={todo.text} handleChange={this.handleChange}/>
      )
    })
    return(
     <div>
       {todolist}
     </div>
    );
  }
}
export default App;
