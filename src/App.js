import React from 'react';
import TodoItem from './components/TodoItem';

class App extends React.Component{
  constructor(){
      super();
      this.state={
        answer:"Yes"
      }
  }
  render(){
    return(<div>
      <h1>Something !! {this.state.answer}</h1>
    </div>);
  }
}
export default App;
