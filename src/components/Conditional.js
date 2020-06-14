import React, {Component} from 'react';
class Conditional extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button onClick={this.props.onclk} name="button">
                {this.props.st ? "Log out": "Log in"}
                </button>
                
            </div>
        )
    }
}
export default Conditional;
