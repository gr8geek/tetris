/** 
import React from 'react';
import ReactDOM from 'react-dom';
function MyApp(){
  return (
    <div><ul>
  <li>my name is Pratyush</li>
  <li>I live in deoghar</li>
  <li>I like Pokemon</li>
  </ul>
  </div>
  );
}
ReactDOM.render(
  <MyApp/>,document.getElementById("root"));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import App2 from './App2';
ReactDOM.render(<App2/>,
  document.getElementById("root"));
/*
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {    this.setState({      date: new Date()    });  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

*/









