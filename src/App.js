import React ,{Component} from 'react';
import tododata from './components/tododata';
import TodoItem from './components/TodoItem';
class App extends Component{
  constructor(){
    super()
    this.state={
      todo:tododata
    };
  }
  render(){
   var tododisp= this.state.todo.map((data)=>{
      return(
        <TodoItem id={data.id} text={data.text}/>
      );
    });
    return(
     <div>
       {tododisp}
     </div>
    );
  }
}
export default App;
