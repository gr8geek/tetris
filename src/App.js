import React ,{Component} from 'react';
class App extends Component{
  constructor(){
    super()
    this.state={
      name:"Pratyush",
      age:20,

    };
  }
  render(){
    return(
      <div>
        <h4>Name:{this.state.name}</h4>
        <h6>Age:{this.state.age}</h6>
      </div>
    );
  }
}
export default App;
