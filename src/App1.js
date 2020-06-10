import React from 'react';
//import reactatomiclogo from './logo.svg';
import './App.css';
/** 
  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactatomiclogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pratyush is Learning React
        </a>
      </header>
    </div>
     
  );
}

*/
class Square extends React.Component{

  constructor(props){
    super(props);
    this.state={value:null,};
  }
  
  render(){
    return (
      <button className="square" onClick={()=>this.setState({value:"X"})}>
          {this.state.value}
      </button>
    )
  }
}
class Board extends React.Component{
  renderSquare(i){
    return (
      <Square value={i}/>
    );

  }
  render(){
    return(
      <div className="BoardShow">
        <div className="row1">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {<p></p>}
      </div>
      <div className="row2">
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
      
    </div>
    <div className="row3">
    {this.renderSquare(6)}
    {this.renderSquare(7)}
    {this.renderSquare(8)}
      
  </div>
      </div>
    );
  }
}
export default Board;
