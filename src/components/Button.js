import React, {Component} from 'react';
class Button extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
        
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onMouseOver={this.onHover} >Click Me</button>
            </div>
        );
    }
}
export default Button;
